var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var TSConfigPathsWebpackPlugin = require("tsconfig-paths-webpack-plugin");
var MiniCSSExtractPlugin = require("mini-css-extract-plugin");
let DuplicatePackageCheckerPlugin = require("duplicate-package-checker-webpack-plugin");
// let { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  mode: "production",
  entry: "./example/app.tsx",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist/"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPlugin.loader,
            options: {
              publicPath: "./",
              exclude: /node_modules/,
            },
          },
          {
            loader: "css-loader",
          },
          //TODO: 重新定制antd主题时会用到
          // {
          //   loader: "less-loader",
          // },
        ],
      },
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new MiniCSSExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/),
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: "template.ejs",
    }),
    new DuplicatePackageCheckerPlugin(),
    // new BundleAnalyzerPlugin(),
  ],
  devtool: "cheap-source-map",
  stats: {
    all: false,
    colors: true,
    errors: true,
    errorDetails: true,
    performance: true,
    reasons: true,
    timings: true,
    warnings: true,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".json"],
    plugins: [
      new TSConfigPathsWebpackPlugin({
        configFile: path.resolve(__dirname, "./tsconfig.json"),
      }),
    ],
  },
};
