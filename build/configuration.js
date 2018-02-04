const { join } = require('path')
const { tmpdir } = require('os')
const TS = require('rollup-plugin-typescript2')
const CJS = require('rollup-plugin-commonjs')
const RS = require('rollup-plugin-node-resolve')
const BB = require('rollup-plugin-babel')


exports.input = entry => ({
  input: entry,

  /** External dependencies, resolved via commonjs or AMD */
  external: [
    'inferno-component',
    'inferno',
    '@slup/common',
    '@slup/theming',
    '@slup/ripple'
  ],

  plugins: [
    CJS(),
    RS(),
    TS({
      cacheRoot: join(tmpdir(), '.rpt2_cache'),
      /**
       * Needed to avoid errors with TS and missing types,
       * or missing modules(for peerDependencies)
       */
      check: false
    }),
    BB({
      exclude: 'node_modules/**',
      externalHelpers: true,
      babelrc: false,
      plugins: [
        ['inferno', { imports: true }],
        'transform-object-rest-spread',
        'external-helpers'
      ]
    })
  ]
})

exports.output = dir => format => {
  const name = dir.split('/')[dir.split('/').length - 1]

  return {
    format: format,
    name: 'Slup.' + name,
    file: join(dir, 'dist', `bundle.${format}.js`),
    sourcemap: true,
    sourcemapFile: join(dir, 'dist', `bundle.${format}.js.map`),
    exports: 'named',

    /** External dependencies, resolved via commonjs or AMD */
    globals: {
      /** Slup modules */
      '@slup/common': 'Slup.Common',
      '@slup/theming': 'Slup.Theming',
      '@slup/ripple': 'Slup.Ripple',
      '@slup/buttons': 'Slup.Buttons',
      '@slup/controls': 'Slup.Controls',
      '@slup/grid': 'Slup.Grid',
      '@slup/icons': 'Slup.Icons',
      '@slup/lists': 'Slup.Lists',
      '@slup/navbar': 'Slup.Navbar',
      '@slup/sidenav': 'Slup.Sidenav',
      '@slup/slider': 'Slup.Slider',
      '@slup/tabs': 'Slup.Tabs',
      '@slup/typography': 'Slup.Typography',
      '@slup/card': 'Slup.Card',
      '@slup/tooltip': 'Slup.Tooltip',

      /** Other externals */
      'inferno-component': 'Inferno.Component',
      'inferno': 'Inferno'
    }
  }
}