module.exports = {
  env: {
    browser: true,
    commonjs: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  rules: {

    // Grammar
    "default-param-last": ["error"],
    "no-const-assign": ["error"],
    "no-duplicate-imports": ["error"],
    "no-sparse-arrays": ["error"],
    "no-undef": ["error"],
    "no-unexpected-multiline": ["error"],
    "no-unused-expressions": ["warn"],
    "no-unused-vars": ["warn"],
    "no-unreachable": ["error"],
    "no-use-before-define": ["error"],

    //

    "curly": ["error", "all"],
    "default-param-last": ["error"],
    "eqeqeq": ["error"],
    "func-style": ["error", "expression"],
    "no-redeclare": ["error"],
    "prefer-const": ["error"],
    "prefer-destructuring": ["error"],
    "prefer-object-spread": ["error"],
    "prefer-rest-params": ["error"],
    "prefer-spread": ["error"],
    "prefer-template": ["error"],
    "spaced-comment": ["error", "always", { "markers": ["/"] }],

    // Format

    "array-bracket-spacing": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "arrow-spacing": ["error", { "before": true, "after": true }],
    "block-spacing": ["error", "always"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": ["error", "never"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": ["error", "last"],
    "dot-location": ["error", "property"],
    "eol-last": ["error", "always"],
    "func-call-spacing": ["error", "never"],
    "implicit-arrow-linebreak": ["error", "beside"],
    "indent": ["error", 2],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": ["error", { "before": true, "after": true }],
    "linebreak-style": ["error", "unix"],
    "no-extra-parens": ["error", "all"],
    "no-multi-spaces": ["error"],
    "no-multiple-empty-lines": ["error", { "max": 1, "maxEOF": 0, "maxBOF": 0 }],
    "no-tabs": ["error"],
    "no-trailing-spaces": ["error"],
    "no-whitespace-before-property": ["error"],
    "object-curly-spacing": ["error", "always"],
    "operator-linebreak": ["error", "before"],
    "quotes": ["error", "double", { "allowTemplateLiterals": true }],
    "rest-spread-spacing": ["error", "never"],
    "semi": ["error", "never"],
    "semi-style": ["error", "last"],
    "space-before-blocks": ["error", "always"],
    "space-before-function-paren": ["error", "always"],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": ["error"],
    "switch-colon-spacing": ["error", { "before": false, "after": true }],
    "template-curly-spacing": ["error", "never"],
    "template-tag-spacing": ["error", "never"],
    "unicode-bom": ["error", "never"]
  }
}
