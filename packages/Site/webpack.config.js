const webpack = require('webpack')
const { join } = require('path')
const { tmpdir } = require('os')
const Package = join(__dirname, '..')

const Base = {
  resolve: {
    extensions: [ '.ts', '.tsx', '.js', '.jsx' ],

    alias: {
      '@slup/slider': join(Package, 'Slider', 'src', 'index'),
      '@slup/lists': join(Package, 'Lists', 'src', 'index'),
      '@slup/sidenav': join(Package, 'Sidenav', 'src', 'index'),
      '@slup/tabs': join(Package, 'Tabs', 'src', 'index')
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
          useBabel: true,
          babelOptions: { 
            babelrc: false,
            'presets': [
              [join(__dirname, 'node_modules', 'babel-preset-env'), {
                'targets': {
                  'browsers': [
                    'last 2 versions',
                    'safari >= 7'
                  ],
                  'node': '4'
                }
              }]
            ],
            'plugins': [
              join(__dirname, 'node_modules', 'babel-plugin-transform-object-rest-spread'),
              [join(__dirname, 'node_modules', 'babel-plugin-inferno'), { 'imports': true }]
            ],
            'env': {
              'production': {
                'presets': [
                  join(__dirname, 'node_modules', 'babel-preset-minify')
                ]
              }
            }
          },
          silent: process.argv.indexOf('--json') !== -1
        }
      },
      {
        test: /\.(js|jsx)?$/,
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
    express: 'commonjs express'
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
      'history/createBrowserHistory'
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
  target: 'web'
}

/** In case we're taking stats we only care about the client */
if(process.argv.indexOf('--json') !== -1) {
  module.exports = Object.assign({}, Base, Client)
} else {
  module.exports = [
    Object.assign({}, Base, Client),
    Object.assign({}, Base, Server)
  ]
}