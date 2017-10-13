/** Rollup plugins */
import Min from 'rollup-plugin-babel-minify'
import TS from 'rollup-plugin-typescript2'
import CJS from 'rollup-plugin-commonjs'
import RS from 'rollup-plugin-node-resolve'

/** Utils */
import { join } from 'path'
import { tmpdir } from 'os'

export default {
  /** Import path */
  input: join(__dirname, 'src', 'index.ts'),

  output: {
    /** Export path */
    file: join(__dirname, 'dist.js'),

    /** Output options */
    format: 'umd',

    /** Name for the umd export */
    name: 'Slup.Theming'
  },

  external: [
    'inferno-component', 
    'inferno', 
    'inferno-create-element',
    '@slup/common'
  ],

  globals: {
    'inferno-component': 'Inferno.Component',
    'inferno': 'Inferno',
    'inferno-create-element': 'Inferno.createElement',
    '@slup/common': 'Slup.Common'
  },

  plugins: [
    CJS(),
    RS(),
    TS({ cacheRoot: `${tmpdir()}/.rpt2_cache` }),
    // Min({ comments: false })
  ]
}