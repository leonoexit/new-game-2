"""Validate authoring batches without promoting candidates to playable V0."""

import json
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
BATCH_DIR = ROOT / "docs" / "content-batches"
REQUIRED = {"batch_id", "status", "scope", "source_facts", "adaptation", "variants", "support_cards", "issues", "deferred"}


def validate(path: Path) -> list[str]:
    errors: list[str] = []
    try:
        data = json.loads(path.read_text(encoding="utf-8"))
    except (OSError, json.JSONDecodeError) as exc:
        return [f"{path.name}: cannot read JSON: {exc}"]

    missing = REQUIRED - data.keys()
    if missing:
        return [f"{path.name}: missing fields: {', '.join(sorted(missing))}"]
    if data["status"] not in {"imported_draft", "partially_selected", "selected", "deferred"}:
        errors.append(f"{path.name}: invalid status")
    if not isinstance(data["source_facts"], list) or not data["source_facts"]:
        errors.append(f"{path.name}: source_facts must be a nonempty list")
    else:
        for source in data["source_facts"]:
            if not isinstance(source, dict) or not source.get("fact") or not (source.get("url") or source.get("path")):
                errors.append(f"{path.name}: each source fact needs fact and url/path")
            if isinstance(source, dict) and source.get("path") and not (ROOT / source["path"]).exists():
                errors.append(f"{path.name}: missing local source {source['path']}")
    adaptation = data["adaptation"]
    if not isinstance(adaptation, dict):
        errors.append(f"{path.name}: adaptation must be an object")
    elif data["status"] == "selected":
        needed = ("label", "card_type", "location", "action", "result")
        if not all(adaptation.get(key) for key in needed) or not (adaptation.get("output") or adaptation.get("output_options")):
            errors.append(f"{path.name}: selected batch has incomplete playable action")
    identities: list[str] = []
    for field in ("variants", "support_cards"):
        rows = data[field]
        if not isinstance(rows, list) or not rows:
            errors.append(f"{path.name}: {field} must be a nonempty list")
            continue
        for row in rows:
            name = row.get("identity") if isinstance(row, dict) else None
            if not isinstance(name, str) or not name.strip():
                errors.append(f"{path.name}: {field} row missing identity")
            else:
                identities.append(name)
    if len(identities) != len(set(identities)):
        errors.append(f"{path.name}: duplicate identity within batch")
    if data["status"] == "partially_selected":
        promotion = data.get("promotion")
        if not isinstance(promotion, dict):
            errors.append(f"{path.name}: partially selected batch needs promotion object")
        else:
            variant_names = {row.get("identity") for row in data["variants"] if isinstance(row, dict)}
            support_names = {row.get("identity") for row in data["support_cards"] if isinstance(row, dict)}
            selected_variants = promotion.get("selected_variants", [])
            selected_support = promotion.get("selected_support_cards", [])
            if not selected_variants or not set(selected_variants) <= variant_names:
                errors.append(f"{path.name}: promotion selected_variants must name batch variants")
            if not selected_support or not set(selected_support) <= support_names:
                errors.append(f"{path.name}: promotion selected_support_cards must name batch support cards")
            contract = promotion.get("contract")
            if not isinstance(contract, str) or not (ROOT / contract).exists():
                errors.append(f"{path.name}: promotion contract must exist")
    if isinstance(adaptation, dict) and adaptation.get("output") is not None and adaptation["output"] not in identities:
        errors.append(f"{path.name}: output identity has no variant/support card")
    if isinstance(adaptation, dict):
        output_options = adaptation.get("output_options", [])
        if not isinstance(output_options, list):
            errors.append(f"{path.name}: adaptation output_options must be a list")
            output_options = []
        for output in output_options:
            if output not in identities:
                errors.append(f"{path.name}: output option {output} has no variant/support card")
        for output in adaptation.get("related_outputs", []):
            if output not in identities:
                errors.append(f"{path.name}: related output {output} has no variant/support card")
    if isinstance(data["variants"], list):
        for row in data["variants"]:
            if not isinstance(row, dict):
                continue
            override = row.get("pilot_override")
            if override is None:
                continue
            if not isinstance(override, dict):
                errors.append(f"{path.name}: {row.get('identity', '<unnamed>')} pilot_override must be an object or null")
                continue
            outputs = [override[key] for key in ("output", "harvest_output") if override.get(key) is not None]
            for key in ("output_options", "related_outputs", "chop_outputs"):
                values = override.get(key, [])
                if not isinstance(values, list):
                    errors.append(f"{path.name}: {row.get('identity', '<unnamed>')} {key} must be a list")
                    continue
                outputs.extend(values)
            for output in outputs:
                if output not in identities:
                    errors.append(f"{path.name}: {row.get('identity', '<unnamed>')} output {output} has no variant/support card")
    issues = data["issues"]
    if not isinstance(issues, list):
        errors.append(f"{path.name}: issues must be a list")
    else:
        for issue in issues:
            if not isinstance(issue, dict) or not all(issue.get(key) for key in ("scope", "topic", "status", "note")):
                errors.append(f"{path.name}: issue needs scope, topic, status and note")
    return errors


def main() -> int:
    paths = sorted(BATCH_DIR.glob("*.json"))
    if not paths:
        print("No content batches found")
        return 1
    errors = [error for path in paths for error in validate(path)]
    batch_ids: dict[str, str] = {}
    variants: dict[str, str] = {}
    for path in paths:
        try:
            data = json.loads(path.read_text(encoding="utf-8"))
        except (OSError, json.JSONDecodeError):
            continue  # validate() already reported this file
        batch_id = data.get("batch_id")
        if not isinstance(batch_id, str) or not batch_id.strip():
            errors.append(f"{path.name}: missing batch_id")
        elif batch_id in batch_ids:
            errors.append(f"{path.name}: batch_id also used by {batch_ids[batch_id]}")
        else:
            batch_ids[batch_id] = path.name
        for row in data.get("variants", []):
            if not isinstance(row, dict) or not isinstance(row.get("identity"), str):
                continue
            identity = row["identity"]
            if identity in variants:
                errors.append(f"{path.name}: variant {identity} also appears in {variants[identity]}")
            else:
                variants[identity] = path.name
    if errors:
        print("\n".join(errors))
        return 1
    print(f"Validated {len(paths)} content batch(es)")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
