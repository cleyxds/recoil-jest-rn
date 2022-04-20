module.exports = function (api) {
  api.cache(true)
  return {
    presets: [
      "babel-preset-expo",
      ["@babel/preset-env", { targets: { node: "current" } }]
    ],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@atoms": "./atoms",
            "@components": "./components",
            "@hooks": "./hooks",
            "@theme": "./styles/theme"
          }
        }
      ]
    ]
  }
}
