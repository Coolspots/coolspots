module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: 'airbnb-base',
  overrides: [],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'react/sort-comp': 'off',
    'react/jsx-curly-newline': 'off',
    'react/function-component-definition': 'off',
    'react/jsx-no-useless-fragment': 'off',
    'no-unused-expressions': 'off',
    'no-restricted-exports': 'off', // until restrictDefaultExports is available (https://github.com/eslint/eslint/issues/15617)
    'import/no-dynamic-require': 'off',
    'global-require': 'off',

    'default-param-last': 'off',
    'prefer-regex-literals': 'off',
    'no-import-assign': 'off',
    'no-unsafe-optional-chaining': 'off',
    'no-promise-executor-return': 'off',
    'react/jsx-no-constructed-context-values': 'off',
    'react/no-arrow-function-lifecycle': 'off',
    'react/no-unused-class-component-methods': 'off',
    'react/no-unstable-nested-components': 'off',
    'import/no-unresolved': 'off',
    'import/no-relative-packages': 'off',
    'import/no-import-module-exports': 'off',
    'react/boolean-prop-naming': [
      'error',
      { rule: '^(is|are|has|can|with|in|no)[A-Z]([A-Za-z0-9]?)+' },
    ],
    'react/jsx-props-no-spreading': [
      'error',
      {
        html: 'enforce',
        custom: 'ignore',
        explicitSpread: 'ignore',
        exceptions: [],
      },
    ],
    'no-underscore-dangle': [
      'error',
      {
        allow: [
          '__PRELOADED_STATE__',
          '__REDUX_DEVTOOLS_EXTENSION_COMPOSE__',
          '__APOLLO_STATE__',
        ],
      },
    ],
  },
};
