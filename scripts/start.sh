#!/bin/bash
tsc src/main.ts --outDir dist

tsc ./src/install.ts --lib es5,es6,es7,dom --outDir dist
node ./dist/install.js

PORT='3001' react-ts-runtime run &
DEV_SERVER_PID=$!
sleep 2
MAIN_APP_URL='http://localhost:3001/' NODE_ENV='development' electron dist/main.js

kill -2 "$DEV_SERVER_PID"