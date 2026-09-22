#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.2"
BASE="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.1"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"
"$BASE/build-fixture.sh" >/dev/null

make_plain_card() {
  local source="$1" slug="$2" title="$3" accent="$4"
  local badge1="$5" badge2="$6" badge3="$7" action="$8"
  magick "$source" \
    -fill '#173d3b' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8df' -stroke none -draw 'rectangle 0,286 400,400' \
    -fill "$accent" -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 29 -gravity north -fill '#fff8df' -stroke none -annotate +0+13 "$title" \
    -fill "$accent" -stroke none \
    -draw 'roundrectangle 15,306 126,345 11,11 roundrectangle 144,306 256,345 11,11 roundrectangle 274,306 385,345 11,11' \
    -font "$FONT_BOLD" -pointsize 16 -gravity northwest -fill '#fff8df' \
    -annotate +27+315 "$badge1" -annotate +156+315 "$badge2" -annotate +286+315 "$badge3" \
    -font "$FONT_BOLD" -pointsize 21 -gravity south -fill '#264e49' -annotate +0+15 "$action" \
    "$CARDS/$slug.png"
}

make_plain_card "$BASE/cards/rain-catch.png" rain-eel 'RAIN EEL' '#35778a' '2 AP' 'USE ROD' '+ EEL' 'CATCH WITH ROD'
make_plain_card "$BASE/cards/person-today.png" person-today 'PERSON TODAY' '#b85f3e' '1 AP' '- ITEM' 'BY SLEEP' 'GIVE A GIFT'
make_plain_card "$BASE/cards/current-frontier.png" mine-depth 'MINE DEPTH' '#4f5f5a' 'STATE' 'DEPTH 3' 'PERSISTS' 'CHOOSE A MINE ACTION'
make_plain_card "$BASE/cards/working-seam.png" exposed-ore 'EXPOSED ORE' '#9a653d' '1 AP' '+ ORE' 'NO DEPTH' 'MINE THIS ORE'
make_plain_card "$BASE/cards/safe-tunnel.png" safe-descent 'SAFE DESCENT' '#4f7658' '1 AP' 'DEPTH +1' '+ STONE' 'GO DEEPER SAFELY'
make_plain_card "$BASE/cards/veiled-vein.png" hidden-ore-route 'HIDDEN ORE ROUTE' '#705677' '1 AP' 'DEPTH +1' 'ORE ?' 'GO DEEPER · REVEAL ORE'

place_card() {
  local board="$1" slug="$2" x="$3" y="$4"
  magick "$board" "$CARDS/$slug.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/scroll-strip-start.png"
magick "$BASE/boards/scroll-strip-start.png" \
  -fill '#fff8df' -stroke none -draw 'rectangle 0,0 1000,142' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 30 -gravity north -annotate +0+21 'MINE + FISHING · PLAIN ACTIONS v0.2.2' \
  -fill '#4b6b64' -font "$FONT_REG" -pointsize 16 -annotate +0+68 'ROOT CARDS SAY THE VERB AND THE DIFFERENCE' \
  -fill '#9a493b' -font "$FONT_BOLD" -pointsize 17 -annotate +0+103 'SCROLL / FOCUS / INSPECT = 0 AP · NOT TRAVEL' \
  "$STRIP"
place_card "$STRIP" rain-eel 88 278
place_card "$STRIP" person-today 500 278
place_card "$STRIP" mine-depth 88 1362
place_card "$STRIP" exposed-ore 500 1362
place_card "$STRIP" safe-descent 88 1774
place_card "$STRIP" hidden-ore-route 500 1774

DETAIL="$BOARDS/focus-detail-panels.png"
magick -size 1200x1730 xc:'#efe9d2' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+25 'DETAIL · FOLLOW THE CHOSEN ACTION IN ORDER' \
  -fill '#526c65' -font "$FONT_REG" -pointsize 16 -annotate +0+72 'Inspect costs 0 AP. Root already tells you why to choose the card.' \
  "$DETAIL"

panel() {
  local x="$1" y="$2" accent="$3" title="$4"
  local s1="$5" s2="$6" s3="$7" s4="$8" s5="$9" note="${10}"
  magick "$DETAIL" \
    -fill '#fffaf0' -stroke "$accent" -strokewidth 3 -draw "roundrectangle $x,$y $((x+530)),$((y+480)) 18,18" \
    -fill "$accent" -stroke none -draw "roundrectangle $((x+18)),$((y+18)) $((x+512)),$((y+76)) 12,12" \
    -fill '#fff8df' -font "$FONT_BOLD" -pointsize 21 -gravity northwest -annotate +$((x+36))+$((y+35)) "$title" \
    -fill '#315650' -font "$FONT_BOLD" -pointsize 17 \
    -annotate +$((x+34))+$((y+112)) "1.  $s1" -annotate +$((x+34))+$((y+170)) "2.  $s2" \
    -annotate +$((x+34))+$((y+228)) "3.  $s3" -annotate +$((x+34))+$((y+286)) "4.  $s4" \
    -annotate +$((x+34))+$((y+344)) "5.  $s5" \
    -fill '#8a6543' -font "$FONT_REG" -pointsize 15 -annotate +$((x+34))+$((y+414)) "$note" \
    "$DETAIL"
}

panel 50 125 '#35778a' 'CATCH RAIN EEL WITH YOUR ROD?' \
  'Play Character + Rod here.' 'Pay 2 AP once.' 'Take 1 Fresh Rain Eel.' \
  'Mark Record 1/2 TO 2/2.' 'Remove this opportunity.' 'Skip it? It returns on a later Rain/cycle.'
panel 620 125 '#b85f3e' 'GIVE A GIFT BEFORE SLEEP?' \
  'Choose an eligible Gift item.' 'Play it with Character here.' 'Pay 1 AP.' \
  'Resolve the printed Person effect.' 'Remove this daily opportunity.' 'Skip it? The Person returns later.'
panel 50 625 '#4f5f5a' 'MINE DEPTH IS STATE, NOT AN ACTION' \
  'Do not commit into this card.' 'Read current Depth: 3.' 'Read current band: Baseline Tunnels.' \
  'Choose one Mine action below.' 'Keep Depth through Sleep and scroll.' 'Depth changes only when an action says so.'
panel 620 625 '#9a653d' 'MINE EXPOSED ORE, NO DESCENT?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Take 1 known Ore.' \
  'Keep Depth at 3.' 'Turn this source to spent.' 'Choose this for material, not progress.'
panel 50 1125 '#4f7658' 'GO DEEPER AND TAKE KNOWN STONE?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Move Depth 3 TO 4.' \
  'Take 1 known Stone.' 'Leave Exposed Ore ready.' 'This is the predictable descent.'
panel 620 1125 '#705677' 'GO DEEPER AND REVEAL ORE?' \
  'Play Character + Tool here.' 'Pay 1 AP.' 'Move Depth 3 TO 4 for sure.' \
  'Then reveal the exact Ore.' 'Leave Exposed Ore ready.' 'Depth is certain; only the Ore is unknown.'

OUTCOME="$BOARDS/resolution-outcomes.png"
magick -size 1000x1340 xc:'#edf0dc' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 27 -gravity north -annotate +0+25 'AFTER YOU CHOOSE · UPDATE ONLY THAT ACTION' \
  -fill '#c9e7e3' -stroke none -draw 'rectangle 45,100 955,380' \
  -fill '#246879' -font "$FONT_BOLD" -pointsize 23 -gravity northwest -annotate +70+128 'CATCH WITH ROD' \
  -fill '#355f59' -font "$FONT_REG" -pointsize 17 -annotate +70+185 'AP 3 TO 1 · Fresh Rain Eel +1 · Record 1/2 TO 2/2' \
  -annotate +70+230 'Remove Rain Eel opportunity. Later Rain can return it.' \
  -fill '#d6dcc9' -draw 'rectangle 45,415 955,1285' \
  -fill '#9a653d' -font "$FONT_BOLD" -pointsize 22 -annotate +70+452 'MINE EXPOSED ORE' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+500 'AP 2 TO 1 · Ore +1 · Depth stays 3 · source becomes spent' \
  -fill '#4f7658' -font "$FONT_BOLD" -pointsize 22 -annotate +70+640 'GO DEEPER SAFELY' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+688 'AP 2 TO 1 · Depth 3 TO 4 · known Stone +1 · Ore source stays ready' \
  -fill '#705677' -font "$FONT_BOLD" -pointsize 22 -annotate +70+828 'GO DEEPER · REVEAL ORE' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+876 'AP 2 TO 1 · Depth 3 TO 4 · reveal exact Ore · source stays ready' \
  -fill '#43514c' -font "$FONT_BOLD" -pointsize 20 -annotate +70+1045 'MINE DEPTH AFTER SCROLLING AWAY' \
  -fill '#4e625c' -font "$FONT_REG" -pointsize 17 -annotate +70+1093 'No change. Depth, items and source state persist.' \
  -fill '#8a5b3d' -font "$FONT_BOLD" -pointsize 16 -gravity south -annotate +0+30 'Names and numbers are fixture only · no action can hidden-fail Depth' \
  "$OUTCOME"

SHEET="$BOARDS/printable-card-sheet.png"
magick -size 920x1340 xc:'#f8f0d4' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 25 -gravity north -annotate +0+18 'PLAIN-LANGUAGE SQUARE CARDS · 2 × 3' \
  -fill '#60746e' -font "$FONT_REG" -pointsize 13 -annotate +0+53 'Root names are player-facing; concept aliases remain only in design docs.' \
  "$SHEET"
place_card "$SHEET" rain-eel 50 90
place_card "$SHEET" person-today 470 90
place_card "$SHEET" mine-depth 50 510
place_card "$SHEET" exposed-ore 470 510
place_card "$SHEET" safe-descent 50 930
place_card "$SHEET" hidden-ore-route 470 930

magick "$STRIP" -filter point -resize 500x1160! "$BOARDS/scroll-strip-mobile-preview.png"
magick montage \
  \( "$CARDS/rain-eel.png" -filter point -resize 160x160! \) \
  \( "$CARDS/person-today.png" -filter point -resize 160x160! \) \
  \( "$CARDS/mine-depth.png" -filter point -resize 160x160! \) \
  \( "$CARDS/exposed-ore.png" -filter point -resize 160x160! \) \
  \( "$CARDS/safe-descent.png" -filter point -resize 160x160! \) \
  \( "$CARDS/hidden-ore-route.png" -filter point -resize 160x160! \) \
  -tile 3x2 -geometry 160x160+16+16 -background '#f8f0d4' -font "$FONT_REG" \
  "$BOARDS/card-mobile-preview.png"

magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
