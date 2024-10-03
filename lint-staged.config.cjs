module.exports = {
	'*.{js,jsx,ts,tsx}': ['eslint .', 'prettier --write'],
	'{!(package)*.json,*.code-snippets,.!(browserslist)*rc}': ['prettier --write--parser json'],
	'package.json': ['prettier --write'],
	'*.vue': ['eslint .', 'prettier --write', 'stylelint --fix'],
	'*.{scss,less,styl,html}': ['stylelint --fix', 'prettier --write'],
	'*.md': ['prettier --write']
}
