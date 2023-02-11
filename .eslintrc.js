module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  plugins: ['react', '@typescript-eslint', 'import'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended', 'airbnb-typescript'],
  overrides: [],
  parserOptions: {
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx', '.tsx'] }],
    'import/extensions': [
      'error',
      'always',
      { js: 'never', jsx: 'never', ts: 'never', tsx: 'never' },
    ],
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': ['error'],
    'no-unused-vars': ['error'],
    indent: ['error', 2],
    'no-trailing-spaces': ['error'],
    'eol-last': ['error', 'always'],
  },
};
