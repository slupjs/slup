/** Rollup plugins */
import Min from 'rollup-plugin-babel-minify'
import TS from 'rollup-plugin-typescript2'

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

  external: [ 'inferno-component', 'inferno' ],

  globals: {
    'inferno-component': 'Inferno.Component',
    'inferno': 'Inferno'
  },

  plugins: [
    TS({ cacheRoot: `${tmpdir()}/.rpt2_cache` }),

    Min({
      comments: false,
      banner:
`/** 
 * This module is a part of Slup: 
 * https://github.com/slupjs/slup 
 */`
    })

  ]
}