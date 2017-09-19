const webpack = require('webpack')
const BabiliPlugin = require("babili-webpack-plugin")
const { join } = require('path')

let config = {
  entry: join(__dirname, 'src', 'index'),

  output: {
    path: __dirname,
    filename: 'dist.js'
  },

  resolve: {
    extensions: ['.js'],
    alias: {
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    }
  },

  externals: {
    inferno: {
      commonjs: 'inferno',
      amd: 'inferno',
      root: 'Inferno'
    },
    'inferno-component': {
      commonjs: 'inferno-component',
      amd: 'inferno-component',
      root: 'Inferno.Component'
    },
    'styled-components': {
      commonjs: 'styled-components',
      amd: 'styled-components',
      root: 'styled'
    },
    'polished': {
      commonjs: 'polished',
      amd: 'polished',
      root: 'polished'
    },
  },

  plugins: [],

  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  devtool: 'source-map',
  target: 'web'
}

if (process.env.NODE_ENV == 'production') {
  config.plugins.push(new BabiliPlugin())
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
}

module.exports = config
