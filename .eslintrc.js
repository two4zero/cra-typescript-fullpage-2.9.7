module.exports = {
  /*
  env: {
    browser: true,
    es2021: true,
    // amd: true,
  },
   */
  extends: ["react-app", "react-app/jest", "prettier"],
  /*
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {},
   */
  globals: {
    jQuery: "readonly",
    IScroll: "readonly",
  },
};
