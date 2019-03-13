#!/usr/bin/env node
'use strict';

const bakeFS = require('./fs')

// drop `node` and `cli.js`, the actual parameters come after those
const p = require('minimist')(process.argv.slice(2));

let sourcePath, targetPath

sourcePath = p.source || p.s || p._.shift()
targetPath = p.target || p.t || p._.shift()

bakeFS(sourcePath, targetPath)
