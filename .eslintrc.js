module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
  },
  rules: {
    indent: ['error', 2],
    quotes: ['error', 'single'], // 더블쿼터 사용
    semi: 2, // 세미클론 사용
  },
};
