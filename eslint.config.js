const eslintPluginPrettierRecommended = require("eslint-plugin-prettier/recommended");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
      },
    },
    ...eslintPluginPrettierRecommended,
  },
  {
    files: ["**/*.js"],
    ...eslintPluginPrettierRecommended,
  },
];
