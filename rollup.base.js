/** Rollup plugins */
import Min from 'rollup-plugin-babel-minify'
import TS from 'rollup-plugin-typescript2'
import CJS from 'rollup-plugin-commonjs'
import RS from 'rollup-plugin-node-resolve'

/** Utils */
import { join } from 'path'
import { tmpdir } from 'os'

const base = {
  /** External dependecies, resolved via commonjs or AMD */
  external: [
    'inferno-component',
    'inferno',
    'inferno-create-element',
    '@slup/common',
    '@slup/theming'
  ],

  /** External dependecies, resolved via commonjs or AMD */
  globals: {
    /** Slup modules */
    '@slup/common': 'Slup.Common',
    '@slup/theming': 'Slup.Theming',
    '@slup/buttons': 'Slup.Buttons',
    '@slup/controls': 'Slup.Controls',
    '@slup/grid': 'Slup.Grid',
    '@slup/icons': 'Slup.Icons',
    '@slup/navbar': 'Slup.Navbar',
    '@slup/sidenav': 'Slup.Sidenav',
    '@slup/slider': 'Slup.Slider',
    '@slup/tabs': 'Slup.Tabs',
    '@slup/typography': 'Slup.Typography',

    /** Other externals */
    'inferno-component': 'Inferno.Component',
    'inferno': 'Inferno'
  },

  plugins: [
    CJS(),
    RS(),
    TS({ 
      cacheRoot: join(tmpdir(), '.rpt2_cache'),
      check: false
    }),
    Min({ comments: false })
  ]
}

export default (extend) => Object.assign({}, base, extend)