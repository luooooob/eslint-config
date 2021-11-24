module.exports = {
  overrides: [
    {
      files: ["*.{jsx,tsx}"],
      plugins: [
        "react",
        "jsx-a11y",
        "react-hooks"
      ],
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      },
      settings: {
        react: {
          version: "detect"
        }
      },
      rules: {
        "react/boolean-prop-naming": ["error"],
        "react/function-component-definition": ["error", {
          namedComponents: "arrow-function",
          unnamedComponents: "arrow-function"
        }],
        "react/self-closing-comp": ["error", {
          component: true,
          html: true
        }],
        "react/jsx-indent": ["error", 2],
        "react/jsx-no-duplicate-props": ["error"],
        "react/jsx-no-undef": ["error"],
        "react/jsx-pascal-case": ["error"],
        "react/jsx-uses-vars": ["error"],

        "jsx-a11y/alt-text": "warn",
        "jsx-a11y/anchor-has-content": "warn",
        "jsx-a11y/anchor-is-valid": ["warn", {
          aspects: ["noHref", "invalidHref"]
        }],
        "jsx-a11y/aria-activedescendant-has-tabindex": "warn",
        "jsx-a11y/aria-props": "warn",
        "jsx-a11y/aria-proptypes": "warn",
        "jsx-a11y/aria-role": ["warn", {ignoreNonDOM: true}],
        "jsx-a11y/aria-unsupported-elements": "warn",
        "jsx-a11y/heading-has-content": "warn",
        "jsx-a11y/iframe-has-title": "warn",
        "jsx-a11y/img-redundant-alt": "warn",
        "jsx-a11y/no-access-key": "warn",
        "jsx-a11y/no-distracting-elements": "warn",
        "jsx-a11y/no-redundant-roles": "warn",
        "jsx-a11y/role-has-required-aria-props": "warn",
        "jsx-a11y/role-supports-aria-props": "warn",
        "jsx-a11y/scope": "warn",

        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn"
      }
    }
  ]
}
