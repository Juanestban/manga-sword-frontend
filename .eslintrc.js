const types = {
  ON: "on",
  OFF: "off",
}

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard", "prettier"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    "react/react-in-jsx-scope": types.OFF,
    "react/prop-types": types.OFF,
    "multiline-ternary": types.OFF,
    "no-unused-vars": types.OFF,
    "react/display-name": types.OFF,
    "react/jsx-key": types.OFF,
    "no-return-assign": types.OFF,
    "no-unused-expressions": types.OFF,
    "space-before-function-paren": types.OFF,
    "no-self-assign": types.OFF,
    "array-callback-return": types.OFF,
    eqeqeq: types.OFF,
    "quote-props": types.OFF,
    "no-unneeded-ternary": types.OFF,
  },
}
