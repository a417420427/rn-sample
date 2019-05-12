const env = process.env.NODE_ENV

module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  plugins: ["@typescript-eslint"],
  parserOptions: {
    sourceType: "module",
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    "no-unused-vars": 0,
    "react/display-name": 0,
    "react/prop-types": 0,
    "no-console": 0, //env === 'devlopment' ? false : true
    "no-useless-escape": 0
  }, 
  settings: {
    react: {
      version: "16.4.2"
    }
  }
}