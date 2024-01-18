module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  globals: {
    React: "readonly",
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "no-unused-vars": [1, { args: "after-used", argsIgnorePattern: "^_" }],
  },
};

// 0: Turn off rule. Will never bug you about unused variables again
// 1: Warning.       Turn the rule on as a warning (doesn’t affect exit code)
// 2: Error.         Turn the rule on as an error (exit code will be 1)
