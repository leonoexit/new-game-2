#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.3"
BASE="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.2"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"
"$BASE/build-fixture.sh" >/dev/null

EXPOSED_ART="$ROOT/art/style-studies/exposed-ore-action-v0.1/processed/exposed-ore-action-512-v0.1.png"
DESCENT_ART="$ROOT/art/style-studies/safe-descent-action-v0.1/processed/safe-descent-action-512-v0.1.png"
SEARCH_ART="$ROOT/art/style-studies/hidden-ore-route-action-v0.1/processed/hidden-ore-route-action-512-v0.1.png"
EEL_ART="$ROOT/art/style-studies/eel-sighting-opportunity-v0.1/processed/eel-sighting-opportunity-cardcrop-512-v0.1.png"

make_card() {
  local art="$1" slug="$2" title="$3" accent="$4"
  local badge1="$5" badge2="$6" badge3="$7" description="$8"
  magick "$art" -filter point -resize 400x400! \
    -fill '#173d3b' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8df' -stroke none -draw 'rectangle 0,286 400,400' \
    -fill "$accent" -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 28 -gravity north -fill '#fff8df' -stroke none -annotate +0+14 "$title" \
    -fill "$accent" -stroke none -draw 'roundrectangle 15,305 126,344 11,11 roundrectangle 144,305 256,344 11,11 roundrectangle 274,305 385,344 11,11' \
    -font "$FONT_BOLD" -pointsize 15 -gravity northwest -fill '#fff8df' \
    -annotate +27+314 "$badge1" -annotate +156+314 "$badge2" -annotate +286+314 "$badge3" \
    -font "$FONT_BOLD" -pointsize 17 -gravity south -fill '#264e49' -annotate +0+16 "$description" \
    "$CARDS/$slug.png"
}

make_card "$EEL_ART" eel 'EEL SIGHTING' '#35778a' '2 AP' 'ROD' 'RAIN' 'GAIN FRESH EEL'
make_card "$BASE/cards/person-today.png" person-today 'PERSON TODAY' '#b85f3e' '1 AP' 'ITEM' 'TODAY' 'GIFT ITEM · RESOLVE HEART'
make_card "$BASE/cards/mine-depth.png" mine-state 'MINE STATE' '#4f5f5a' 'DEPTH 3' 'PERSISTS' 'CP IN 3' 'CHOOSE ONE ACTION BELOW'
make_card "$EXPOSED_ART" exposed-ore 'EXPOSED ORE' '#9a653d' '1 AP' 'DEPTH +0' 'READY' 'GAIN ORE · MARK SPENT'
make_card "$DESCENT_ART" direct-descent 'DIRECT DESCENT' '#4f7658' '1 AP' 'DEPTH +1' 'NO YIELD' 'ADVANCE CURRENT FRONTIER'
make_card "$SEARCH_ART" search-side-tunnel 'SEARCH SIDE TUNNEL' '#705677' '1 AP' 'DEPTH +0' 'REVEAL' 'REVEAL AN ORE SOURCE'

place_card() {
  local board="$1" slug="$2" x="$3" y="$4"
  magick "$board" "$CARDS/$slug.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/scroll-strip-start.png"
magick "$BASE/boards/scroll-strip-start.png" \
  -fill '#fff8df' -stroke none -draw 'rectangle 0,0 1000,142' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 30 -gravity north -annotate +0+21 'MINE + FISHING · ACTION-ART v0.2.3' \
  -fill '#4b6b64' -font "$FONT_REG" -pointsize 16 -annotate +0+68 'ART SHOWS ACTION OR TARGET · TAGS SHOW COST/STATE · TEXT SHOWS CONSEQUENCE' \
  -fill '#9a493b' -font "$FONT_BOLD" -pointsize 17 -annotate +0+103 'SCROLL / FOCUS / INSPECT = 0 AP · NOT TRAVEL' \
  -fill '#f5fbef' -stroke none -draw 'rectangle 88,704 912,804' \
  -fill '#39786f' -draw 'rectangle 88,704 100,804' \
  -fill '#2c625b' -font "$FONT_BOLD" -pointsize 22 -gravity northwest -annotate +122+720 'FISH RECORD · STATUS STRIP · NOT A PLAY TARGET' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 17 -annotate +122+756 'Minnow recorded · Eel (Rain) open · mastery 1 / 2 · record never consumes Fish' \
  -fill '#bec9b9' -stroke none -draw 'rectangle 0,2160 1000,2320' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 17 -annotate +88+2185 'PLAY: Character + Tool TO one action square · Mine State is inspect-only' \
  -fill '#5d6964' -font "$FONT_REG" -pointsize 15 -annotate +88+2225 'Extract, descend or search. Only Direct Descent increases Depth.' \
  "$STRIP"
place_card "$STRIP" eel 88 278
place_card "$STRIP" person-today 500 278
place_card "$STRIP" mine-state 88 1362
place_card "$STRIP" exposed-ore 500 1362
place_card "$STRIP" direct-descent 88 1774
place_card "$STRIP" search-side-tunnel 500 1774

DETAIL="$BOARDS/focus-detail-panels.png"
magick -size 1200x1730 xc:'#efe9d2' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+25 'DETAIL · RESOLVE THE CHOSEN ACTION IN ORDER' \
  -fill '#526c65' -font "$FONT_REG" -pointsize 16 -annotate +0+72 'Inspect costs 0 AP. Root art already showed the action or target.' \
  "$DETAIL"

panel() {
  local x="$1" y="$2" accent="$3" title="$4"
  local s1="$5" s2="$6" s3="$7" s4="$8" s5="$9" note="${10}"
  magick "$DETAIL" \
    -fill '#fffaf0' -stroke "$accent" -strokewidth 3 -draw "roundrectangle $x,$y $((x+530)),$((y+480)) 18,18" \
    -fill "$accent" -stroke none -draw "roundrectangle $((x+18)),$((y+18)) $((x+512)),$((y+76)) 12,12" \
    -fill '#fff8df' -font "$FONT_BOLD" -pointsize 20 -gravity northwest -annotate +$((x+36))+$((y+36)) "$title" \
    -fill '#315650' -font "$FONT_BOLD" -pointsize 17 \
    -annotate +$((x+34))+$((y+112)) "1.  $s1" -annotate +$((x+34))+$((y+170)) "2.  $s2" \
    -annotate +$((x+34))+$((y+228)) "3.  $s3" -annotate +$((x+34))+$((y+286)) "4.  $s4" \
    -annotate +$((x+34))+$((y+344)) "5.  $s5" \
    -fill '#8a6543' -font "$FONT_REG" -pointsize 15 -annotate +$((x+34))+$((y+414)) "$note" \
    "$DETAIL"
}

panel 50 125 '#35778a' 'CATCH THE SPOTTED EEL · RAIN' \
  'Play Character + Rod here.' 'Pay 2 AP once.' 'Take 1 Fresh Eel.' \
  'Mark Record 1/2 TO 2/2.' 'Remove this opportunity.' 'Skip it? Eel returns on a later valid Rain.'
panel 620 125 '#b85f3e' 'GIVE A GIFT TODAY' \
  'Choose an eligible Gift item.' 'Play it with Character here.' 'Pay 1 AP.' \
  'Resolve the printed Heart effect.' 'Remove this daily opportunity.' 'Skip it? The Person returns later.'
panel 50 625 '#4f5f5a' 'MINE STATE · INSPECT ONLY' \
  'Do not commit into this card.' 'Read current Depth: 3.' 'Read next checkpoint: 3 away.' \
  'Choose one Mine action below.' 'Keep state through Sleep and scroll.' 'Only Direct Descent changes Depth here.'
panel 620 625 '#9a653d' 'EXTRACT FROM EXPOSED ORE' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Take 1 known Ore.' \
  'Keep Depth at 3.' 'Turn this source to spent.' 'This is extraction, not frontier progress.'
panel 50 1125 '#4f7658' 'ADVANCE THE CURRENT FRONTIER' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Move Depth 3 TO 4.' \
  'Gain no item from this action.' 'Refresh the frontier state.' 'Depth cannot fail or reset.'
panel 620 1125 '#705677' 'SEARCH A SIDE TUNNEL' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Keep Depth at 3.' \
  'Reveal an exact Ore source card.' 'Do not gain Ore yet.' 'Mine the revealed source in a later action.'

OUTCOME="$BOARDS/resolution-outcomes.png"
magick -size 1000x1390 xc:'#edf0dc' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+25 'AFTER YOU CHOOSE · UPDATE ONLY THAT ACTION' \
  -fill '#c9e7e3' -stroke none -draw 'rectangle 45,100 955,365' \
  -fill '#246879' -font "$FONT_BOLD" -pointsize 23 -gravity northwest -annotate +70+128 'EEL SIGHTING · CAUGHT' \
  -fill '#355f59' -font "$FONT_REG" -pointsize 17 -annotate +70+185 'AP 3 TO 1 · Fresh Eel +1 · Record 1/2 TO 2/2' \
  -annotate +70+230 'Remove opportunity. A later valid Rain can return it.' \
  -fill '#d6dcc9' -draw 'rectangle 45,400 955,1335' \
  -fill '#9a653d' -font "$FONT_BOLD" -pointsize 22 -annotate +70+438 'EXPOSED ORE · EXTRACTION' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+486 'AP 2 TO 1 · Ore +1 · Depth stays 3 · source becomes spent' \
  -fill '#4f7658' -font "$FONT_BOLD" -pointsize 22 -annotate +70+625 'DIRECT DESCENT · PROGRESS' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+673 'AP 2 TO 1 · Depth 3 TO 4 · no item · frontier refreshes' \
  -fill '#705677' -font "$FONT_BOLD" -pointsize 22 -annotate +70+812 'SEARCH SIDE TUNNEL · DISCOVERY' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+860 'AP 2 TO 1 · Depth stays 3 · reveal exact Ore source · gain no Ore yet' \
  -fill '#43514c' -font "$FONT_BOLD" -pointsize 20 -annotate +70+1048 'AFTER SCROLLING AWAY' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+1096 'No change. Depth, source and item state persist.' \
  -fill '#8a5b3d' -font "$FONT_BOLD" -pointsize 16 -gravity south -annotate +0+30 'Names and numbers are fixture only · no action can hidden-fail Depth' \
  "$OUTCOME"

SHEET="$BOARDS/printable-card-sheet.png"
magick -size 920x1340 xc:'#f8f0d4' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 25 -gravity north -annotate +0+18 'ACTION-ART SQUARE CARDS · 2 × 3' \
  -fill '#60746e' -font "$FONT_REG" -pointsize 13 -annotate +0+53 'Art shows action/target; tags show cost/state; text shows consequence.' \
  "$SHEET"
place_card "$SHEET" eel 50 90
place_card "$SHEET" person-today 470 90
place_card "$SHEET" mine-state 50 510
place_card "$SHEET" exposed-ore 470 510
place_card "$SHEET" direct-descent 50 930
place_card "$SHEET" search-side-tunnel 470 930

magick "$STRIP" -filter point -resize 500x1160! "$BOARDS/scroll-strip-mobile-preview.png"
magick montage \
  \( "$CARDS/eel.png" -filter point -resize 160x160! \) \
  \( "$CARDS/person-today.png" -filter point -resize 160x160! \) \
  \( "$CARDS/mine-state.png" -filter point -resize 160x160! \) \
  \( "$CARDS/exposed-ore.png" -filter point -resize 160x160! \) \
  \( "$CARDS/direct-descent.png" -filter point -resize 160x160! \) \
  \( "$CARDS/search-side-tunnel.png" -filter point -resize 160x160! \) \
  -tile 3x2 -geometry 160x160+16+16 -background '#f8f0d4' -font "$FONT_REG" \
  "$BOARDS/card-mobile-preview.png"

magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
