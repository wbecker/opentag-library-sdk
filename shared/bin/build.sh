#!/bin/bash
echo
echo
echo
current=$(dirname ${0})
echo $current
cd $current/../../
echo "Changing dir to:" $(pwd)

SRC=$1
TAG="current"
TOOLS="shared"
HTML="$TOOLS/bin/html"
SRC_BASE="libraries,shared/js"
EXCLUDE=".*/dist.*,.*/build.*"

echo "================================================================================"
echo "Tag name: $TAG"
echo "================================================================================"
echo "Cleaning: Removing dist"
echo

rm -rf dist
mkdir $SRC/dist

echo "Build: Generating full package (with dependencies): dist/out-all-src.js"

#build output with all dependencies
java -jar $TOOLS/bin/MiniMerge.jar \
 -o $SRC/dist/out-all-src.js \
 -i .js \
 --source-base "$SRC_BASE"\
 -s $SRC\
 --info\
 --exclude-file-path-patterns "$EXCLUDE"\
 -v

echo "================================================================================"
echo "Build: Generating library: dist/$TAG-release.js"
echo

#build output with this sources ONLY 
#(it will complain for missing files - its normal)
java -jar $TOOLS/bin/MiniMerge.jar \
 -o $SRC/dist/$TAG-release.js \
 -i .js \
 --source-base "$SRC_BASE"\
 -s $SRC\
 --info\
 --exclude-file-path-patterns "$EXCLUDE"\
 -v

echo "================================================================================"
echo "Build: Generating debug pages..."
echo

#build index for debugging.
java -jar $TOOLS/bin/MiniMerge.jar \
 -o $HTML/scripts.htmlf \
 -i .js \
 --source-base "$SRC_BASE"\
 --exclude-file-path-patterns "$EXCLUDE"\
 -s $SRC\
 --info\
 --index\
 --prefix "<script src='../../../"\
 --suffix "'></script>"\
 --add-base\
 -vv

#prepare debug page
cat $HTML/prefix.html > $HTML/indexplain.html
cat $HTML/scripts.htmlf >> $HTML/indexplain.html
cat $HTML/body-debug.html >> $HTML/indexplain.html
cat $HTML/suffix.html >> $HTML/indexplain.html

#prepare debug page
cat $HTML/prefix.html > $HTML/index.html
cat $HTML/scripts.htmlf >> $HTML/index.html
cat $HTML/body-tester.html >> $HTML/index.html
cat $HTML/suffix.html >> $HTML/index.html


#clean up
rm $HTML/scripts.htmlf


echo "Done. Open index.html file in a browser."

open $HTML/index.html
