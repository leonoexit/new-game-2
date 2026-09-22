#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.4"
BASE="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.3"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"
"$BASE/build-fixture.sh" >/dev/null

make_target() {
  local base_slug="$1" slug="$2" title="$3" accent="$4"
  local cost="$5" tag1="$6" tag2="$7" description="$8"
  magick "$BASE/cards/$base_slug.png" \
    -fill '#173d3b' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8df' -stroke none -draw 'rectangle 0,286 400,400' \
    -fill "$accent" -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 28 -gravity north -fill '#fff8df' -stroke none -annotate +0+14 "$title" \
    -fill '#173d3b' -stroke '#fff8df' -strokewidth 2 -draw 'roundrectangle 14,70 110,110 11,11' \
    -font "$FONT_BOLD" -pointsize 16 -gravity northwest -fill '#fff8df' -stroke none -annotate +29+80 "$cost" \
    -fill "$accent" -stroke none -draw 'roundrectangle 15,305 190,344 11,11 roundrectangle 210,305 385,344 11,11' \
    -font "$FONT_BOLD" -pointsize 15 -gravity northwest -fill '#fff8df' \
    -annotate +31+314 "$tag1" -annotate +226+314 "$tag2" \
    -font "$FONT_BOLD" -pointsize 17 -gravity south -fill '#264e49' -annotate +0+16 "$description" \
    "$CARDS/$slug.png"
}

make_target eel eel 'EEL SIGHTING' '#35778a' '-2 AP' 'ROD' 'RAIN' 'GAIN FRESH EEL'
make_target person-today person-today 'PERSON TODAY' '#b85f3e' '-1 AP' 'GIFT ITEM' 'TODAY' 'RESOLVE HEART'
make_target exposed-ore exposed-ore 'EXPOSED ORE' '#9a653d' '-1 AP' 'PICKAXE' 'READY' 'GAIN ORE · MARK SPENT'
make_target direct-descent direct-descent 'DIRECT DESCENT' '#4f7658' '-1 AP' 'DEPTH +1' 'NO YIELD' 'ADVANCE CURRENT FRONTIER'
make_target search-side-tunnel search-side-tunnel 'SEARCH SIDE TUNNEL' '#705677' '-1 AP' 'DEPTH +0' 'REVEAL' 'REVEAL AN ORE SOURCE'

place_scaled_card() {
  local board="$1" slug="$2" x="$3" y="$4" size="$5"
  magick "$board" \( "$CARDS/$slug.png" -filter point -resize "${size}x${size}!" \) -geometry "+$x+$y" -composite "$board"
}

COMMITMENT="$BOARDS/commitment-test-board.png"
magick -size 1000x1050 xc:'#f8f0d4' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+18 'COMMITMENT TEST v0.2.4 · EVERY SQUARE IS A TARGET' \
  -fill '#60746e' -font "$FONT_REG" -pointsize 15 -annotate +0+55 'Move the loose tokens onto one target. Read cost from the upper-left corner.' \
  -fill '#edf0dc' -stroke none -draw 'rectangle 35,395 965,475' \
  -fill '#59665f' -draw 'rectangle 35,395 47,475' \
  -fill '#3f514b' -font "$FONT_BOLD" -pointsize 21 -gravity northwest -annotate +70+412 'MINE STATUS · DEPTH 3 · PERSISTS · NEXT CHECKPOINT IN 3' \
  -fill '#68746f' -font "$FONT_REG" -pointsize 14 -annotate +70+446 'Inspect only · horizontal strip · not a commitment target' \
  -fill '#315650' -stroke '#315650' -strokewidth 3 \
  -draw 'roundrectangle 35,910 220,990 14,14 roundrectangle 240,910 425,990 14,14 roundrectangle 445,910 630,990 14,14 roundrectangle 650,910 835,990 14,14' \
  -fill '#fff8df' -stroke none -font "$FONT_BOLD" -pointsize 19 -gravity northwest \
  -annotate +62+938 'CHARACTER' -annotate +303+938 'ROD' -annotate +478+938 'PICKAXE' -annotate +680+938 'GIFT ITEM' \
  "$COMMITMENT"
place_scaled_card "$COMMITMENT" eel 180 85 290
place_scaled_card "$COMMITMENT" person-today 530 85 290
place_scaled_card "$COMMITMENT" exposed-ore 35 505 290
place_scaled_card "$COMMITMENT" direct-descent 355 505 290
place_scaled_card "$COMMITMENT" search-side-tunnel 675 505 290

STRIP="$BOARDS/scroll-strip-start.png"
magick -size 1000x2200 xc:'#fff8df' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 30 -gravity north -annotate +0+21 'MINE + FISHING · TARGET/COST v0.2.4' \
  -fill '#4b6b64' -font "$FONT_REG" -pointsize 16 -annotate +0+68 'EVERY SQUARE IS A TARGET · COST LIVES IN THE UPPER-LEFT CORNER' \
  -fill '#9a493b' -font "$FONT_BOLD" -pointsize 17 -annotate +0+103 'SCROLL / FOCUS / INSPECT = 0 AP · NOT TRAVEL' \
  -fill '#c7e8e5' -stroke none -draw 'rectangle 0,142 1000,805' \
  -fill '#2d7080' -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+168 'RIVER' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 17 -annotate +58+220 'AREA · WEATHER: RAIN · background is not a target' \
  -fill '#f5fbef' -draw 'rectangle 88,690 912,775' \
  -fill '#39786f' -draw 'rectangle 88,690 100,775' \
  -fill '#2c625b' -font "$FONT_BOLD" -pointsize 20 -annotate +122+706 'FISH RECORD · STATUS STRIP · NOT A TARGET' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 15 -annotate +122+740 'Minnow recorded · Eel (Rain) open · mastery 1 / 2' \
  -fill '#f6dca7' -draw 'rectangle 0,825 1000,985' \
  -fill '#8a5c40' -font "$FONT_BOLD" -pointsize 22 -gravity north -annotate +0+855 'SCROLL / FOCUS = 0 AP · BOTH AREA STATES PERSIST' \
  -fill '#8a765b' -font "$FONT_REG" -pointsize 15 -annotate +0+900 'Interface navigation only; no geography or travel distance.' \
  -fill '#d6dcc9' -draw 'rectangle 0,985 1000,2200' \
  -fill '#43534e' -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+1015 'MINE' \
  -fill '#65716b' -font "$FONT_REG" -pointsize 17 -annotate +58+1065 'AREA · three square commitment targets' \
  -fill '#edf0dc' -draw 'rectangle 88,1110 912,1200' \
  -fill '#59665f' -draw 'rectangle 88,1110 100,1200' \
  -fill '#3f514b' -font "$FONT_BOLD" -pointsize 21 -annotate +122+1128 'DEPTH 3 · PERSISTS · NEXT CHECKPOINT IN 3' \
  -fill '#68746f' -font "$FONT_REG" -pointsize 15 -annotate +122+1162 'STATUS STRIP · inspect only · not a target' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 17 -annotate +88+2075 'PLAY: Character TO a transition · Character + Pickaxe TO Exposed Ore' \
  -fill '#5d6964' -font "$FONT_REG" -pointsize 15 -annotate +88+2115 'Only Direct Descent increases Depth. Search reveals; Exposed Ore extracts.' \
  "$STRIP"
place_scaled_card "$STRIP" eel 88 270 400
place_scaled_card "$STRIP" person-today 500 270 400
place_scaled_card "$STRIP" exposed-ore 88 1230 400
place_scaled_card "$STRIP" direct-descent 500 1230 400
place_scaled_card "$STRIP" search-side-tunnel 88 1642 400

magick "$STRIP" -filter point -resize 500x1100! "$BOARDS/scroll-strip-mobile-preview.png"
magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
