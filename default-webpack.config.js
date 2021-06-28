const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/js/app.js",
  output: {
    // filename: "main.js",
    filename: "main.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // publicPath: "/dist/",
    publicPath: "", //when using html-webpack-plugin""
  },
  //watch: true, //not necessary if we use devServer
  devServer: {
    port: 8080,
    contentBase: path.resolve(__dirname, "./dist"),
    index: "index.html",
    writeToDisk: true,
    hot: true, //hot module replacement
  },

  // mode: "none",
  // mode: "development",
  mode: "production",
  module: {
    rules: [
      //image loader rules
      {
        test: /\.(jpg|png|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "images/",
            },
          },
        ],
      },
      //css sass loader rules
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        // dont need style-loader if we use mini-css-extract-plugin
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },

      /*
       
       
        {
        test: /\.(sa|sc|c)ss$/,
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ]
      }
       */

      //babel-loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

      //handlebars-loader

      {
        test: /\.hbs$/,
        use: ["handlebars-loader"],
      },
    ],
  },
  plugins: [
    new TerserPlugin(), //code minifier, no need to use ion dev mode,default in production mode

    new MiniCssExtractPlugin({ filename: "style.[contenthash].css" }),
    new CleanWebpackPlugin(),

    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        "**/*",
        path.join(process.cwd(), "build/**/*"),
      ],
    }),
    // new htmlWebpackPlugin(), // Generates default index.html
    new HtmlWebpackPlugin({
      // inject: false,
      filename: "index.html",
      title: "Learn WebPack",
      // template: "./src/index.html",
      template: "./src/index.hbs",
      meta: {
        description: "Can you hear me?",
      },
    }),
  ],
};
