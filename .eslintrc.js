module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true
  },
  extends: [
    "prettier",
    "prettier/react",
    "plugin:react/recommended"
  ],
  settings: {
    react: {
      version: "16.0"
    }
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "react",
    "prettier"
  ],
  rules: {
    "prettier/prettier": "error"
  }
};
