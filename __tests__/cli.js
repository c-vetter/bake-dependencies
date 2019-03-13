const test = require('ava')
const proxyquire =  require('proxyquire')


const [p1, p2] = ['p1', 'p2']


test('no parameters', t => {
	checkOptions(t)
})

test('positional parameters', t => {
	checkOptions(t,
		'p1 p2',
		p1, p2
	)
})

test('named parameters', t => {
	checkOptions(t,
		'--target p1 --source p2',
		p2, p1
	)
})

test('shorthand parameters', t => {
	checkOptions(t,
		'--t p1 --s p2',
		p2, p1
	)
})

test('mixed parameters', t => {
	checkOptions(t,
		'-t p1 p2',
		p2, p1
	)

	checkOptions(t,
		'p1 -s p2',
		p2, p1
	)
})


function checkOptions (t, input, source, target) {
	process.argv = ['npx', 'bake-dependencies']
	if (input) process.argv.push(...input.split(' '))

	let options
	proxyquire('../cli.js', {
		'./fs': (...o) => { options = o }
	})

	t.deepEqual(options, [
		source,
		target,
	])
}
