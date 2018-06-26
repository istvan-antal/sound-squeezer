#!/bin/bash
react-ts-runtime build
tsc ./src/main.ts --lib es5,es6,es7,dom --outDir dist
tsc ./src/install.ts --lib es5,es6,es7,dom --outDir dist
node ./dist/install.js