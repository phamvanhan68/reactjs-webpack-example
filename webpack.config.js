const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { vendor } = require('postcss');

let mode = 'development';
let target = 'web';
let plugins = [
  new HtmlWebpackPlugin({
    template: "./src/index.html",
  }),
  new MiniCssExtractPlugin({
    filename: '[name][fullhash].css',
    chunkFilename: '[id][fullhash].css',
  })  
]

// ___Enviroment Checking___
if (process.env.NODE_ENV === 'production') {
  mode = 'production';
  target = "browserslist";
}

if (process.env.SERVE) {
  // We only want React Hot Reloading in serve mode
  plugins.push(new ReactRefreshWebpackPlugin());
}


// ___Webpack Configuration___
module.exports = {
  mode: mode,
  target:target,
  entry: "./src/index.js",
  output: {
    filename: "[name].[fullhash].js",
    assetModuleFilename: "images/[hash][ext][query]",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: plugins,
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
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset',
        // type: asset|asset/resource
        // if not parser -> default will be 8kb
        parser: {
          dataUrlCondition: {
            maxSize: 30 * 1024
          }
          // parser work with type: asset, parser like a threshold, 
          // picture > 30*1024 bytes will be in images folder in dist
          // other images < 30*1024 bytes will be infected inside code -> normally the small images
        }
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: '',
            },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader"
        ],
      },
    ],
  },
  // devtool: source-map =>  the bundle.js file shows the re-transpiled code => easy to debug
  devtool: false,
  // required if using webpack-dev-server
  devServer: {
    contentBase: "./dist",
    hot: true,
  },
};