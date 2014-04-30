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
echo " Adding libary wizard, please specify vendor name, description and library name."
echo "================================================================================"

java -jar $TOOLS/bin/LibraryWizard.jar --wizard

