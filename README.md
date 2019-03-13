# bake-dependencies
Bake simple dependencies into their dependent files for self-contained packages

## What it does

`bake-dependencies` turns this:
```js
const import = require('./import') // src/index.js
```
```js
module.exports = 'IMPORT' // src/import.js
```

into this:
```js
const import = "IMPORT" // index.js
```

> **IMPORTANT:** This works only for primitive data, **no functions!**


## CLI
```sh
npx bake-dependencies src/index.js index.js
```

## node API
```js
const bakeFS = require('bake-dependencies/fs')
bakeFS('src/index.js', 'index.js')
```

```js
const bake = require('bake-dependencies')
const sourceFile = fs.readFileSync('src/index.js')
const bakedFile = bake(sourceFile, 'src')
```
