const webpack           = require('webpack')
const { join, resolve } = require('path')
const BabiliPlugin      = require("babili-webpack-plugin")

const config = {
  entry: {
    vendor: [
      'inferno',
      'inferno-component',
      'inferno-compat',
      'inferno-router',
      'styled-components',
      'decko',
      'polished',
      'history/createBrowserHistory'
    ],
    route: join(__dirname, 'src', 'index')
  },

  output: {
    path: __dirname,
    filename: '[name].js',
    publicPath: 'http://localhost:8080/'
  },

  resolve: {
    extensions: [ '.js' ],

    alias: {
      '@slup/ripple': join(__dirname, 'packages', 'Ripple', 'src', 'index'),
      '@slup/slider': join(__dirname, 'packages', 'Slider', 'src', 'index'),
      '@slup/buttons': join(__dirname, 'packages', 'Buttons', 'src', 'index'),
      '@slup/lists': join(__dirname, 'packages', 'Lists', 'src', 'index'),
      '@slup/navbar': join(__dirname, 'packages', 'Navbar', 'src', 'index'),
      '@slup/controls': join(__dirname, 'packages', 'Controls', 'src', 'index'),
      '@slup/sidenav': join(__dirname, 'packages', 'Sidenav', 'src', 'index'),
      '@slup/grid': join(__dirname, 'packages', 'Grid', 'src', 'index'),
      '@slup/theming': join(__dirname, 'packages', 'Theming', 'src', 'index'),
      '@slup/tabs': join(__dirname, 'packages', 'Tabs', 'src', 'index'),
      '@slup/icons': join(__dirname, 'packages', 'Icons', '_icons'),

      // Aliases needed for styled-components
      'react': 'inferno-compat',
      'react-dom': 'inferno-compat'
    },

    modules: [join(process.cwd(), 'node_modules')]
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

	devServer: {
		contentBase: __dirname,
		port: 8080,
		noInfo: false,
		hot: true,
		inline: true,
		proxy: {
			'/': {
				bypass: function (req, res, proxyOptions) {
					return '/src/index.html'
				}
			}
		}
  },

	plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devtool: 'source-map',
  target: 'web'
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new BabiliPlugin())
} else {
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
