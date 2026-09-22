#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.1"
BASE="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"
"$BASE/build-fixture.sh" >/dev/null

make_action_card() {
  local source="$1"
  local slug="$2"
  local title="$3"
  local accent="$4"
  local badge1="$5"
  local badge2="$6"
  local badge3="$7"
  local action="$8"

  magick "$source" \
    -fill '#173d3be6' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8df' -stroke none -draw 'rectangle 0,286 400,400' \
    -fill "$accent" -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 31 -gravity north -fill '#fff8df' -stroke none -annotate +0+12 "$title" \
    -fill "$accent" -stroke none \
    -draw 'roundrectangle 15,306 126,345 11,11 roundrectangle 144,306 256,345 11,11 roundrectangle 274,306 385,345 11,11' \
    -font "$FONT_BOLD" -pointsize 16 -gravity northwest -fill '#fff8df' \
    -annotate +27+315 "$badge1" -annotate +156+315 "$badge2" -annotate +286+315 "$badge3" \
    -font "$FONT_BOLD" -pointsize 22 -gravity south -fill '#264e49' -annotate +0+14 "$action" \
    "$CARDS/$slug.png"
}

make_action_card "$BASE/cards/rain-catch.png" rain-catch 'RAIN CATCH' '#35778a' '2 AP' '+ EEL' 'RECORD +1' 'CATCH RAIN EEL'
make_action_card "$BASE/cards/person-today.png" person-today 'PERSON TODAY' '#b85f3e' '1 AP' '- ITEM' 'BY SLEEP' 'GIVE A GIFT'
make_action_card "$BASE/cards/current-frontier.png" current-frontier 'CURRENT FRONTIER' '#4f5f5a' 'STATE' 'DEPTH 3' 'PERSISTS' 'CHOOSE A ROUTE'
make_action_card "$BASE/cards/working-seam.png" working-seam 'WORKING SEAM' '#9a653d' '1 AP' '+ ORE' 'NO DEPTH' 'TAKE ORE'
make_action_card "$BASE/cards/safe-tunnel.png" safe-tunnel 'SAFE TUNNEL' '#4f7658' '1 AP' 'DEPTH +1' '+ STONE' 'DESCEND SAFELY'
make_action_card "$BASE/cards/safe-tunnel.png" veiled-vein 'VEILED VEIN' '#705677' '1 AP' 'DEPTH +1' 'ORE ?' 'DESCEND FOR ORE'

place_card() {
  local board="$1"
  local slug="$2"
  local x="$3"
  local y="$4"
  magick "$board" "$CARDS/$slug.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/scroll-strip-start.png"
magick "$BASE/boards/scroll-strip-start.png" \
  -fill '#fff8df' -stroke none -draw 'rectangle 0,0 1000,142' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 31 -gravity north -annotate +0+21 'MINE + FISHING · ACTION-FIRST v0.2.1' \
  -fill '#4b6b64' -font "$FONT_REG" -pointsize 16 -annotate +0+68 'EACH SQUARE SAYS WHAT YOU DO · DETAIL SHOWS THE ORDER' \
  -fill '#9a493b' -font "$FONT_BOLD" -pointsize 17 -annotate +0+103 'SCROLL / FOCUS / INSPECT = 0 AP · NOT TRAVEL' \
  "$STRIP"
place_card "$STRIP" rain-catch 88 278
place_card "$STRIP" person-today 500 278
place_card "$STRIP" current-frontier 88 1362
place_card "$STRIP" working-seam 500 1362
place_card "$STRIP" safe-tunnel 88 1774
place_card "$STRIP" veiled-vein 500 1774

DETAIL="$BOARDS/focus-detail-panels.png"
magick -size 1200x1730 xc:'#efe9d2' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+25 'FOCUS DETAIL · READ TOP TO BOTTOM, THEN ACT' \
  -fill '#526c65' -font "$FONT_REG" -pointsize 16 -annotate +0+72 'Inspect costs 0 AP. The selected square opens one matching panel.' \
  "$DETAIL"

action_panel() {
  local x="$1"
  local y="$2"
  local accent="$3"
  local title="$4"
  local step1="$5"
  local step2="$6"
  local step3="$7"
  local step4="$8"
  local step5="$9"
  local note="${10}"

  magick "$DETAIL" \
    -fill '#fffaf0' -stroke "$accent" -strokewidth 3 -draw "roundrectangle $x,$y $((x+530)),$((y+480)) 18,18" \
    -fill "$accent" -stroke none -draw "roundrectangle $((x+18)),$((y+18)) $((x+512)),$((y+76)) 12,12" \
    -fill '#fff8df' -font "$FONT_BOLD" -pointsize 22 -gravity northwest -annotate +$((x+36))+$((y+34)) "$title" \
    -fill '#315650' -font "$FONT_BOLD" -pointsize 17 \
    -annotate +$((x+34))+$((y+112)) "1.  $step1" \
    -annotate +$((x+34))+$((y+170)) "2.  $step2" \
    -annotate +$((x+34))+$((y+228)) "3.  $step3" \
    -annotate +$((x+34))+$((y+286)) "4.  $step4" \
    -annotate +$((x+34))+$((y+344)) "5.  $step5" \
    -fill '#8a6543' -font "$FONT_REG" -pointsize 15 -annotate +$((x+34))+$((y+414)) "$note" \
    "$DETAIL"
}

action_panel 50 125 '#35778a' 'CATCH RAIN EEL NOW?' \
  'Play Character + Rod here.' 'Pay 2 AP once.' 'Take 1 Fresh Rain Eel.' \
  'Mark Record 1/2 TO 2/2.' 'Remove this Catch card.' 'Skip it? It returns on a later Rain/cycle.'
action_panel 620 125 '#b85f3e' 'GIVE A GIFT BEFORE SLEEP?' \
  'Choose an eligible Gift item.' 'Play it with Character here.' 'Pay 1 AP.' \
  'Resolve the printed Person effect.' 'Remove this daily opportunity.' 'Skip it? The Person returns on a later schedule.'
action_panel 50 625 '#4f5f5a' 'THIS CARD TRACKS MINE STATE' \
  'Do not commit into this card.' 'Read current Depth: 3.' 'Read current band: Baseline Tunnels.' \
  'Choose a route/source card below.' 'Keep Depth through Sleep and scroll.' 'To descend, choose Safe Tunnel or Veiled Vein.'
action_panel 620 625 '#9a653d' 'TAKE ORE INSTEAD OF DESCENDING?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Take 1 known Seam Ore.' \
  'Keep Depth at 3.' 'Turn this Seam to spent.' 'It returns only when its refresh rule says so.'
action_panel 50 1125 '#4f7658' 'DESCEND SAFELY?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Move Depth 3 TO 4.' \
  'Take 1 known Stone.' 'Leave Working Seam ready.' 'Depth cannot fail or reset.'
action_panel 620 1125 '#705677' 'DESCEND FOR UNKNOWN ORE?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Move Depth 3 TO 4 for sure.' \
  'Then reveal the exact Ore result.' 'Leave Working Seam ready.' 'Only the Ore is unknown; Depth cannot fail.'

SHEET="$BOARDS/printable-card-sheet.png"
magick -size 920x1340 xc:'#f8f0d4' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 25 -gravity north -annotate +0+18 'ACTION-FIRST SQUARE CARDS · 2 × 3' \
  -fill '#60746e' -font "$FONT_REG" -pointsize 13 -annotate +0+53 'Read the bottom verb first; inspect only for ordered resolution.' \
  "$SHEET"
place_card "$SHEET" rain-catch 50 90
place_card "$SHEET" person-today 470 90
place_card "$SHEET" current-frontier 50 510
place_card "$SHEET" working-seam 470 510
place_card "$SHEET" safe-tunnel 50 930
place_card "$SHEET" veiled-vein 470 930

magick "$BASE/boards/resolution-outcomes.png" -strip -define png:exclude-chunks=date,time "$BOARDS/resolution-outcomes.png"
magick "$STRIP" -filter point -resize 500x1160! "$BOARDS/scroll-strip-mobile-preview.png"
magick montage \
  \( "$CARDS/rain-catch.png" -filter point -resize 160x160! \) \
  \( "$CARDS/person-today.png" -filter point -resize 160x160! \) \
  \( "$CARDS/current-frontier.png" -filter point -resize 160x160! \) \
  \( "$CARDS/working-seam.png" -filter point -resize 160x160! \) \
  \( "$CARDS/safe-tunnel.png" -filter point -resize 160x160! \) \
  \( "$CARDS/veiled-vein.png" -filter point -resize 160x160! \) \
  -tile 3x2 -geometry 160x160+16+16 -background '#f8f0d4' -font "$FONT_REG" \
  "$BOARDS/card-mobile-preview.png"

magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
