#!/usr/bin/env bash
set -euo pipefail
STUDY_DIR="$(cd "$(dirname "$0")" && pwd)"
# Static UI composition; the square 160px illustration is not cropped or painted over.
# Current Decision 09 requires square on-table cards and takes precedence over
# the art skill's older generic portrait-frame note.
magick -size 224x224 xc:'#f6f1df' \
  -fill '#173d3b' -draw 'rectangle 0,0 223,25' \
  -font '/System/Library/Fonts/Supplemental/Verdana Bold.ttf' \
  -pointsize 12 -fill '#fff8df' -gravity northwest \
  -annotate +9+6 'Exposed Ore' \
  -pointsize 10 -annotate +177+8 '−1 AP' \
  "$STUDY_DIR/processed/exposed-ore-weak-point-preview-160-v0.1.png" \
  -geometry +32+30 -composite \
  -font '/System/Library/Fonts/Supplemental/Verdana.ttf' \
  -pointsize 11 -gravity northwest -fill '#173d3b' \
  -annotate +20+201 'Độ bền 3  ·  Thu được 1 Ore' \
  -fill none -stroke '#39786f' -strokewidth 2 -draw 'rectangle 1,1 222,222' \
  -strip "$STUDY_DIR/processed/exposed-ore-weak-point-card-224-v0.1.png"
