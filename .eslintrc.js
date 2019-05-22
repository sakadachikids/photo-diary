module.exports = {
  extends: [
    "react-app",
    "eslint:recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],
  plugins: ["@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  env: { browser: true, node: true, es6: true },
  parserOptions: {
    sourceType: "module",
    project: "./tsconfig.json"
  },
  rules: {
    semi: ['error', 'never'],
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true
      }
    ],
  }
};
