const path = require('path')

const requireMatcher = /require\((['"])([^'"]+)\1\)/g

module.exports = function bakeInDependencies(fileData, cwd='.') {
	return fileData.replace(
		requireMatcher,
		(_, __, filepath) => JSON.stringify(
			require(
				path.resolve(cwd, filepath)
			).toString()
		)
	)
}
