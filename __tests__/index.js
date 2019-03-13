const test = require('ava')

const { sampleFile, samplePath } = require('./_helpers')

const bake = require('..')

test('rewrites `require("..")`', t => {
	const output = bake(sampleFile('source.js'), samplePath('.'))
	t.is(output, sampleFile('target.js'))
})
