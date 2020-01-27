const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { resolve } = require('path')
module.exports = {
   entry: {
      main: './src/index.js',
   },
   output: {
      filename: 'js/[name].bundle.js',
      chunkFilename: 'js/chunks/[name].bundle.js',
      //publicPath: 'assets/',
      path: resolve(__dirname, 'assets'),
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
               loader: 'babel-loader',
               options: {
                  presets: ['@babel/preset-env', '@babel/preset-react'],
               },
            },
         },
         {
            test: /\.scss$/,
            exclude: /(node_modules)/,
            use: [
               { loader: MiniCssExtractPlugin.loader },
               { loader: 'css-loader' },
               { loader: 'sass-loader' },
            ],
         },
      ],
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: './src/index.html',
         //filename: '../index.php',
      }),
      new MiniCssExtractPlugin({
         filename: `css/[name].css`,
         chunkFilename: `css/[id].css`,
      }),
   ],
}
