module.exports = {
  env: {
    "react-native/react-native": true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "prettier" // Make sure to put it last, so it gets the chance to override other configs.
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "react-native", "react-hooks"],
  rules: {
    // 0: off, 1: warning, 2: "error"
    "react-native/no-inline-styles": 2,
    "react-native/no-unused-styles": 1,
    "react-native/no-single-element-style-arrays": 2,
    "react/prop-types": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-empty": "error",
    "no-unused-vars": [
      "warn",
      { vars: "all", args: "after-used", ignoreRestSiblings: false }
    ],
    indent: ["warn", 2],
    "linebreak-style": ["warn", "unix"],
    quotes: ["warn", "double"],
    semi: ["warn", "never"]
  }
}
