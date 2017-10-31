/** Impprt the base configuration */
import extend from '../../rollup.base'

/** Utils */
import { join } from 'path'

export default extend({
  /** Import path */
  input: join(__dirname, 'src', 'index.ts'),

  output: {
    /** Export path */
    file: join(__dirname, 'dist.js'),

    /** Output options */
    format: 'umd',

    /** Name for the umd export */
    name: 'Slup.Common'
  }
})