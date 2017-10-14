import { expandHex } from './hex'

export interface RGBColor {
	r: number
	g: number
	b: number
	a: number
}

/**
 * Converts an hex color to an rgb one
 * and returns an object containing values:
 * `r`, `g` and `b`
 *
 * @param  {string}   hex An hex color string
 * @returns {RGBColor} RGB The object representing the color
 */
export const hexToRgb = (_hex: string): RGBColor => {
  let hex: any   = _hex.replace('#', '')
  
  if(hex.length < 6) hex = expandHex(hex) 

  let r: number = parseInt(hex.slice(0, 2), 16)
  let g: number = parseInt(hex.slice(2, 4), 16)
  let b: number = parseInt(hex.slice(4, 6), 16)
  
	
  return { r, g, b, a: 1 }
}


/**
 * This is the function that returns a rgba color
 * which can also give opacity to a hex color
 *
 * @param  {number | string} r The red value or an HEX color string
 * @param  {number}          g The green value
 * @param  {number}          b The blue value
 * @param  {number}          a The alpha value
 * @returns {string}            The rgba color string
 */
export const rgba = (_r: number | string, _g: number, _b?: number, _a?: number ): string => {
	const isHex = typeof _r === 'string' 
		&& _r.indexOf('#') == 0

  if (isHex) {
		/** If we're facing an hex color string  */
    const { r, g, b } = hexToRgb(<string>_r)
		
		/** 
		 * We take the opacity as the second argument
		 * as the frist one is the HEX string
		 */
		const a = _g
		
		return `rgba(${r}, ${g}, ${b}, ${a})`
  } else {
		/** Just a normal rgba use-case, then return. */
		return `rgba(${_r}, ${_g}, ${_b}, ${_a})`
	}
}
