#!/bin/bash
sed 's/\.\/src\/index/\.\/main/' ./package.json > ./dist/package.json
cp -r ./bin ./dist/
electron-packager ./dist SoundSqueezer SoundSqueezer --platform darwin --out build --arch=x64 --icon=icon.icns --overwrite --ignore=typings