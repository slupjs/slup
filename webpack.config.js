const webpack           = require('webpack')
const { join }          = require('path')

module.exports = {
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
