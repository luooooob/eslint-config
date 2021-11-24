module.exports = {
  overrides: [
    {
      files: ["*.{ts,tsx}"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        sourceType: "module",
        project: ["./tsconfig.json"]
      },
      plugins: ["@typescript-eslint"],

      rules: {

        // TypeScript 规则
        "@typescript-eslint/array-type": ["error", {
          default: "array",
          readonly: "array"
        }],
        "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
        "@typescript-eslint/consistent-type-definitions": ["error", "type"],
        "@typescript-eslint/consistent-type-exports": ["error"],
        "@typescript-eslint/consistent-type-imports": ["error"],
        "@typescript-eslint/no-explicit-any": ["error"], //
        "@typescript-eslint/prefer-as-const": ["error"], //
        "@typescript-eslint/prefer-nullish-coalescing": ["error"],
        "@typescript-eslint/prefer-optional-chain": ["error"],
        // "@typescript-eslint/prefer-readonly-parameter-types": ["error"],
        "@typescript-eslint/type-annotation-spacing": ["error"],

        // TypeScript 扩展 ESLint 规则 - 语法部分

        "default-param-last": "off",
        "@typescript-eslint/default-param-last": ["error"],

        "no-duplicate-imports": "off",
        "@typescript-eslint/no-duplicate-imports": ["error"],

        "no-redeclare": "off",
        "@typescript-eslint/no-redeclare": ["error"],

        "no-unused-expressions": "off",
        "@typescript-eslint/no-unused-expressions": ["warn"],

        "no-unused-vars": "off",
        "@typescript-eslint/no-unused-vars": ["warn"],

        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": ["error"],

        // TypeScript 扩展 ESLint 规则 - 格式部分

        "brace-style": "off",
        "@typescript-eslint/brace-style": ["error", "1tbs"],

        "comma-dangle": "off",
        "@typescript-eslint/comma-dangle": ["error", "never"],

        "comma-spacing": "off",
        "@typescript-eslint/comma-spacing": ["error", {"before": false, "after": true}],

        "func-call-spacing": "off",
        "@typescript-eslint/func-call-spacing": ["error", "never"],

        "indent": "off",
        "@typescript-eslint/indent": ["error", 2],

        "keyword-spacing": "off",
        "@typescript-eslint/keyword-spacing": ["error", {"before": true, "after": true}],

        "object-curly-spacing": "off",
        "@typescript-eslint/object-curly-spacing": ["error", "never"],

        "quotes": "off",
        "@typescript-eslint/quotes": ["error", "double", {"allowTemplateLiterals": true}],

        "semi": "off",
        "@typescript-eslint/semi": ["error", "never"],

        "space-before-function-paren": "off",
        "@typescript-eslint/space-before-function-paren": ["error", "always"],

        "space-infix-ops": "off",
        "@typescript-eslint/space-infix-ops": ["error"]
      }
    }
  ]
}
