import { expandHex } from './hex'
import { RGBAColor } from './interfaces'

/**
 * Converts an hex color to an rgb one
 * and returns an object containing values:
 * `r`, `g` and `b`
 *
 * @param   {string}   hex An hex color string
 * @returns {RGBColor} RGB The object representing the color
 */
export const hexToRgb = (_hex: string): RGBAColor => {
  let hex: string = hex.length < 6
    /** Classic 6-digit HEX color */
    ? _hex.replace('#', '')

    /** 3-digit HEX code */
    : expandHex(_hex.replace('#', '')) 
  
  let r: number = parseInt(hex.slice(0, 2), 16)
  let g: number = parseInt(hex.slice(2, 4), 16)
  let b: number = parseInt(hex.slice(4, 6), 16)
  
	
  return { r, g, b, a: 1 }
}

type HEXorR = number | string

/**
 * Returns an rgba color based on the input, wich can be:
 * - 3 arguments(R, G, B) plus the alpa value
 * - 1 argument(HEX string) and the alpha value
 *
 * @param   r    The red value or an HEX color string
 * @param   g    The green value
 * @param   b    The blue value
 * @param   a    The alpha value
 * @returns rgba The rgba color string
 */
export const rgba = (R: HEXorR, G: number, B?: number, A?: number ): string => {
	const isHex = typeof R === 'string' && R.indexOf('#') == 0

  /** If it's a normal rgba call */
  if(!isHex) {
    return `rgba(${R}, ${G}, ${B}, ${A})`
  }

  /** Otherwise if we're facing an hex color string  */
  const { r, g, b } = hexToRgb(<string>R)
  
  /** 
   * We take the opacity as the second argument
   * as the frist one is the HEX string, 
   * the others are undefined
   */
  return `rgba(${r}, ${g}, ${b}, ${G})`

}
