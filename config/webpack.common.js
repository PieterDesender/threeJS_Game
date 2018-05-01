const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackAssetsManifest = require('webpack-assets-manifest');

module.exports = {
  name: 'game',
  entry: {
    app: './src/bootstrapper.js'
  },
  plugins: [
    new CleanWebpackPlugin(['./../dist'], {allowExternal:true}),
    new HtmlWebpackPlugin({
      title: 'napoleonPrizewheel',
      template: './public/assets/html/index.html',
      filename: 'index.html'
    }),
    new WebpackAssetsManifest({
      output: 'assetManifest.json',
    })
  ],
  output: {
    filename: 'game.bundle.js',
    path: path.resolve(__dirname, './../dist'),
    libraryTarget: "var",
    library: "game",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components|lib)/,
        use: [{
          loader: "babel-loader",
          options: {
            plugins: [["transform-runtime", {
              helpers: true,
              polyfill: true,
              regenerator: true,
            }]],
            presets: ["es2015"]
          }
        }]
      },
      {
        test: /\.(mp3|wav)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/sounds/'
            }
          }
        ]
      },
      {
        test: /\.(csv|tsv)$/,
        use: [
          'csv-loader'
        ]
      },
      {
        test: /\.xml$/,
        use: [
          'xml-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/texture/'
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash].[ext]',
              outputPath: 'assets/font/'
            }
          }
        ]
      }
    ]
  }
}