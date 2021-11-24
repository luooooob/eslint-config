# @luooooob/eslint-config

My shareable ESLint configuration. Inspired by https://github.com/antfu/eslint-config

## Feature

1. Out of the box.
2. Support `javascript`, `typescript`, `javascriptreact`, `typescriptreact`, `vue` and `json`, `package.json`, `tsconfig.json` files.

## Usage

### Install 

```sh
npm i -D @luooooob/eslint-config
```

### Config .eslintrc

```json
{
  "extends": "@luooooob"
}
```

### Add script for package.json

```json
{
  "scripts": {
    "lint": "eslint . --fix"
  }
}
```

### Config editor

I recommend using eslint as the default formatter of your editor. For example, if you are using VS Code, create a `.vscode/settings.json`:

```json
{
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "json"
  ],
  "[javascript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[javascriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[typescript]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[typescriptreact]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[vue]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[json]": {
    "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
}
```
