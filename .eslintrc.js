module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'import/no-unresolved': [0],
    'import/extensions': [0],
    'import/no-extraneous-dependencies': [0],
    'react/function-component-definition': [0],
    'react/jsx-filename-extension': [0],
    'react/jsx-props-no-spreading': [0],
  },
};
