module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            "@components": "./app/components", // Example alias for the components folder
            "@screens": "./app/screens", // Example alias for the screens folder
            // Add more aliases as needed for your project structure
          },
        },
      ],
    ],
  };
};
