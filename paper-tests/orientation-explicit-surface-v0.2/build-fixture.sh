#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/orientation-explicit-surface-v0.2"
TOKENS="$KIT/entities"
BOARDS="$KIT/boards"
INTERACTION="$KIT/interaction-tokens"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$TOKENS" "$BOARDS" "$INTERACTION"

make_entity() {
  local slug="$1"
  local label="$2"
  local art="$3"
  local border="$4"

  magick -size 168x202 xc:none \
    -fill '#315b55' -draw 'roundrectangle 4,6 166,200 13,13' \
    -fill '#fff8df' -stroke "$border" -strokewidth 4 -draw 'roundrectangle 2,2 164,196 13,13' \
    \( "$art" -filter point -resize 148x148! \) -geometry +9+9 -composite \
    -fill "$border" -stroke none -draw 'roundrectangle 7,159 159,191 7,7' \
    -font "$FONT_BOLD" -pointsize 14 -gravity north -fill '#fff8df' -annotate +0+169 "$label" \
    "$TOKENS/$slug.png"
}

make_entity house 'HOUSE' \
  "$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/little-home-512-v0.1.png" '#2f6f68'
make_entity farm-plot 'FARM PLOT' \
  "$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/turned-garden-512-v0.1.png" '#6b7d3f'
make_entity supermarket 'SUPERMARKET' \
  "$ROOT/art/style-studies/world-entity-supermarket-v0.1/processed/supermarket-512-v0.1.png" '#b45643'
make_entity person-today 'PERSON TODAY' \
  "$ROOT/art/style-studies/character-card-mira-v0.1/processed/mira-portrait-512x512-v0.1.png" '#c56d3e'
make_entity fishing-spot 'FISHING SPOT' \
  "$ROOT/art/style-studies/landmark-river-fishing-spot-v0.1/processed/river-fishing-spot-512-v0.1.png" '#3f7891'
make_entity mine-entrance 'MINE ENTRANCE' \
  "$ROOT/art/style-studies/landmark-mine-entrance-v0.1/processed/mine-entrance-512-v0.2.png" '#5a615d'
make_entity water-trough 'WATER TROUGH' \
  "$ROOT/art/style-studies/project-water-trough-v0.1/processed/water-trough-512-v0.1.png" '#8b623e'
make_entity footbridge 'FOOTBRIDGE' \
  "$ROOT/art/style-studies/project-upper-grove-footbridge-v0.1/processed/upper-grove-footbridge-512-v0.1.png" '#8b623e'
make_entity harvest-bench 'HARVEST BENCH' \
  "$ROOT/art/style-studies/project-harvest-bench-v0.1/processed/harvest-bench-512-v0.1.png" '#8b623e'

make_background() {
  local output="$1"
  local title="$2"
  local cue="$3"

  magick -size 1000x1720 gradient:'#eaf5da-#83bf82' \
    -fill '#d7ebd2' -stroke none -draw 'rectangle 0,0 1000,250' \
    -fill '#8bb7a0' -draw 'polygon 0,250 120,105 245,245 380,75 560,250 720,125 880,255 1000,145 1000,310 0,310' \
    -fill '#65977d' -draw 'polygon 0,285 165,175 315,290 500,145 680,290 845,185 1000,290 1000,340 0,340' \
    -fill '#f3d899' -draw 'rectangle 0,1450 1000,1575' \
    -fill '#70b5bd' -draw 'rectangle 0,1575 1000,1720' \
    -stroke '#bce0d1' -strokewidth 10 -fill none -draw 'bezier 0,1610 235,1578 410,1650 620,1605 790,1568 895,1615 1000,1590' \
    -stroke '#d9b875' -strokewidth 74 -fill none -draw 'bezier 525,95 400,330 610,480 470,680 330,880 500,1050 455,1260 425,1385 565,1470 520,1580' \
    -stroke '#f1deae' -strokewidth 45 -fill none -draw 'bezier 525,95 400,330 610,480 470,680 330,880 500,1050 455,1260 425,1385 565,1470 520,1580' \
    -stroke '#4d8fa0' -strokewidth 92 -fill none -draw 'bezier -30,590 235,520 405,690 615,625 790,568 890,700 1040,645' \
    -stroke '#82c9c8' -strokewidth 57 -fill none -draw 'bezier -30,590 235,520 405,690 615,625 790,568 890,700 1040,645' \
    -stroke '#dff2da' -strokewidth 6 -fill none -draw 'bezier -30,575 235,505 405,675 615,610 790,553 890,685 1040,630' \
    -fill '#537f4e' -stroke none \
      -draw 'circle 55,430 55,408 circle 90,455 90,426 circle 938,420 938,395 circle 900,450 900,421 circle 70,1190 70,1162 circle 925,1280 925,1252' \
    -fill '#fff8df' -stroke '#315b55' -strokewidth 3 -draw 'roundrectangle 24,22 976,112 18,18' \
    -font "$FONT_BOLD" -pointsize 29 -gravity north -fill '#2d554f' -stroke none -annotate +0+38 "$title" \
    -font "$FONT_REG" -pointsize 15 -gravity north -fill '#486c64' -annotate +0+78 'ONE CONTINUOUS SURFACE · ONLY MEANINGFUL OBJECTS ARE CARDS' \
    -fill '#fff3c8' -stroke '#b45643' -strokewidth 3 -draw 'roundrectangle 730,128 970,192 14,14' \
    -font "$FONT_BOLD" -pointsize 17 -gravity northwest -fill '#8a493b' -stroke none -annotate +748+142 '↩ HOUSE ANCHOR' \
    -font "$FONT_REG" -pointsize 11 -annotate +760+169 'camera focus only' \
    -font "$FONT_BOLD" -pointsize 16 -fill '#4e756f' -annotate +35+292 'MOUNTAIN RIDGE — terrain, not a card' \
    -fill '#276879' -annotate +35+620 'RIVER — continuous terrain ribbon' \
    -fill '#5a7862' -annotate +35+1518 'COAST — visible geography, not a card' \
    -fill '#fff8df' -stroke '#c56d3e' -strokewidth 2 -draw 'roundrectangle 28,1640 430,1695 12,12' \
    -font "$FONT_BOLD" -pointsize 15 -fill '#8a493b' -stroke none -annotate +46+1655 "$cue" \
    "$output"
}

place() {
  local board="$1"
  local token="$2"
  local x="$3"
  local y="$4"
  magick "$board" "$TOKENS/$token.png" -geometry "+$x+$y" -composite "$board"
}

M="$BOARDS/house-farm-middle-board.png"
T="$BOARDS/house-farm-top-board.png"
make_background "$M" 'FIXTURE M — HOUSE / FARM IN THE MIDDLE' 'OPENING FOCUS → HOUSE + FARM PLOT'
make_background "$T" 'FIXTURE T — HOUSE / FARM AT THE TOP' 'OPENING FOCUS → HOUSE + FARM PLOT'

# Fixture M: same nine entity cards as T; only their world coordinates differ.
place "$M" mine-entrance 70 175
place "$M" supermarket 610 250
place "$M" person-today 790 370
place "$M" fishing-spot 90 465
place "$M" footbridge 650 650
place "$M" house 75 835
place "$M" farm-plot 275 850
place "$M" water-trough 520 900
place "$M" harvest-bench 755 915

# Fixture T: discovery extends downward from the opening house/farm cluster.
place "$T" house 60 170
place "$T" farm-plot 260 175
place "$T" water-trough 510 220
place "$T" harvest-bench 755 225
place "$T" supermarket 85 465
place "$T" person-today 280 470
place "$T" fishing-spot 690 500
place "$T" footbridge 425 720
place "$T" mine-entrance 105 1030

magick "$M" -font "$FONT_BOLD" -pointsize 16 -fill '#b45643' -stroke '#fff8df' -strokewidth 4 \
  -annotate +92+815 'OPENING FOCUS ↓' -stroke none -annotate +92+815 'OPENING FOCUS ↓' "$M"
magick "$T" -font "$FONT_BOLD" -pointsize 16 -fill '#b45643' -stroke '#fff8df' -strokewidth 4 \
  -annotate +76+155 'OPENING FOCUS ↓' -stroke none -annotate +76+155 'OPENING FOCUS ↓' "$T"

magick "$M" -resize 500x860 "$T" -resize 500x860 +append "$BOARDS/topology-comparison.png"

# These carried-source/Project overlays are unchanged from v0.1; v0.2 changes
# world representation and target identity, not the exact-source foil set.
cp "$ROOT/paper-tests/orientation-home-middle-vs-top-v0.1/interaction-tokens/"*.png "$INTERACTION/"
cp "$ROOT/paper-tests/orientation-home-middle-vs-top-v0.1/boards/interaction-token-sheet.png" \
  "$BOARDS/interaction-token-sheet.png"

identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$TOKENS"/*.png "$BOARDS"/*.png
