module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "react-native-reanimated/plugin",
      [
        "module-resolver",
        {
          root: ".",
          extensions: [
            ".js",
            ".jsx",
            ".tsx",
            ".ts",
            ".android.js",
            ".android.tsx",
            ".ios.js",
            ".ios.tsx",
          ],
          alias: {
            "@assets": "./src/assets",
            "@components": "./src/components",
            "@dtos": "./src/dtos",
            "@global": "./src/global",
            "@services": "./src/services",
            "@screens": "./src/screens",
            "@navigation": "./src/navigation",
            "@utils": "./src/utils",
          },
        },
      ],
    ],
  };
};
