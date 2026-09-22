#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/target-horizon-announcement-v0.1"
BOARDS="$KIT/boards"
SOURCE="$ROOT/paper-tests/weather-season-global-ui-v0.1/boards/stimulus-a-always-visible-rail.png"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$BOARDS"

HEADER="$BOARDS/.weather-header.png"
magick "$SOURCE" -crop '500x142+0+0' +repage "$HEADER"

make_body() {
  local height="$1" output="$2"
  magick "$SOURCE" -crop "500x${height}+0+142" +repage "$output"
}

append_board() {
  local notice="$1" body_height="$2" output="$3"
  local body="$BOARDS/.body-${body_height}.png"
  make_body "$body_height" "$body"
  magick "$HEADER" "$notice" "$body" -append "$output"
}

NOTICE_A="$BOARDS/.notice-a.png"
magick -size 500x68 xc:'#e6ece7' \
  -fill '#55766b' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +16+11 'TOMORROW TARGETS' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 15 -annotate +16+30 '2 CONTEXTS TO PLAN FOR' \
  -fill '#315b55' -stroke none -draw 'roundrectangle 365,12 484,55 8,8' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 10 -gravity northwest -annotate +387+27 'INSPECT  >' \
  "$NOTICE_A"
append_board "$NOTICE_A" 690 "$BOARDS/stimulus-a-compact-summary.png"

NOTICE_A_OPEN="$BOARDS/.notice-a-open.png"
magick -size 500x248 xc:'#e6ece7' \
  -fill '#55766b' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +16+11 'TOMORROW TARGETS · 2' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 14 -annotate +16+30 'PLAN BEFORE SLEEP' \
  -fill '#d4e2dd' -stroke none \
  -draw 'roundrectangle 14,58 486,137 9,9 roundrectangle 14,149 486,232 9,9' \
  -fill '#315b55' -font "$FONT_BOLD" -pointsize 10 -gravity northwest \
  -annotate +26+69 'NELL · GIFT' -annotate +26+160 'PANTRY REQUEST' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 14 \
  -annotate +26+89 'FRESH · FORAGE · HERB' -annotate +26+180 'PROCESSED · CROP' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 9 \
  -annotate +26+115 'TOMORROW · RETURNS LATER' -annotate +26+206 'TOMORROW · PREPARE TODAY · RETURNS LATER' \
  -stroke '#8eb9ae' -strokewidth 1 -draw 'line 390,72 390,123 line 390,164 390,217' \
  -fill '#315b55' -stroke none -font "$FONT_BOLD" -pointsize 8 -gravity northwest \
  -annotate +407+86 'KEEP' -annotate +403+100 'FRESH' -annotate +406+185 '1 SLEEP' \
  "$NOTICE_A_OPEN"
append_board "$NOTICE_A_OPEN" 510 "$BOARDS/stimulus-a-inspect-open.png"

NOTICE_B="$BOARDS/.notice-b.png"
magick -size 500x188 xc:'#e6ece7' \
  -fill '#55766b' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +16+11 'TOMORROW · ALWAYS VISIBLE' \
  -stroke '#9aaca6' -strokewidth 1 -draw 'line 16,93 484,93' \
  -fill '#315b55' -font "$FONT_BOLD" -pointsize 10 \
  -annotate +20+31 'NELL · GIFT' -annotate +20+109 'PANTRY REQUEST' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 14 \
  -annotate +20+51 'FRESH · FORAGE · HERB' -annotate +20+129 'PROCESSED · CROP' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 9 \
  -annotate +20+74 'RETURNS LATER' -annotate +20+152 'PREPARE TODAY · 1 SLEEP · RETURNS LATER' \
  "$NOTICE_B"
append_board "$NOTICE_B" 570 "$BOARDS/stimulus-b-always-visible-rows.png"

NOTICE_C="$BOARDS/.notice-c.png"
magick -size 500x258 xc:'#e6ece7' \
  -fill '#55766b' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +16+11 'TOMORROW TARGETS' \
  -fill '#d4e2dd' -stroke '#8eb9ae' -strokewidth 2 \
  -draw 'roundrectangle 60,39 240,219 13,13 roundrectangle 260,39 440,219 13,13' \
  -fill '#315b55' -font "$FONT_BOLD" -pointsize 10 \
  -annotate +76+57 'NELL · GIFT' -annotate +276+57 'PANTRY' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 15 \
  -annotate +76+88 'FRESH HERB' -annotate +276+88 'PROCESSED' -annotate +276+109 'CROP' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 9 \
  -annotate +76+126 'TOMORROW' -annotate +76+149 'RETURNS LATER' \
  -annotate +276+144 'TOMORROW' -annotate +276+167 'PREPARE TODAY' \
  -fill '#315b55' -stroke none -draw 'roundrectangle 76,176 224,207 7,7 roundrectangle 276,186 424,207 7,7' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 9 \
  -annotate +111+185 'KEEP FRESH' -annotate +324+190 '1 SLEEP' \
  "$NOTICE_C"
append_board "$NOTICE_C" 500 "$BOARDS/stimulus-c-square-reminder-comparator.png"

SHEET="$BOARDS/comparison-sheet.png"
magick -size 1580x1030 xc:'#fff8df' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 28 -gravity northwest \
  -annotate +35+24 'TARGET HORIZON ANNOUNCEMENT v0.1' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 15 \
  -annotate +35+64 'Tomorrow target information remains outside the accepted Weather rail and play tableau.' \
  -fill '#315b55' -font "$FONT_BOLD" -pointsize 18 \
  -annotate +35+106 'A  COMPACT + INSPECT' -annotate +552+106 'B  ALWAYS-VISIBLE ROWS' -annotate +1069+106 'C  SQUARE STRESS COMPARATOR' \
  "$SHEET"

magick "$SHEET" \
  \( "$BOARDS/stimulus-a-compact-summary.png" -resize 480x864! \) -geometry +35+145 -composite \
  \( "$BOARDS/stimulus-b-always-visible-rows.png" -resize 480x864! \) -geometry +552+145 -composite \
  \( "$BOARDS/stimulus-c-square-reminder-comparator.png" -resize 480x864! \) -geometry +1069+145 -composite \
  "$SHEET"

magick mogrify -strip -define png:exclude-chunks=date,time "$BOARDS"/*.png
find "$BOARDS" -name '.*.png' -delete
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$BOARDS"/*.png
