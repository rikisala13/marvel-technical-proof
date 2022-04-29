module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true
  },
  extends: [
    'airbnb-base'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules:
    {
      'comma-dangle': [2, 'never'],
      'linebreak-style': 0,
      'global-require': 0,
      'eslint linebreak-style': [0, 'error', 'windows']
    }
};
