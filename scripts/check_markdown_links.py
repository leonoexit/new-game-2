"""Report missing local Markdown link targets without external dependencies."""

from __future__ import annotations

import re
from pathlib import Path
from urllib.parse import unquote


ROOT = Path(__file__).resolve().parent.parent
LINK = re.compile(r"!?\[[^\]]*\]\((<[^>]*>|[^)\s]+)")
SKIP_DIRS = {".git", "tmp", "output", "__pycache__"}


def main() -> int:
    total = 0
    missing: list[str] = []
    for source in ROOT.rglob("*.md"):
        if SKIP_DIRS.intersection(source.relative_to(ROOT).parts):
            continue
        for match in LINK.finditer(source.read_text(encoding="utf-8")):
            raw = match.group(1).strip("<>")
            if (
                not raw
                or raw.startswith(("#", "/"))
                or "://" in raw
                or raw.startswith(("mailto:", "data:", "codex:"))
            ):
                continue
            local = unquote(raw.split("#", 1)[0].split("?", 1)[0])
            if not local:
                continue
            total += 1
            if not (source.parent / local).resolve().exists():
                missing.append(f"{source.relative_to(ROOT)} -> {raw}")
    for item in missing:
        print(item)
    print(f"Checked {total} local links; missing: {len(missing)}")
    return 1 if missing else 0


if __name__ == "__main__":
    raise SystemExit(main())
