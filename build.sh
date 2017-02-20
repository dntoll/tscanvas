#!/bin/sh


tsc js/*.ts
./node_modules/.bin/webpack js/index.js dist/bundle.js