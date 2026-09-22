#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/../.." && pwd)"
KIT="$ROOT/paper-tests/weather-season-global-ui-v0.1"
BOARDS="$KIT/boards"
SOURCE="$ROOT/paper-tests/orientation-area-tableau-v0.3.4/boards/global-area-strip.png"
FONT_REG="/System/Library/Fonts/Supplemental/Verdana.ttf"
FONT_BOLD="/System/Library/Fonts/Supplemental/Verdana Bold.ttf"

mkdir -p "$BOARDS"

make_river_body() {
  local height="$1" output="$2"
  magick "$SOURCE" -crop '1000x1500+0+2620' +repage \
    -filter point -resize "500x${height}!" "$output"
}

BODY_A="$BOARDS/.body-a.png"
BODY_B="$BOARDS/.body-b.png"
BODY_B_OPEN="$BOARDS/.body-b-open.png"
BODY_C="$BOARDS/.body-c.png"
make_river_body 758 "$BODY_A"
make_river_body 735 "$BODY_B"
make_river_body 660 "$BODY_B_OPEN"
make_river_body 680 "$BODY_C"

HEADER_A="$BOARDS/.header-a.png"
magick -size 500x142 xc:'#173d3b' \
  -fill '#c7ddd6' -font "$FONT_BOLD" -pointsize 11 -gravity northwest \
  -annotate +14+12 'DAY 5' \
  -fill '#8eb9ae' -font "$FONT_REG" -pointsize 10 -annotate +82+13 'GLOBAL DAY STATE' \
  -fill '#f2c979' -font "$FONT_BOLD" -pointsize 15 -gravity northeast -annotate +14+9 '6 AP' \
  -fill '#315b55' -stroke none \
  -draw 'roundrectangle 12,40 140,128 10,10 roundrectangle 148,40 393,128 10,10 roundrectangle 401,40 488,128 10,10' \
  -fill '#9bcbbf' -font "$FONT_BOLD" -pointsize 9 -gravity northwest \
  -annotate +24+51 'SEASON' -annotate +160+51 'WEATHER' -annotate +413+51 'ENERGY' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 18 \
  -annotate +24+75 'SPRING' -annotate +160+75 'RAIN' -annotate +413+75 '6 AP' \
  -fill '#c7ddd6' -font "$FONT_REG" -pointsize 9 \
  -annotate +24+105 'CURRENT SEASON' -annotate +160+105 'TODAY' -annotate +279+105 'TOMORROW  SUNNY' \
  -stroke '#8eb9ae' -strokewidth 1 -draw 'line 264,52 264,116' \
  "$HEADER_A"

magick "$HEADER_A" "$BODY_A" -append "$BOARDS/stimulus-a-always-visible-rail.png"

HEADER_B="$BOARDS/.header-b.png"
magick -size 500x165 xc:'#173d3b' \
  -fill '#c7ddd6' -font "$FONT_BOLD" -pointsize 11 -gravity northwest \
  -annotate +14+12 'DAY 5  /  SPRING' \
  -fill '#f2c979' -font "$FONT_BOLD" -pointsize 15 -gravity northeast -annotate +14+9 '6 AP' \
  -fill '#315b55' -stroke none -draw 'roundrectangle 12,42 488,151 12,12' \
  -fill '#9bcbbf' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +26+55 'TODAY' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 22 -annotate +26+78 'RAIN' \
  -fill '#c7ddd6' -font "$FONT_REG" -pointsize 10 -annotate +26+113 'Outdoor crops are watered' \
  -fill '#244842' -stroke none -draw 'roundrectangle 337,67 474,126 9,9' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 11 -gravity center -annotate +155+7 'FORECAST  >' \
  "$HEADER_B"

magick "$HEADER_B" "$BODY_B" -append "$BOARDS/stimulus-b-collapsed-forecast.png"

HEADER_B_OPEN="$BOARDS/.header-b-open.png"
magick -size 500x240 xc:'#173d3b' \
  -fill '#c7ddd6' -font "$FONT_BOLD" -pointsize 11 -gravity northwest \
  -annotate +14+12 'DAY 5  /  SPRING' \
  -fill '#f2c979' -font "$FONT_BOLD" -pointsize 15 -gravity northeast -annotate +14+9 '6 AP' \
  -fill '#315b55' -stroke none -draw 'roundrectangle 12,42 488,226 12,12' \
  -fill '#9bcbbf' -font "$FONT_BOLD" -pointsize 9 -gravity northwest \
  -annotate +26+55 'TODAY' -annotate +197+55 'TOMORROW' -annotate +350+55 'DAY 7' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 20 \
  -annotate +26+78 'RAIN' -annotate +197+78 'SUNNY' -annotate +350+78 'WINDY' \
  -fill '#c7ddd6' -font "$FONT_REG" -pointsize 9 \
  -annotate +26+111 'Crops watered' -annotate +197+111 'Water needed' -annotate +350+111 'Forest shifts' \
  -stroke '#8eb9ae' -strokewidth 1 -draw 'line 177,56 177,134 line 330,56 330,134' \
  -fill '#244842' -stroke none -draw 'roundrectangle 26,151 474,211 9,9' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 11 -gravity northwest -annotate +208+174 'FORECAST  v' \
  "$HEADER_B_OPEN"

magick "$HEADER_B_OPEN" "$BODY_B_OPEN" -append "$BOARDS/stimulus-b-expanded-forecast.png"

HEADER_C="$BOARDS/.header-c.png"
magick -size 500x220 xc:'#173d3b' \
  -fill '#c7ddd6' -font "$FONT_BOLD" -pointsize 11 -gravity northwest -annotate +14+12 'DAY 5' \
  -fill '#f2c979' -font "$FONT_BOLD" -pointsize 15 -gravity northeast -annotate +14+9 '6 AP' \
  -fill '#315b55' -stroke none \
  -draw 'roundrectangle 74,48 244,205 14,14 roundrectangle 256,48 426,205 14,14' \
  -fill '#9bcbbf' -font "$FONT_BOLD" -pointsize 9 -gravity northwest \
  -annotate +91+63 'SEASON' -annotate +273+63 'WEATHER' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 19 \
  -annotate +91+96 'SPRING' -annotate +273+96 'RAIN' \
  -fill '#c7ddd6' -font "$FONT_REG" -pointsize 9 \
  -annotate +91+132 'DAY 5' -annotate +273+132 'TODAY' \
  -fill '#244842' -stroke none -draw 'roundrectangle 273,158 409,190 7,7' \
  -fill '#fff8df' -font "$FONT_BOLD" -pointsize 9 -gravity northwest -annotate +291+167 'TOMORROW  SUN' \
  "$HEADER_C"

magick "$HEADER_C" "$BODY_C" -append "$BOARDS/stimulus-c-square-tile-comparator.png"

SHEET="$BOARDS/comparison-sheet.png"
magick -size 1580x1030 xc:'#fff8df' \
  -fill '#173d3b' -font "$FONT_BOLD" -pointsize 28 -gravity northwest \
  -annotate +35+24 'WEATHER / SEASON GLOBAL UI v0.1' \
  -fill '#55766b' -font "$FONT_REG" -pointsize 15 \
  -annotate +35+64 'Three blind-test stimuli over the accepted River tableau. Chrome is sticky and outside the play surface.' \
  -fill '#315b55' -font "$FONT_BOLD" -pointsize 18 \
  -annotate +35+106 'A  ALWAYS-VISIBLE RAIL' -annotate +552+106 'B  COLLAPSED FORECAST' -annotate +1069+106 'C  SQUARE STRESS COMPARATOR' \
  "$SHEET"

magick "$SHEET" \
  \( "$BOARDS/stimulus-a-always-visible-rail.png" -resize 480x864! \) -geometry +35+145 -composite \
  \( "$BOARDS/stimulus-b-collapsed-forecast.png" -resize 480x864! \) -geometry +552+145 -composite \
  \( "$BOARDS/stimulus-c-square-tile-comparator.png" -resize 480x864! \) -geometry +1069+145 -composite \
  "$SHEET"

magick mogrify -strip -define png:exclude-chunks=date,time "$BOARDS"/*.png
find "$BOARDS" -name '.*.png' -delete
identify -format '%f %wx%h %[channels] opaque=%[opaque]\n' "$BOARDS"/*.png
