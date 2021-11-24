module.exports = {
  extends: [
    require.resolve("./rules/base"),
    require.resolve("./rules/json"),
    require.resolve("./rules/typescript"),
    require.resolve("./rules/react")
  ]
}