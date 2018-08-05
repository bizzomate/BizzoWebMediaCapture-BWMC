const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 3000,
    color: true,
    historyApiFallback: true,
    hot: true,
    index: "index.html",
    open: true,
    watchContentBase: true
  },
  devtool: "cheap-module-eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["babel-preset-env"],
            plugins: [require("babel-plugin-transform-object-rest-spread")]
          }
        }
      }
    ]
  }
};
