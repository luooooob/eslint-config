module.exports = {
  // extends: [
  //   "plugin:jsonc/recommended-with-jsonc"
  // ],
  overrides: [
    {
      files: ["*.json"],
      parser: "jsonc-eslint-parser",
      plugins: [
        "jsonc"
      ],
      rules: {
        "no-multiple-empty-lines": ["error", { "max": 0, "maxEOF": 0, "maxBOF": 0 }],
        "jsonc/auto": "warn",
        "jsonc/array-bracket-newline": ["error", "always"],
        "jsonc/array-element-newline": ["error", "always"],
        "jsonc/object-curly-newline": ["error", "always"],
        "jsonc/object-property-newline": ["error", { allowAllPropertiesOnSameLine: false }]
      }
    },
    {
      files: ["package.json"],
      rules: {
        "jsonc/sort-keys": [
          "error",
          {
            pathPattern: "^$",
            order: [
              "name",
              "version",
              "private",
              "description",
              "keywords",
              "license",
              "homepage",
              "bugs",
              "repository",
              "funding",
              "author",
              "type",
              "files",
              "exports",
              "main",
              "module",
              "unpkg",
              "bin",
              "scripts",
              "husky",
              "lint-staged",
              "peerDependencies",
              "peerDependenciesMeta",
              "dependencies",
              "devDependencies",
              "eslintConfig"
            ]
          },
          {
            pathPattern: "^(?:dev|peer|optional|bundled)?[Dd]ependencies$",
            order: { type: "asc" }
          }
        ]
      }
    }
  ]
}
