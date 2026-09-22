#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"

RIVER_ART="$ROOT/art/style-studies/landmark-river-fishing-spot-v0.1/processed/river-fishing-spot-512-v0.1.png"
PERSON_ART="$ROOT/art/style-studies/character-card-mira-v0.1/processed/mira-portrait-512x512-v0.1.png"
MINE_ART="$ROOT/art/style-studies/landmark-mine-entrance-v0.1/processed/mine-entrance-512-v0.2.png"
STONE_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/smooth-stone-512-v0.1.png"
VEIN_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/creek-stones-512-v0.1.png"

for required in "$FONT_REG" "$FONT_BOLD" "$RIVER_ART" "$PERSON_ART" "$MINE_ART" "$STONE_ART" "$VEIN_ART"; do
  test -f "$required" || { echo "Missing required input: $required" >&2; exit 1; }
done

make_card() {
  local slug="$1"
  local title="$2"
  local art="$3"
  local accent="$4"
  local badge1="$5"
  local badge2="$6"
  local badge3="$7"
  local state="$8"

  magick "$art" -filter point -resize 400x400! \
    -fill '#173d3be6' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8dfed' -stroke none -draw 'rectangle 0,294 400,400' \
    -fill "$accent" -stroke none -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 31 -gravity north -fill '#fff8df' -stroke none -annotate +0+12 "$title" \
    -fill "$accent" -stroke none \
    -draw 'roundrectangle 15,309 120,348 11,11 roundrectangle 132,309 252,348 11,11 roundrectangle 264,309 385,348 11,11' \
    -font "$FONT_BOLD" -pointsize 17 -gravity northwest -fill '#fff8df' \
    -annotate +31+317 "$badge1" -annotate +148+317 "$badge2" -annotate +280+317 "$badge3" \
    -font "$FONT_BOLD" -pointsize 22 -gravity south -fill '#264e49' -annotate +0+16 "$state" \
    "$CARDS/$slug.png"
}

make_card rain-catch 'RAIN CATCH' "$RIVER_ART" '#35778a' 'RAIN' 'RIVER' '2 AP' 'EEL · SELECTABLE'
make_card person-today 'PERSON TODAY' "$PERSON_ART" '#b85f3e' '1 AP' 'GIFT' 'SLEEP' 'ACTIVE TODAY'
make_card current-frontier 'CURRENT FRONTIER' "$MINE_ART" '#4f5f5a' 'DEPTH 3' 'PERSISTS' 'INSPECT' 'BASELINE TUNNELS'
make_card working-seam 'WORKING SEAM' "$STONE_ART" '#9a653d' '1 AP' 'ORE +1' 'DEPTH +0' 'READY'
make_card safe-tunnel 'SAFE TUNNEL' "$MINE_ART" '#4f7658' '1 AP' '+1 DEPTH' 'STONE' 'SELECTABLE'
make_card veiled-vein 'VEILED VEIN' "$VEIN_ART" '#705677' '1 AP' '+1 DEPTH' 'ORE ?' 'SELECTABLE'

place_card() {
  local board="$1"
  local slug="$2"
  local x="$3"
  local y="$4"
  magick "$board" "$CARDS/$slug.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/scroll-strip-start.png"
magick -size 1000x2320 gradient:'#f8efd1-#e3ead2' \
  -fill '#fff8df' -stroke none -draw 'rectangle 0,0 1000,142' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 31 -gravity north -annotate +0+24 'MINE + FISHING · SQUARE TABLEAU v0.2' \
  -fill '#4b6b64' -font "$FONT_REG" -pointsize 16 -annotate +0+72 'SCROLL / FOCUS / INSPECT = 0 AP · NOT TRAVEL' \
  -fill '#9a493b' -font "$FONT_BOLD" -pointsize 17 -annotate +0+105 'PLAYER TRAY · 3 AP · CHARACTER + TOOL READY' \
  -fill '#c9e7e3' -stroke none -draw 'rectangle 0,142 1000,1008' \
  -fill '#b0d9d8' -draw 'rectangle 0,776 1000,1008' \
  -fill '#edf7e8' -draw 'rectangle 0,812 1000,834 rectangle 0,884 1000,906 rectangle 0,956 1000,978' \
  -fill '#246879' -font "$FONT_BOLD" -pointsize 39 -gravity northwest -annotate +58+175 'RIVER' \
  -fill '#3b716d' -font "$FONT_REG" -pointsize 17 -annotate +60+228 'AREA · WEATHER: RAIN · focus is free · background is not a target' \
  -fill '#f5fbef' -stroke none -draw 'rectangle 88,704 912,804' \
  -fill '#39786f' -draw 'rectangle 88,704 100,804' \
  -fill '#2c625b' -font "$FONT_BOLD" -pointsize 22 -annotate +122+720 'RIVER RECORD · STATUS STRIP · NOT A PLAY TARGET' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 17 -annotate +122+756 'Minnow recorded · Rain Eel open · mastery 1 / 2 · record never consumes Fish' \
  -fill '#2f6b73' -font "$FONT_BOLD" -pointsize 18 -annotate +88+844 'PLAY: Character + Rod TO exact Catch card · open detail before commit' \
  -fill '#58736c' -font "$FONT_REG" -pointsize 15 -annotate +88+884 'Missed Catch returns on a later valid condition/cycle.' \
  -fill '#f4ddb0' -draw 'rectangle 0,1008 1000,1128' \
  -fill '#8a5b3d' -font "$FONT_BOLD" -pointsize 22 -gravity north -annotate +0+1031 'SCROLL / FOCUS = 0 AP · NO TRAVEL · BOTH AREA STATES PERSIST' \
  -fill '#6f674e' -font "$FONT_REG" -pointsize 15 -annotate +0+1070 'This vertical order is interface navigation, not geography or distance.' \
  -fill '#d6dcc9' -stroke none -draw 'rectangle 0,1128 1000,2320' \
  -fill '#bec9b9' -draw 'rectangle 0,2090 1000,2320' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 39 -gravity northwest -annotate +58+1160 'MINE' \
  -fill '#57645f' -font "$FONT_REG" -pointsize 17 -annotate +60+1213 'AREA · inspect route/source free · background is not a target' \
  -fill '#edf0e4' -stroke none -draw 'rectangle 88,1260 912,1340' \
  -fill '#596761' -draw 'rectangle 88,1260 100,1340' \
  -fill '#43514c' -font "$FONT_BOLD" -pointsize 22 -annotate +122+1274 'DEPTH 3 · BASELINE TUNNELS · NEXT CHECKPOINT 3 AWAY' \
  -fill '#5d6964' -font "$FONT_REG" -pointsize 16 -annotate +122+1308 'STATUS STRIP · Depth survives Sleep, scroll and play in another Area' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 15 -annotate +88+2180 'PLAY: Character + Tool TO one route/source square · Current Frontier holds state' \
  -fill '#5d6964' -font "$FONT_REG" -pointsize 15 -annotate +88+2220 'Working Seam favors source. Safe/Veiled advance Depth. No Entrance replay.' \
  "$STRIP"

place_card "$STRIP" rain-catch 88 278
place_card "$STRIP" person-today 500 278
place_card "$STRIP" current-frontier 88 1362
place_card "$STRIP" working-seam 500 1362
place_card "$STRIP" safe-tunnel 88 1774
place_card "$STRIP" veiled-vein 500 1774

DETAIL="$BOARDS/focus-detail-panels.png"
magick -size 1200x1730 xc:'#efe9d2' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 25 -gravity north -annotate +0+28 'FOCUS / DETAIL PANELS · RECTANGULAR UI, NOT TABLEAU CARDS' \
  -fill '#526c65' -font "$FONT_REG" -pointsize 16 -annotate +0+76 'Inspect = 0 AP. Use the matching panel after focusing a square card.' \
  "$DETAIL"

detail_panel() {
  local x="$1"
  local y="$2"
  local accent="$3"
  local title="$4"
  local line1="$5"
  local line2="$6"
  local line3="$7"
  local line4="$8"
  local line5="$9"
  local line6="${10}"
  magick "$DETAIL" \
    -fill '#fffaf0' -stroke "$accent" -strokewidth 3 -draw "roundrectangle $x,$y $((x+530)),$((y+480)) 18,18" \
    -fill "$accent" -stroke none -draw "roundrectangle $((x+18)),$((y+18)) $((x+512)),$((y+72)) 12,12" \
    -fill '#fff8df' -font "$FONT_BOLD" -pointsize 24 -gravity northwest -annotate +$((x+38))+$((y+31)) "$title" \
    -fill '#2f4f4a' -font "$FONT_BOLD" -pointsize 17 -annotate +$((x+32))+$((y+105)) 'FULL FIXTURE RULE' \
    -fill '#405e58' -font "$FONT_REG" -pointsize 16 \
    -annotate +$((x+32))+$((y+145)) "$line1" \
    -annotate +$((x+32))+$((y+193)) "$line2" \
    -annotate +$((x+32))+$((y+241)) "$line3" \
    -annotate +$((x+32))+$((y+289)) "$line4" \
    -annotate +$((x+32))+$((y+337)) "$line5" \
    -annotate +$((x+32))+$((y+385)) "$line6" \
    -fill '#8a6a45' -font "$FONT_BOLD" -pointsize 14 -annotate +$((x+32))+$((y+441)) 'NUMBERS / NAMES ARE FIXTURE ONLY' \
    "$DETAIL"
}

detail_panel 50 125 '#35778a' 'RAIN CATCH · RAIN EEL' \
  'Condition: Rain · River' 'Commit: Character + Rod + 2 AP once' \
  'Result: Fresh Rain Eel +1; no failure roll' 'Record: 1/2 TO 2/2; Fish is not consumed' \
  'After: remove Catch from root tableau' 'Miss/repeat: returns on later Rain/cycle'
detail_panel 620 125 '#b85f3e' 'PERSON TODAY · COMPETING' \
  'Commit: 1 AP + one eligible Gift item' 'Result: resolve printed Person/Heart effect' \
  'Window: active today; expires at Sleep' 'Optional: not required for Fishing or Mine' \
  'Miss: Person returns on later schedule' 'Fixture role: pressure against Rain Catch'
detail_panel 50 625 '#4f5f5a' 'CURRENT FRONTIER · DEPTH 3' \
  'Persistent state card; inspect for free' 'Band: Baseline Tunnels' \
  'Choose a separate route/source card' 'Depth advances only when route says +1' \
  'Sleep/scroll/other Area never reset Depth' 'Old floors live in history, not root tableau'
detail_panel 620 625 '#9a653d' 'WORKING SEAM · READY' \
  'Commit: Character + Tool + 1 AP' 'Known result: Seam Ore +1' \
  'Depth: 3 TO 3; no descent' 'After: Seam becomes spent' \
  'Refresh: later printed rule/cycle' 'Meaning: choose source over progress'
detail_panel 50 1125 '#4f7658' 'SAFE TUNNEL · SELECTABLE' \
  'Commit: Character + Tool + 1 AP' 'Required result: Depth 3 TO 4' \
  'Known optional result: Stone +1' 'No hidden failure can block Depth' \
  'Working Seam remains ready' 'Meaning: deterministic planning route'
detail_panel 620 1125 '#705677' 'VEILED VEIN · SELECTABLE' \
  'Commit: Character + Tool + 1 AP' 'Required result: Depth 3 TO 4' \
  'Known category: Ore; exact result hidden' 'Reveal exact Ore after commit' \
  'Working Seam remains ready' 'Meaning: progress + optional uncertainty'

OUTCOME="$BOARDS/resolution-outcomes.png"
magick -size 1000x1560 xc:'#edf0dc' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 24 -gravity north -annotate +0+28 'RESOLUTION OUTCOMES · UPDATE STATE, NOT POSITION' \
  -fill '#526c65' -font "$FONT_REG" -pointsize 15 -annotate +0+72 'All navigation remains 0 AP. Apply only the committed card column.' \
  -fill '#c9e7e3' -stroke none -draw 'rectangle 40,115 960,480' \
  -fill '#246879' -font "$FONT_BOLD" -pointsize 25 -gravity northwest -annotate +65+140 'FISHING · COMMIT RAIN CATCH' \
  -fill '#fffaf0' -draw 'roundrectangle 70,200 450,430 16,16 roundrectangle 550,200 930,430 16,16' \
  -fill '#2c625b' -font "$FONT_BOLD" -pointsize 20 -annotate +100+225 'BEFORE' -annotate +580+225 'AFTER' \
  -fill '#456b64' -font "$FONT_REG" -pointsize 16 \
  -annotate +100+275 'AP 3 · Catch face-up' -annotate +100+315 'Record 1 / 2' -annotate +100+355 'No Fresh Rain Eel' -annotate +100+395 'River state otherwise holds' \
  -annotate +580+275 'AP 1 · Catch removed' -annotate +580+315 'Record 2 / 2' -annotate +580+355 'Fresh Rain Eel +1' -annotate +580+395 'Later Rain can return Catch' \
  -fill '#d6dcc9' -stroke none -draw 'rectangle 40,515 960,1505' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 25 -annotate +65+540 'MINE · CHOOSE EXACTLY ONE AT DEPTH 3' \
  -fill '#fffaf0' -draw 'roundrectangle 65,610 935,865 16,16 roundrectangle 65,900 935,1155 16,16 roundrectangle 65,1190 935,1445 16,16' \
  -fill '#9a653d' -font "$FONT_BOLD" -pointsize 22 -annotate +95+638 'WORKING SEAM · SOURCE OVER PROGRESS' \
  -fill '#566761' -font "$FONT_REG" -pointsize 16 -annotate +95+690 'AP 2 TO 1 · Depth 3 TO 3 · Seam Ore +1 known' \
  -annotate +95+732 'Seam: ready TO spent until refresh · Frontier persists' \
  -annotate +95+774 'Safe/Veiled remain choices on a later action/day.' \
  -fill '#4f7658' -font "$FONT_BOLD" -pointsize 22 -annotate +95+928 'SAFE TUNNEL · DETERMINISTIC PLANNING' \
  -fill '#566761' -font "$FONT_REG" -pointsize 16 -annotate +95+980 'AP 2 TO 1 · Depth 3 TO 4 · Stone +1 known' \
  -annotate +95+1022 'Seam stays ready · Current Frontier and Depth strip update to 4' \
  -annotate +95+1064 'No hidden roll blocks Depth.' \
  -fill '#705677' -font "$FONT_BOLD" -pointsize 22 -annotate +95+1218 'VEILED VEIN · CATEGORY-KNOWN UPSIDE' \
  -fill '#566761' -font "$FONT_REG" -pointsize 16 -annotate +95+1270 'AP 2 TO 1 · Depth 3 TO 4 · Ore category known' \
  -annotate +95+1312 'Reveal exact Ore after commit · Seam stays ready' \
  -annotate +95+1354 'Optional uncertainty never cancels deterministic Depth.' \
  -fill '#8a5b3d' -font "$FONT_BOLD" -pointsize 16 -gravity south -annotate +0+32 'SCROLL AWAY AND RETURN: every resolved state above remains unchanged' \
  "$OUTCOME"

SHEET="$BOARDS/printable-card-sheet.png"
magick -size 920x1340 xc:'#f8f0d4' \
  -fill '#2d554f' -font "$FONT_BOLD" -pointsize 25 -gravity north -annotate +0+18 'PRINTABLE SQUARE CARDS · 2 × 3 · CUT ON COLORED BORDER' \
  -fill '#60746e' -font "$FONT_REG" -pointsize 13 -annotate +0+53 'Status strips, headers and detail panels are intentionally not cards.' \
  "$SHEET"
place_card "$SHEET" rain-catch 50 90
place_card "$SHEET" person-today 470 90
place_card "$SHEET" current-frontier 50 510
place_card "$SHEET" working-seam 470 510
place_card "$SHEET" safe-tunnel 50 930
place_card "$SHEET" veiled-vein 470 930

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

# Remove volatile PNG time/text chunks so two rebuilds are byte-identical.
magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png

identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
