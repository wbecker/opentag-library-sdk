#!/bin/bash
echo
echo
echo
current=$(dirname ${0})
echo $current
cd $current/../../
echo "Changing dir to:" $(pwd)

if [ $# -eq 0 ]; then
	echo
	echo "MISSING ARGUMENT !"
	echo "Specify package to build. Example:"
	echo "sync-to-db.sh google"
	echo
	exit
fi

SRC=$1
TAG=$2
TOOLS="shared"
MM="shared/bin/lib/MiniMerge.jar"
HTML="$TOOLS/bin/html"
SRC_BASE="libraries,shared/js"
EXCLUDE=".*/dist.*,.*/build.*"

echo "================================================================================"
echo "Vendor: $SRC"
echo "================================================================================"
echo "Cleaning: Removing dist"
echo


#build output with all dependencies
java -jar shared/bin/LibraryManager.jar \
 --libraries-dir "libraries" \
 --sync-to-database \
 --template "shared/template" \
 --formatted \
 --vendors "$SRC" \
 --tags "$TAG"

