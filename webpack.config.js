const webpack           = require('webpack')
const { join, resolve } = require('path')
const BabiliPlugin      = require('babili-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const config = {
  entry: {
    vendor: [
      'inferno',
      'inferno-component',
      'inferno-compat',
      'inferno-router',
      'styled-components',
      'decko',
      'prismjs/prism',
      'prismjs/components/prism-jsx',
      'polished',
      'history/createBrowserHistory'
    ],
    route: join(__dirname, 'src', 'index')
  },

  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
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
      '@slup/typography': join(__dirname, 'packages', 'Typography', 'src', 'index'),
      
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
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' }),
    new CopyWebpackPlugin([
      { 
        from: join(__dirname, 'src', 'index.html'), 
        to: join(__dirname, 'dist', 'index.html')  
      },
      { 
        from: join(__dirname, 'src', '404.html'),
        to: join(__dirname, 'dist', '404.html')
      } 
    ])
  ],

  devtool: 'source-map',
  target: 'web'
}

if(process.env.NODE_ENV === 'production') {
  config.plugins.push(new webpack.optimize.ModuleConcatenationPlugin())
  config.plugins.push(new BabiliPlugin())
} else {
  config.output.publicPath = 'http://localhost:8080/'
  config.plugins.push(new webpack.HotModuleReplacementPlugin())
}

module.exports = config
