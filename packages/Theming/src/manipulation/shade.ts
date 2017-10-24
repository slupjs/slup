import { rgbToHsl, hslToRgb } from './hsl'
import { hexToRgb, rgbToHex } from './hex'

export const shade = (lum: number, color: string) => {
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

  /** Check if the color is an hex color */
  const isHex = typeof color === 'string' && color.indexOf('#') == 0

  /** Get the rgb values */
  const r: number = Number(col[0])
  const g: number = Number(col[1])
  const b: number = Number(col[2])
  /** Convert the rgb to a hex color */
  const hex = hexToRgb(color)

  /** Convert to hsl the needed values */
  const convertedRed = isRgb ? r : hex.r
  const convertedGreen = isRgb ? g : hex.g
  const convertedBlue = isRgb ? b : hex.b

  /** Convert the rgb or the hex to a hsl color */
  const rgb = rgbToHsl(convertedRed, convertedGreen, convertedBlue)

  /** Set the given lightness */
  let _hsl: number = rgb.l + _lum

  /** Round the lightness if it is bigger than 100 or lower than 0 */
  if (_hsl > 100) _hsl = 100
  else if (_hsl < 0) _hsl = 0

  /** Convert the transformed hsl to a rgb or to a hex */
  const hsl = hslToRgb(rgb.h, rgb.s / 100, _hsl / 100)
  const rgb_to_hex = rgbToHex(hsl.r, hsl.g, hsl.b)

  return(
    isHex
    ? rgb_to_hex
    : `rgb(${hsl.r}, ${hsl.g}, ${hsl.b})`
  )
}

export const darken = (lum, color) => shade(-lum, color)
export const lighten = (lum, color) => shade(+lum, color)