// eslint-disable-next-line no-undef
module.exports = exports = {
  root: true,
  env: {
    es6: true,
    browser: true,
    jest: true,
  },

  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  rules: {
    'no-duplicate-imports': 'error',
  },
  overrides: [
    {
      files: ['**/*.ts?(x)'],
      rules: {},
    },
  ],
}
