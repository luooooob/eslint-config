# @luooooob/eslint-config

My shareable ESLint configuration. Inspired by https://github.com/antfu/eslint-config

## Feature

1. Out of the box.
2. Support `javascript`, `typescript`, `javascriptreact`, `typescriptreact` and `vue` proejcts.

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

The ESLint rules may conflict with the default formatter of your editor，you can specify to use ESLint instead of the default formatting operation. 

For example, if you are using VS Code, create a `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```
