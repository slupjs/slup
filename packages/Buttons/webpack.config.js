const webpack           = require('webpack')
const BabiliPlugin      = require("babili-webpack-plugin")
const { join }          = require('path')

let config = {
	entry: join(__dirname, 'src', 'index'),

	output: {
		path: __dirname,
		filename: 'dist.js'
	},

	resolve: {
		extensions: [ '.js' ]
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

if(process.env.NODE_ENV == 'production') {
	config.plugins.push(new BabiliPlugin())
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
}

module.exports = config
