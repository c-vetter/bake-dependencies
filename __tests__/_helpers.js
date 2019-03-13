const fs = require('fs')
const path = require('path')

module.exports = {
	sampleFile,
	samplePath,
	tempFile,
	tempPath,
}

function sampleFile (filename) {
	return readFile(samplePath(filename))
}
function samplePath (filename) {
	return resolve(filename, '../__samples__')
}
function tempFile (filename) {
	return readFile(tempPath(filename))
}
function tempPath (filename) {
	return resolve(filename, '../node_modules/.cache')
}


function readFile(filepath) {
	return fs.readFileSync(
		filepath
	).toString()
}
function resolve(filename, dirpath) {
	return path.resolve(
		__dirname,
		dirpath,
		filename
	)
}
