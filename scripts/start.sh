#!/bin/bash
tsc src/main.ts --outDir dist

react-ts-runtime run &
DEV_SERVER_PID=$!
sleep 2
MAIN_APP_URL='http://localhost:3000/' NODE_ENV='development' electron dist/main.js

kill -2 "$DEV_SERVER_PID"