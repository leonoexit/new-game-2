#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/orientation-area-tableau-v0.3"
BASE="$ROOT/paper-tests/mine-fishing-area-tableau-v0.2.4"
CARDS="$KIT/cards"
BOARDS="$KIT/boards"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$CARDS" "$BOARDS"
"$BASE/build-fixture.sh" >/dev/null

HOME_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/little-home-512-v0.1.png"
PLOT_ART="$ROOT/art/style-studies/prototype3-square-card-art-v0.1/processed/turned-garden-512-v0.1.png"
TROUGH_ART="$ROOT/art/style-studies/project-water-trough-v0.1/processed/water-trough-512-v0.1.png"
BENCH_ART="$ROOT/art/style-studies/project-harvest-bench-v0.1/processed/harvest-bench-512-v0.1.png"
MARKET_ART="$ROOT/art/style-studies/world-entity-supermarket-v0.1/processed/supermarket-512-v0.1.png"

make_target() {
  local art="$1" slug="$2" title="$3" accent="$4"
  local cost="$5" tag1="$6" tag2="$7" description="$8"
  magick "$art" -filter point -resize 400x400! \
    -fill '#173d3b' -stroke none -draw 'rectangle 0,0 400,58' \
    -fill '#fff8df' -stroke none -draw 'rectangle 0,286 400,400' \
    -fill "$accent" -draw 'rectangle 0,286 400,294' \
    -fill none -stroke "$accent" -strokewidth 6 -draw 'roundrectangle 3,3 396,396 14,14' \
    -font "$FONT_BOLD" -pointsize 27 -gravity north -fill '#fff8df' -stroke none -annotate +0+14 "$title" \
    -fill '#173d3b' -stroke '#fff8df' -strokewidth 2 -draw 'roundrectangle 14,70 110,110 11,11' \
    -font "$FONT_BOLD" -pointsize 16 -gravity northwest -fill '#fff8df' -stroke none -annotate +29+80 "$cost" \
    -fill "$accent" -stroke none -draw 'roundrectangle 15,305 190,344 11,11 roundrectangle 210,305 385,344 11,11' \
    -font "$FONT_BOLD" -pointsize 15 -gravity northwest -fill '#fff8df' \
    -annotate +31+314 "$tag1" -annotate +226+314 "$tag2" \
    -font "$FONT_BOLD" -pointsize 16 -gravity south -fill '#264e49' -annotate +0+17 "$description" \
    "$CARDS/$slug.png"
}

make_target "$HOME_ART" sleep-home 'SLEEP AT HOME' '#39786f' '0 AP' 'ENDS DAY' 'PERSISTS' 'ADVANCE TO NEXT DAY'
make_target "$PLOT_ART" tilled-plot 'TILLED PLOT' '#71864a' '-1 AP' 'SEED' 'READY' 'PLANT ONE CROP'
make_target "$TROUGH_ART" water-trough 'WATER TROUGH' '#49859a' '-1 AP' 'WATER' '2 PLOTS' 'WATER FARM SCOPE'
make_target "$BENCH_ART" harvest-bench 'HARVEST BENCH' '#9b7040' '-1 AP' 'HARVEST' '2 PLOTS' 'RESOLVE HARVEST BURST'
make_target "$MARKET_ART" sell-market 'SELL AT MARKET' '#b85f3e' '0 AP' 'ITEM' 'PREVIEW' 'GAIN PREVIEWED GOLD'

cp "$BASE/cards/person-today.png" "$CARDS/person-today.png"
cp "$BASE/cards/eel.png" "$CARDS/eel.png"
cp "$BASE/cards/exposed-ore.png" "$CARDS/exposed-ore.png"
cp "$BASE/cards/direct-descent.png" "$CARDS/direct-descent.png"
cp "$BASE/cards/search-side-tunnel.png" "$CARDS/search-side-tunnel.png"

place_card() {
  local board="$1" slug="$2" x="$3" y="$4"
  magick "$board" "$CARDS/$slug.png" -geometry "+$x+$y" -composite "$board"
}

STRIP="$BOARDS/global-area-strip.png"
magick -size 1000x4950 xc:'#fff8df' \
  -fill '#173d3b' -stroke none -draw 'rectangle 0,0 1000,180' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 31 -gravity north -annotate +0+24 'WORLD STRIP v0.3 · ABSTRACT AREA TABLEAUS' \
  -fill '#c7ddd6' -font "$FONT_REG" -pointsize 16 -annotate +0+76 'DAY 5 · SUNNY · 6 AP     SCROLL / FOCUS / INSPECT = 0 AP' \
  -fill '#f2c979' -font "$FONT_BOLD" -pointsize 16 -annotate +0+118 'STABLE ORDER IS INTERFACE MEMORY · NOT GEOGRAPHY OR TRAVEL' \
  -fill '#dfedc8' -draw 'rectangle 0,180 1000,1450' \
  -fill '#cfe2ad' -stroke none -draw 'circle 40,260 56,260 circle 950,360 966,360 circle 55,1340 71,1340 circle 920,1280 936,1280' \
  -fill '#335e55' -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+212 'HOME / FARM' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 17 -annotate +58+262 'AREA · daily base actions and optional relief targets' \
  -fill '#f3f7e6' -draw 'rectangle 88,1190 912,1310' \
  -fill '#6d8154' -draw 'rectangle 88,1190 100,1310' \
  -fill '#425e50' -font "$FONT_BOLD" -pointsize 20 -annotate +122+1208 'FARM STATE · 2 / 4 PLOTS ACTIVE · WATERED TODAY' \
  -fill '#68776f' -font "$FONT_REG" -pointsize 15 -annotate +122+1242 'STATUS STRIP · persists off-screen · not a target' \
  -fill '#68776f' -font "$FONT_REG" -pointsize 14 -annotate +122+1272 'Projects remain optional; base Plot action stays available.' \
  -fill '#f6dca7' -draw 'rectangle 0,1450 1000,1600' \
  -fill '#8a5c40' -font "$FONT_BOLD" -pointsize 21 -gravity north -annotate +0+1490 'SOFT TRANSITION · SCROLL 0 AP' \
  -fill '#f1dfc5' -draw 'rectangle 0,1600 1000,2520' \
  -fill '#e8cda8' -stroke none -draw 'roundrectangle 35,1700 70,1720 8,8 roundrectangle 920,1760 955,1780 8,8 roundrectangle 40,2440 75,2460 8,8' \
  -fill '#8a4f3b' -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+1640 'COMMERCE' \
  -fill '#8c6655' -font "$FONT_REG" -pointsize 17 -annotate +58+1690 'AREA · exact market and Person targets' \
  -fill '#fbf3e8' -draw 'rectangle 88,2185 912,2300' \
  -fill '#b85f3e' -draw 'rectangle 88,2185 100,2300' \
  -fill '#754838' -font "$FONT_BOLD" -pointsize 20 -annotate +122+2205 'MARKET STATE · OPEN · ALL RESULTS PREVIEWED' \
  -fill '#8c6655' -font "$FONT_REG" -pointsize 15 -annotate +122+2240 'STATUS STRIP · no Town-wide target' \
  -fill '#f6dca7' -draw 'rectangle 0,2520 1000,2670' \
  -fill '#8a5c40' -font "$FONT_BOLD" -pointsize 21 -gravity north -annotate +0+2560 'SOFT TRANSITION · SCROLL 0 AP' \
  -fill '#c7e8e5' -draw 'rectangle 0,2670 1000,3500' \
  -fill none -stroke '#9bd4d3' -strokewidth 5 -draw "path 'M 20,2760 C 70,2720 170,2720 220,2760 C 270,2800 370,2800 420,2760 C 470,2720 570,2720 620,2760 C 670,2800 770,2800 820,2760 C 870,2720 970,2720 1020,2760' path 'M 0,3400 C 50,3360 150,3360 200,3400 C 250,3440 350,3440 400,3400 C 450,3360 550,3360 600,3400 C 650,3440 750,3440 800,3400 C 850,3360 950,3360 1000,3400'" \
  -fill '#2d7080' -stroke none -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+2710 'RIVER' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 17 -annotate +58+2760 'AREA · WEATHER: RAIN · one active Catch opportunity' \
  -fill '#f5fbef' -draw 'rectangle 88,3225 912,3335' \
  -fill '#39786f' -draw 'rectangle 88,3225 100,3335' \
  -fill '#2c625b' -font "$FONT_BOLD" -pointsize 20 -annotate +122+3243 'FISH RECORD · MINNOW 1 / 2' \
  -fill '#4d736c' -font "$FONT_REG" -pointsize 15 -annotate +122+3278 'STATUS STRIP · persists when River leaves viewport' \
  -fill '#f6dca7' -draw 'rectangle 0,3500 1000,3650' \
  -fill '#8a5c40' -font "$FONT_BOLD" -pointsize 21 -gravity north -annotate +0+3540 'SOFT TRANSITION · SCROLL 0 AP' \
  -fill '#d6dcc9' -draw 'rectangle 0,3650 1000,4950' \
  -fill '#c3cbb9' -stroke none -draw 'polygon 25,3740 55,3710 85,3740 55,3770 polygon 910,3820 940,3790 970,3820 940,3850 polygon 30,4800 60,4770 90,4800 60,4830' \
  -fill '#43534e' -font "$FONT_BOLD" -pointsize 38 -gravity northwest -annotate +58+3690 'MINE' \
  -fill '#65716b' -font "$FONT_REG" -pointsize 17 -annotate +58+3740 'AREA · progress, discovery and extraction targets' \
  -fill '#edf0dc' -draw 'rectangle 88,3790 912,3900' \
  -fill '#59665f' -draw 'rectangle 88,3790 100,3900' \
  -fill '#3f514b' -font "$FONT_BOLD" -pointsize 20 -annotate +122+3808 'DEPTH 3 · PERSISTS · NEXT CHECKPOINT IN 3' \
  -fill '#68746f' -font "$FONT_REG" -pointsize 15 -annotate +122+3843 'STATUS STRIP · not a target · survives scroll and Sleep' \
  -fill '#45534f' -font "$FONT_BOLD" -pointsize 17 -annotate +88+4790 'ONLY DIRECT DESCENT INCREASES DEPTH' \
  -fill '#5d6964' -font "$FONT_REG" -pointsize 15 -annotate +88+4830 'Search reveals a source; Exposed Ore extracts it.' \
  "$STRIP"

place_card "$STRIP" sleep-home 88 330
place_card "$STRIP" tilled-plot 500 330
place_card "$STRIP" water-trough 88 742
place_card "$STRIP" harvest-bench 500 742
place_card "$STRIP" sell-market 88 1760
place_card "$STRIP" person-today 500 1760
place_card "$STRIP" eel 300 2810
place_card "$STRIP" exposed-ore 88 3930
place_card "$STRIP" direct-descent 500 3930
place_card "$STRIP" search-side-tunnel 88 4342

magick "$STRIP" -filter point -resize 500x2475! "$BOARDS/global-area-strip-mobile.png"

make_viewport() {
  local slug="$1" y="$2"
  magick "$STRIP" -crop "1000x1800+0+$y" +repage -filter point -resize 500x900! "$BOARDS/viewport-$slug.png"
}

make_viewport home 0
make_viewport commerce 1400
make_viewport river 2500
make_viewport mine 3150

magick montage \
  "$BOARDS/viewport-home.png" "$BOARDS/viewport-commerce.png" \
  "$BOARDS/viewport-river.png" "$BOARDS/viewport-mine.png" \
  -tile 2x2 -geometry 500x900+12+12 -background '#fff8df' -font "$FONT_REG" \
  "$BOARDS/viewport-sequence.png"

magick mogrify -strip -define png:exclude-chunks=date,time "$CARDS"/*.png "$BOARDS"/*.png
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$CARDS"/*.png "$BOARDS"/*.png
