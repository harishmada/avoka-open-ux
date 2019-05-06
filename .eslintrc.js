module.exports = {
  env: {
    browser: true,
    jest: true,
    es6: true,
    node: true,
  },
  extends: ['react-app', 'prettier'],
  settings: {
    react: {
      version: '16.0',
    },
  },
  plugins: ['prettier'],
};
