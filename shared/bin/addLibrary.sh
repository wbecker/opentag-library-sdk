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
MM="shared/bin/lib/MiniMerge.jar"
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
java -jar $TOOLS/bin/LibraryWizard.jar --wizard

