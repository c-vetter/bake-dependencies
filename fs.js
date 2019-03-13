const fs = require('fs')
const path = require('path')

const bake = require('.')


module.exports = function bakeFS(sourcePath, targetPath) {
	const fileData = fs.readFileSync(sourcePath).toString()

	fs.writeFileSync(targetPath, bake(fileData, path.dirname(sourcePath)))
}
