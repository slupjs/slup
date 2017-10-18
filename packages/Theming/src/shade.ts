import { rgbToHsl } from './hsl'

export const lighten = (lum: number, color: string) => {
  /** The value of the param */
  let col: string[] | string | number = color

  /** Split the string `rgb(a, b, c)` into [a, b, c] */
  col = col.replace(/[^\d,]/g, '').split(',')

  /** Round the lightness */
  let _lum: number = lum * 100

  /** Check if the color is a rgb color */
  const isRgb: boolean = color[0] == 'r'
    && color[1] == 'g'
    && color[2] == 'b'

  if (isRgb) {

    /** Convert from rgb to hsl */
    const r: number = Number(col[0])
    const g: number = Number(col[1])
    const b: number = Number(col[2])
    const rgb = rgbToHsl(r, g, b)

    /** Set the given lightness */
    let _hsl: number = rgb.l + _lum

    /** Round the lightness if it passes 100 */
    if (_hsl > 100) _hsl = 100

    return `hsl(${rgb.h}, ${rgb.s}%, ${_hsl}%)`
  }
}
