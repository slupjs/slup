const webpack           = require('webpack')
const { join }          = require('path')

module.exports = {
  entry: join(__dirname, 'src', 'index'),

  output: {
    path: __dirname,
    filename: 'dist.js'
  },

  resolve: {
    extensions: [ '.js' ],
    alias: {
      '@slup/ripple': join(__dirname, 'packages', 'Ripple', 'src', 'index'),
      '@slup/slider': join(__dirname, 'packages', 'Slider', 'src', 'index'),
      '@slup/buttons': join(__dirname, 'packages', 'Buttons', 'src', 'index'),
      '@slup/lists': join(__dirname, 'packages', 'Lists', 'src', 'index'),

      
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ],

  devtool: 'source-map',
  target: 'web'
}
