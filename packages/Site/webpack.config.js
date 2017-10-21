const webpack = require('webpack')
const { join } = require('path')
const { tmpdir } = require('os')

const Package = join(__dirname, '..')

const Base = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js' ],

    alias: {
      '@slup/ripple': join(Package, 'Ripple', 'src', 'index'),
      '@slup/slider': join(Package, 'Slider', 'src', 'index'),
      '@slup/buttons': join(Package, 'Buttons', 'src', 'index'),
      '@slup/lists': join(Package, 'Lists', 'src', 'index'),
      '@slup/navbar': join(Package, 'Navbar', 'src', 'index'),
      '@slup/controls': join(Package, 'Controls', 'src', 'index'),
      '@slup/sidenav': join(Package, 'Sidenav', 'src', 'index'),
      '@slup/tabs': join(Package, 'Tabs', 'src', 'index'),
      '@slup/icons': join(Package, 'Icons', '_icons'),
      '@slup/typography': join(Package, 'Typography', 'src', 'index')
    },
    modules: [ join(__dirname, 'node_modules') ]
  },

  module: {
    loaders: [
      {
        test: /\.(ts|tsx)?$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader',
        options: {
          useBabel: true
        }
      },
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },

  plugins: [
    new webpack.optimize.ModuleConcatenationPlugin()
  ]
}


const Server = {
  entry: join(__dirname, 'src', 'server'),

  output: {
    path: join(__dirname, 'dist'),
    filename: 'server.js'
  },

  externals: {
    express: 'commonjs express',
    inferno: 'commonjs inferno'
  },
  
  target: 'node'
}

const Client = {
  entry: {
    vendor: [
      'inferno',
      'inferno-component',
      'inferno-router',
      'prismjs/prism',
      'prismjs/components/prism-jsx',
      'history/createBrowserHistory',
      '@slup/theming'
    ],
    routes: join(__dirname, 'src', 'client')
  },

  output: {
    path: join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/static'
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor' })
  ],

  devtool: 'source-map',
  target: 'web',

}

module.exports = [
  Object.assign({}, Base, Client),
  Object.assign({}, Base, Server)
]