module.exports = {
	parser: '@typescript-eslint/parser',
	extends: [
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
	],
	plugins: ['@typescript-eslint', 'prettier'],
  env: {
    browser: true,
    es6: true,
    node: true,
	},
	rules: {
		'prettier/prettier': ['error']
	}
}
