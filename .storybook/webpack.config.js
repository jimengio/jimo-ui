module.exports = ({ config }) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve("awesome-typescript-loader"),
        options: { configFileName: "tsconfig.storybook.json", transpileOnly: true, useBabel: true, babelCore: "@babel/core" },
      },
      // Optional
      {
        loader: require.resolve("react-docgen-typescript-loader"),
        // options: { tsconfigPath: "./" },
      },
    ],
  });
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
