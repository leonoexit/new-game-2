"""Data integrity checks for the repo-backed Card Register editor."""
from __future__ import annotations

import shutil
import tempfile
import unittest
from pathlib import Path

from card_register_store import ASSETS, REGISTER, ConflictError, RegisterStore, ValidationError


class RegisterStoreTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.path = Path(self.temp.name) / 'register.json'
        shutil.copy2(REGISTER, self.path)
        self.store = RegisterStore(self.path, ASSETS)
        self.document, self.revision = self.store.load()

    def tearDown(self):
        self.temp.cleanup()

    def values(self, identity='QA Card'):
        values = {field: '' for field in self.document['fields']}
        values.update({'Identity': identity, 'Type': 'Item', 'Base identity': identity})
        return values

    def test_migrated_register(self):
        self.assertEqual(len(self.document['entries']), 113)
        self.assertEqual(len(self.document['fields']), 15)
        self.assertEqual(sum(bool(entry['art']) for entry in self.document['entries']), 9)

    def test_add_edit_and_state_are_persistent(self):
        document, revision, entry_id = self.store.add(self.revision, self.values(), [])
        self.assertEqual(len(document['entries']), 114)
        values = self.values()
        values['Description'] = 'A small test card.'
        document, revision = self.store.edit(revision, entry_id, values, [])
        self.assertEqual(next(e for e in document['entries'] if e['id'] == entry_id)['values']['Description'], 'A small test card.')
        state_values = self.values('QA Card (Growing)')
        state_values['Base identity'] = 'QA Card'
        state_values['State'] = 'Growing'
        document, revision, state_id = self.store.add(revision, state_values, [], entry_id)
        self.assertNotEqual(entry_id, state_id)
        self.assertEqual(document['entries'][-2]['id'], entry_id)
        self.assertEqual(document['entries'][-1]['id'], state_id)
        self.assertEqual(len(self.store.load()[0]['entries']), 115)

    def test_invalid_write_does_not_change_source(self):
        before = self.path.read_bytes()
        with self.assertRaises(ValidationError):
            self.store.add(self.revision, self.values(self.document['entries'][0]['values']['Identity']), [])
        self.assertEqual(self.path.read_bytes(), before)
        with self.assertRaises(ValidationError):
            self.store.add(self.revision, self.values(), [{'label': 'Fake', 'path': './assets/absent.png'}])
        self.assertEqual(self.path.read_bytes(), before)
        invalid_state = self.values('QA Card (Growing)')
        invalid_state['Base identity'] = 'QA Card'
        invalid_state['State'] = 'Mature'
        with self.assertRaises(ValidationError):
            self.store.add(self.revision, invalid_state, [])
        self.assertEqual(self.path.read_bytes(), before)
        unlabelled_state = self.values()
        unlabelled_state['State'] = 'Growing'
        with self.assertRaises(ValidationError):
            self.store.add(self.revision, unlabelled_state, [])
        self.assertEqual(self.path.read_bytes(), before)

    def test_stale_revision_and_feedback(self):
        first_id = self.document['entries'][0]['id']
        feedback = {'issue': 'Wrong image', 'variant': '', 'note': 'Wrong tree', 'updatedAt': '2026-09-26T00:00:00Z'}
        _, revision = self.store.set_feedback(self.revision, first_id, feedback)
        with self.assertRaises(ConflictError):
            self.store.add(self.revision, self.values(), [])
        self.assertEqual(self.store.load()[0]['entries'][0]['feedback'], feedback)
        self.store.set_feedback(revision, first_id, None)
        self.assertIsNone(self.store.load()[0]['entries'][0]['feedback'])


if __name__ == '__main__':
    unittest.main()
