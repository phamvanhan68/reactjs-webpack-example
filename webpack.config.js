const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


const VENDOR_LIBS = [
    'react',
    'react-dom',
    'react-redux',
    'react-router-dom',
    'redux',
    'redux-saga'
];

let mode = 'development';
// let target = 'web';

if (process.env.NODE_ENV === "production") { 
  mode = "production";
  // target = "browserslist";
}

module.exports = {
  mode: mode,
  // target: target,
  entry: {
    bundle: "./src/index.js",
    vendor: VENDOR_LIBS
  },
  output: {
    filename: "[name].[fullhash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new MiniCssExtractPlugin() 
  ],
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "postcss-loader", 
          // sass-loader should be put at the end of array as recomendation of docs
          "sass-loader"
        ],
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|\.svg$|\.woff$|\.woff2$|\.eot$|\.ttf$|\.wav$|\.mp3$|\.ico$/,
        use: ["file-loader"],
      },
    ],
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'async',
  //     minSize: 5000,
  //     minRemainingSize: 0,
  //     maxSize: 20000,
  //     minChunks: 1,
  //     maxAsyncRequests: 30,
  //     maxInitialRequests: 30,
  //     enforceSizeThreshold: 50000,
  //     cacheGroups: {
  //       defaultVendors: {
  //         test: /[\\/]node_modules[\\/]/,
  //         priority: -10,
  //         reuseExistingChunk: true,
  //       },
  //       default: {
  //         minChunks: 2,
  //         priority: -20,
  //         reuseExistingChunk: true,
  //       },
  //     },
  //   },
  // }
  // devtool: 'source-map'
};