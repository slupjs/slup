const webpack           = require('webpack')
const { join }          = require('path')

module.exports = {
  entry: join(__dirname, 'src', 'index'),

  output: {
    path: '/',
    filename: 'dist.js',
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

      // Aliases needed for styled-components
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

	devServer: {
		contentBase: './',
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.ModuleConcatenationPlugin()
	],

  devtool: 'source-map',
  target: 'web'
}
