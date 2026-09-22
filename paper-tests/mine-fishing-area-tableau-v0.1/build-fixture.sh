#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/mine-fishing-area-tableau-v0.1"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"

make_card() {
  local slug="$1"
  local title="$2"
  local art="$3"
  local border="$4"
  local line1="$5"
  local line2="$6"
  local line3="$7"
  local line4="$8"

  magick -size 220x310 xc:none \
    -fill '#294d49' -stroke none -draw 'roundrectangle 5,8 218,308 15,15' \
    -fill '#fff8df' -stroke "$border" -strokewidth 4 -draw 'roundrectangle 2,2 215,303 15,15' \
    \( "$art" -filter point -resize 198x142! \) -geometry +10+10 -composite \
    -fill "$border" -stroke none -draw 'rectangle 8,157 209,194' \
    -font "$FONT_BOLD" -pointsize 15 -gravity north -fill '#fff8df' -annotate +0+168 "$title" \
    -font "$FONT_BOLD" -pointsize 13 -gravity north -fill '#2d554f' -annotate +0+207 "$line1" \
    -font "$FONT_REG" -pointsize 12 -annotate +0+230 "$line2" \
    -annotate +0+252 "$line3" \
    -annotate +0+274 "$line4" \
    "$CARDS/$slug.png"
}

RIVER_ART="$ROOT/art/style-studies/landmark-river-fishing-spot-v0.1/processed/river-fishing-spot-512-v0.1.png"
FISH_ART="$ROOT/art/style-studies/item-river-minnow-fresh-v0.1/processed/river-minnow-fresh-512-v0.1.png"
PERSON_ART="$ROOT/art/style-studies/character-card-mira-v0.1/processed/mira-portrait-512x512-v0.1.png"
MINE_ART="$ROOT/art/style-studies/landmark-mine-entrance-v0.1/processed/mine-entrance-512-v0.2.png"
STONE_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/smooth-stone-512-v0.1.png"
VEIN_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/creek-stones-512-v0.1.png"

make_card rain-eel 'RAIN EEL' "$RIVER_ART" '#3f7891' \
  'RAIN · RIVER' 'COMMIT 2 AP' 'FRESH FISH' 'RETURNS ON LATER RAIN'
make_card river-record 'RIVER RECORD' "$FISH_ART" '#507e76' \
  'MINNOW: RECORDED' 'RAIN EEL: OPEN' 'MASTERY 1 / 2' 'RECORD DOES NOT CONSUME'
make_card person-today 'PERSON TODAY' "$PERSON_ART" '#c56d3e' \
  'COMPETING OPPORTUNITY' 'GIFT 1 AP + ITEM' 'EXPIRES AT SLEEP' 'OPTIONAL'
make_card current-frontier 'CURRENT FRONTIER' "$MINE_ART" '#555f5b' \
  'DEPTH 3' 'BASELINE TUNNELS' 'DEPTH PERSISTS' 'CHOOSE ONE ROUTE'
make_card extract-seam 'EXTRACT SEAM' "$STONE_ART" '#a36f43' \
  'COMMIT 1 AP' 'GAIN KNOWN ORE' 'DEPTH +0' 'READY · REFRESHES LATER'
make_card safe-tunnel 'SAFE TUNNEL' "$MINE_ART" '#56765c' \
  'COMMIT 1 AP' 'DEPTH +1' 'KNOWN COMMON STONE' 'NO FAILURE ROLL'
make_card veiled-vein 'VEILED VEIN' "$VEIN_ART" '#765f7b' \
  'COMMIT 1 AP' 'DEPTH +1' 'CATEGORY: ORE' 'EXACT RESULT: HIDDEN'

place() {
  local board="$1"
  local card="$2"
  local x="$3"
  local y="$4"
  magick "$board" "$CARDS/$card.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/scroll-strip-start.png"
magick -size 1000x1800 gradient:'#f8f0d4-#dfe8d0' \
  -fill '#fff8df' -stroke '#315b55' -strokewidth 4 -draw 'roundrectangle 24,22 976,118 18,18' \
  -font "$FONT_BOLD" -pointsize 29 -gravity north -fill '#2d554f' -stroke none -annotate +0+37 'MINE + FISHING AREA TABLEAU — START STATE' \
  -font "$FONT_REG" -pointsize 14 -fill '#486c64' -annotate +0+78 'SCROLL FINDS AN AREA · ONLY PLAYED CARDS CHANGE GAME STATE' \
  -fill '#fff3c8' -stroke '#b45643' -strokewidth 3 -draw 'roundrectangle 80,138 920,236 16,16' \
  -font "$FONT_BOLD" -pointsize 18 -gravity northwest -fill '#8a493b' -stroke none -annotate +110+155 'PLAYER TRAY · 3 AP LEFT · CHARACTER + TOOL READY' \
  -font "$FONT_REG" -pointsize 14 -annotate +110+190 'Scroll/focus/inspect = 0 AP. Commit cost appears on the target card.' \
  -fill '#cfe8e4' -stroke '#4d8fa0' -strokewidth 4 -draw 'roundrectangle 28,260 972,850 24,24' \
  -fill '#b9dcdb' -stroke none -draw 'rectangle 32,700 968,846' \
  -stroke '#e5f3e5' -strokewidth 8 -draw 'line 45,740 955,740 line 45,790 955,790' \
  -font "$FONT_BOLD" -pointsize 34 -fill '#276879' -stroke none -annotate +62+285 'RIVER' \
  -font "$FONT_REG" -pointsize 15 -fill '#3d716f' -annotate +63+330 'Abstract Area tableau · Weather: RAIN · Focus 0 AP' \
  -stroke none -font "$FONT_BOLD" -pointsize 16 -fill '#276879' -annotate +140+735 'PLAY HERE: Character + Rod TO exact Catch' \
  -font "$FONT_REG" -pointsize 13 -annotate +140+770 'Decision: spend 2 AP now, or take the competing Person opportunity.' \
  -fill '#f4ddb0' -stroke '#b27a4d' -strokewidth 3 -draw 'roundrectangle 90,875 910,965 18,18' \
  -font "$FONT_BOLD" -pointsize 21 -gravity north -fill '#8a5b3d' -stroke none -annotate +0+892 'SCROLL / FOCUS = 0 AP  ·  NO TRAVEL  ·  STATE PERSISTS' \
  -font "$FONT_REG" -pointsize 13 -annotate +0+927 'The next section is interface order, not physical distance.' \
  -fill '#d6dcc9' -stroke '#555f5b' -strokewidth 4 -draw 'roundrectangle 28,990 972,1770 24,24' \
  -fill '#bdc8b9' -stroke none -draw 'rectangle 32,1600 968,1766' \
  -font "$FONT_BOLD" -pointsize 34 -gravity northwest -fill '#46524e' -stroke none -annotate +62+1015 'MINE' \
  -font "$FONT_REG" -pointsize 15 -fill '#53615d' -annotate +63+1060 'Abstract Area tableau · Current Depth 3 · Focus 0 AP' \
  -stroke none -font "$FONT_BOLD" -pointsize 16 -fill '#46524e' -annotate +62+1505 'PLAY HERE: Character + Tool TO one route/source card' \
  -font "$FONT_REG" -pointsize 13 -annotate +62+1540 'Extract keeps Depth 3. Safe/Veiled advance to Depth 4. Scroll away without reset.' \
  -fill '#fff8df' -stroke '#555f5b' -strokewidth 2 -draw 'roundrectangle 230,1630 770,1725 15,15' \
  -font "$FONT_BOLD" -pointsize 18 -gravity north -fill '#46524e' -stroke none -annotate +0+1647 'PERSISTENT AREA STATE' \
  -font "$FONT_REG" -pointsize 14 -annotate +0+1682 'Sleep / scroll / other Area → Depth stays 3' \
  "$STRIP"

place "$STRIP" rain-eel 140 375
place "$STRIP" river-record 390 375
place "$STRIP" person-today 640 375
place "$STRIP" current-frontier 24 1135
place "$STRIP" extract-seam 268 1135
place "$STRIP" safe-tunnel 512 1135
place "$STRIP" veiled-vein 756 1135

OUTCOME="$BOARDS/resolution-outcomes.png"
magick -size 1000x1180 xc:'#eef0dc' \
  -fill '#fff8df' -stroke '#315b55' -strokewidth 4 -draw 'roundrectangle 24,22 976,112 18,18' \
  -font "$FONT_BOLD" -pointsize 28 -gravity north -fill '#2d554f' -stroke none -annotate +0+39 'RESOLUTION OUTCOMES — STATE CHANGES, NOT TRAVEL' \
  -fill '#cfe8e4' -stroke '#4d8fa0' -strokewidth 3 -draw 'roundrectangle 36,145 964,460 20,20' \
  -font "$FONT_BOLD" -pointsize 25 -gravity northwest -fill '#276879' -stroke none -annotate +62+170 'FISHING · COMMIT RAIN EEL' \
  -font "$FONT_REG" -pointsize 16 -annotate +62+220 'Before: Rain Eel opportunity face-up · River record 1/2 · 3 AP left' \
  -fill '#fff8df' -stroke '#3f7891' -strokewidth 3 -draw 'roundrectangle 75,270 455,420 16,16' \
  -stroke none -font "$FONT_BOLD" -pointsize 18 -fill '#276879' -annotate +105+292 'PLAY CHARACTER + ROD' \
  -font "$FONT_REG" -pointsize 15 -annotate +105+330 'Commit 2 AP once' \
  -annotate +105+360 'No hidden failure' \
  -fill '#e2f0d9' -stroke '#507e76' -strokewidth 3 -draw 'roundrectangle 545,270 925,420 16,16' \
  -stroke none -font "$FONT_BOLD" -pointsize 18 -fill '#35685e' -annotate +575+292 'AFTER RESOLUTION' \
  -font "$FONT_REG" -pointsize 15 -annotate +575+330 'Fresh Rain Eel +1 · AP 1' \
  -annotate +575+360 'Record 2/2 · Catch removed' \
  -annotate +575+390 'Future Rain can return it' \
  -stroke '#b45643' -strokewidth 8 -draw 'line 470,345 530,345' \
  -fill '#d6dcc9' -stroke '#555f5b' -strokewidth 3 -draw 'roundrectangle 36,495 964,1140 20,20' \
  -font "$FONT_BOLD" -pointsize 25 -fill '#46524e' -stroke none -annotate +62+520 'MINE · CHOOSE ONE CARD AT DEPTH 3' \
  -font "$FONT_REG" -pointsize 15 -annotate +62+565 'All branches preserve previous progress. Only the committed card changes state.' \
  -fill '#fff8df' -stroke '#a36f43' -strokewidth 3 -draw 'roundrectangle 58,625 318,1058 16,16' \
  -stroke none -font "$FONT_BOLD" -pointsize 18 -fill '#845a3d' -annotate +82+655 'EXTRACT SEAM' \
  -font "$FONT_REG" -pointsize 15 -annotate +82+705 'Cost: 1 AP' \
  -annotate +82+755 'Depth: 3 TO 3' \
  -annotate +82+805 'Ore: +1 known' \
  -annotate +82+855 'Seam: spent' \
  -annotate +82+925 'Meaning:' \
  -annotate +82+955 'source over progress' \
  -fill '#fff8df' -stroke '#56765c' -strokewidth 3 -draw 'roundrectangle 370,625 630,1058 16,16' \
  -stroke none -font "$FONT_BOLD" -pointsize 18 -fill '#48654f' -annotate +394+655 'SAFE TUNNEL' \
  -font "$FONT_REG" -pointsize 15 -annotate +394+705 'Cost: 1 AP' \
  -annotate +394+755 'Depth: 3 TO 4' \
  -annotate +394+805 'Stone: +1 known' \
  -annotate +394+855 'Seam: stays ready' \
  -annotate +394+925 'Meaning:' \
  -annotate +394+955 'planning path' \
  -fill '#fff8df' -stroke '#765f7b' -strokewidth 3 -draw 'roundrectangle 682,625 942,1058 16,16' \
  -stroke none -font "$FONT_BOLD" -pointsize 18 -fill '#654f69' -annotate +706+655 'VEILED VEIN' \
  -font "$FONT_REG" -pointsize 15 -annotate +706+705 'Cost: 1 AP' \
  -annotate +706+755 'Depth: 3 TO 4' \
  -annotate +706+805 'Ore category known' \
  -annotate +706+855 'Exact result revealed' \
  -annotate +706+925 'Meaning:' \
  -annotate +706+955 'optional uncertainty' \
  "$OUTCOME"

magick "$STRIP" -resize 500x900 "$BOARDS/scroll-strip-preview.png"
magick "$OUTCOME" -resize 500x590 "$BOARDS/resolution-outcomes-preview.png"
magick montage \
  "$CARDS/rain-eel.png" "$CARDS/river-record.png" "$CARDS/person-today.png" \
  "$CARDS/current-frontier.png" "$CARDS/extract-seam.png" "$CARDS/safe-tunnel.png" \
  "$CARDS/veiled-vein.png" \
  -tile 4x2 -geometry 220x310+15+15 -background '#f8f0d4' -gravity center \
  -font "$FONT_REG" +label \
  "$BOARDS/card-sheet.png"

identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
