#!/bin/bash

echo STARTING UPDATE DATA
echo ============================================
echo repository : gl://vzrenggamani/ejj-bot.git
echo mirror     : gh://vzrenggamani/ejj-bot.git
echo Author     : Rengga Prakoso Nugroho
echo ============================================

echo Git Pulling from origin
git reset --hard origin/master
git pull --no-edit

echo Refreshing the Glitch Editor
refresh

exit