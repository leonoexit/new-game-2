"""Versioned, validated persistence for the local Card Register editor."""

from __future__ import annotations

import hashlib
import json
import os
import re
import tempfile
from pathlib import Path
from threading import RLock
from uuid import uuid4

ROOT = Path(__file__).resolve().parents[1]
REGISTER = ROOT / 'docs/current/LITTLE-VALLEY-CARD-REGISTER-V0.json'
ASSETS = ROOT / 'prototype/assets'
CORE_FIELDS = ['Identity', 'Type', 'State', 'Action', 'Description']
ISSUES = {'Wrong image', 'Wrong order / state', 'Image fails to load', 'Hard to recognize', 'Image missing', 'Other'}
ART_PATH = re.compile(r'^\./assets/[^/\\]+\.(?:png|jpe?g|webp)$', re.IGNORECASE)


class RegisterError(Exception):
    pass


class ValidationError(RegisterError):
    pass


class ConflictError(RegisterError):
    pass


class NotFoundError(RegisterError):
    pass


def validate_values(values: object, fields: list[str], types: list[str]) -> None:
    if not isinstance(values, dict) or set(values) != set(fields):
        raise ValidationError('Entry fields must match the register schema')
    if any(not isinstance(value, str) for value in values.values()):
        raise ValidationError('Every entry field must be text')
    identity = values['Identity'].strip()
    base = values['Base identity'].strip()
    state = values['State'].strip()
    if not identity or not values['Type'].strip() or not base:
        raise ValidationError('Identity, Type and Base identity are required')
    if values['Type'] not in types:
        raise ValidationError('Choose a Type from the canonical register vocabulary')
    if identity == base and state and state != 'No tracked state':
        raise ValidationError('A named state needs Identity (State)')
    if identity != base and (not state or identity != f'{base} ({state})'):
        raise ValidationError('A state row must use Identity (State) and its matching Base identity')


def validate_art(art: object, assets_dir: Path) -> None:
    if not isinstance(art, list):
        raise ValidationError('Runtime art must be a list')
    for item in art:
        if not isinstance(item, dict) or set(item) != {'label', 'path'}:
            raise ValidationError('Each runtime image needs a label and path')
        if not isinstance(item['label'], str) or not item['label'].strip():
            raise ValidationError('Runtime image label is required')
        path = item['path']
        if not isinstance(path, str) or not ART_PATH.fullmatch(path):
            raise ValidationError('Choose an image from prototype/assets')
        if not (assets_dir / Path(path).name).is_file():
            raise ValidationError(f'Runtime image does not exist: {path}')


def validate_feedback(feedback: object) -> None:
    if feedback is None:
        return
    if not isinstance(feedback, dict) or set(feedback) != {'issue', 'variant', 'note', 'updatedAt'}:
        raise ValidationError('Feedback has an unexpected format')
    if feedback['issue'] not in ISSUES:
        raise ValidationError('Choose a valid image issue')
    if not all(isinstance(feedback[key], str) for key in ['variant', 'note', 'updatedAt']):
        raise ValidationError('Feedback fields must be text')
    if len(feedback['note']) > 5000:
        raise ValidationError('Feedback note is too long')


def validate_register(document: object, assets_dir: Path = ASSETS) -> None:
    if not isinstance(document, dict) or document.get('schemaVersion') != 1:
        raise ValidationError('Unsupported Card Register schema')
    fields = document.get('fields')
    entries = document.get('entries')
    types = document.get('types')
    if not isinstance(fields, list) or fields[:5] != CORE_FIELDS or 'Base identity' not in fields:
        raise ValidationError('The five card fields and Base identity are required')
    if any(not isinstance(field, str) or not field for field in fields) or len(set(fields)) != len(fields):
        raise ValidationError('Register field names must be unique text')
    if not isinstance(types, list) or not types or any(not isinstance(item, str) or not item.strip() for item in types) or len(set(types)) != len(types):
        raise ValidationError('Canonical Type vocabulary must be unique nonempty text')
    if not isinstance(entries, list):
        raise ValidationError('Register entries must be a list')
    ids = set()
    identities = set()
    for entry in entries:
        if not isinstance(entry, dict) or not isinstance(entry.get('id'), str) or not entry['id']:
            raise ValidationError('Every entry needs a stable ID')
        if entry['id'] in ids:
            raise ValidationError(f'Duplicate entry ID: {entry["id"]}')
        ids.add(entry['id'])
        validate_values(entry.get('values'), fields, types)
        label = entry['values']['Identity'].strip().casefold()
        if label in identities:
            raise ValidationError(f'Duplicate Identity (State): {entry["values"]["Identity"]}')
        identities.add(label)
        validate_art(entry.get('art', []), assets_dir)
        validate_feedback(entry.get('feedback'))
        if 'legacyWorkbookRow' in entry and (not isinstance(entry['legacyWorkbookRow'], int) or entry['legacyWorkbookRow'] < 1):
            raise ValidationError('Legacy workbook row must be a positive number')


class RegisterStore:
    def __init__(self, path: Path = REGISTER, assets_dir: Path = ASSETS):
        self.path = path
        self.assets_dir = assets_dir
        self.lock = RLock()

    def _read(self) -> tuple[dict, str]:
        raw = self.path.read_bytes()
        document = json.loads(raw)
        validate_register(document, self.assets_dir)
        return document, hashlib.sha256(raw).hexdigest()

    def load(self) -> tuple[dict, str]:
        with self.lock:
            return self._read()

    def assets(self) -> list[str]:
        return sorted(path.name for path in self.assets_dir.iterdir()
                      if path.is_file() and path.suffix.lower() in {'.png', '.jpg', '.jpeg', '.webp'})

    def mutate(self, revision: str, change) -> tuple[dict, str]:
        if not isinstance(revision, str) or not revision:
            raise ValidationError('A register revision is required; reload the page')
        with self.lock:
            document, current = self._read()
            if revision != current:
                raise ConflictError('The register changed in another tab or process; reload before saving')
            change(document)
            validate_register(document, self.assets_dir)
            rendered = (json.dumps(document, ensure_ascii=False, indent=2) + '\n').encode('utf-8')
            handle, temporary = tempfile.mkstemp(prefix='.card-register-', suffix='.json', dir=self.path.parent)
            try:
                with os.fdopen(handle, 'wb') as file:
                    file.write(rendered)
                    file.flush()
                    os.fsync(file.fileno())
                os.replace(temporary, self.path)
            finally:
                if os.path.exists(temporary):
                    os.unlink(temporary)
            return document, hashlib.sha256(rendered).hexdigest()

    def add(self, revision: str, values: object, art: object, after_id: str | None = None) -> tuple[dict, str, str]:
        entry_id = 'entry-' + uuid4().hex
        def change(document):
            entry = {'id': entry_id, 'values': values, 'art': art}
            if after_id:
                parent = next((item for item in document['entries'] if item['id'] == after_id), None)
                if parent is None:
                    raise NotFoundError('Base entry no longer exists')
                if not isinstance(values, dict) or values.get('Base identity') != parent['values']['Base identity']:
                    raise ValidationError('New state must belong to the selected base identity')
                last = max(index for index, item in enumerate(document['entries'])
                           if item['values']['Base identity'] == values['Base identity'])
                document['entries'].insert(last + 1, entry)
            else:
                document['entries'].append(entry)
        document, new_revision = self.mutate(revision, change)
        return document, new_revision, entry_id

    def edit(self, revision: str, entry_id: str, values: object, art: object) -> tuple[dict, str]:
        def change(document):
            entry = next((item for item in document['entries'] if item['id'] == entry_id), None)
            if entry is None:
                raise NotFoundError('Entry no longer exists')
            entry['values'] = values
            entry['art'] = art
        return self.mutate(revision, change)

    def set_feedback(self, revision: str, entry_id: str, feedback: object) -> tuple[dict, str]:
        def change(document):
            entry = next((item for item in document['entries'] if item['id'] == entry_id), None)
            if entry is None:
                raise NotFoundError('Entry no longer exists')
            entry['feedback'] = feedback
        return self.mutate(revision, change)
