const path = require("path");
module.exports = {
  entry: "./src/js/app.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  //watch: true, //not necessary if we use devServer
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true, //hot module replacement
  },
  mode: "development",
  //   mode: "production",
};
