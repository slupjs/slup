import { hexToRgba } from './rgba'

export const lighten = (lum: number, color: string) => {
  /** Take the lightness of the hsl color */
  let hsl: string[] | string | number = color

  /** Split the string `hsl(a, b, c)` into [a, b, c] */
  hsl = hsl.replace(/[^\d,]/g, '').split(',')

  /** Put the lightness as a value */
  let _lum: number = lum * 100
  let _hsl: number = Number(hsl[2]) + _lum

  /** Round the lightness if it passes 100 */
  if (_hsl > 100) _hsl = 100

  return `hsl(${hsl[0]}, ${hsl[1]}%, ${_hsl}%)`
}
