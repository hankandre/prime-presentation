module.exports = {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:unicorn/recommended',
    'plugin:import/errors',
  ],
  plugins: ['prettier', 'unicorn', 'import'],
  rules: {
    'prettier/prettier': ['error'],
  },
};
