const test = require('ava')

const { sampleFile, samplePath, tempFile, tempPath } = require('./_helpers')

const bakeFS = require('../fs')

test('rewrites `require("..")`', t => {
	bakeFS(samplePath('source.js'), tempPath('target.js'))
	t.is(tempFile('target.js'), sampleFile('target.js'))
})
