import { hexToRgba } from './rgba'

/**
 * Shades a color(lighten, darken) by a given
 * number, wich can be positive or negative
 *
 * @param   lum The ammount of luminosity
 * @param   hex The color that will be changed
 * @returns hex  The result of the change
 */
export const shade = (lum: number = 0, color: string): string => {
  /** Assuming the color is an rgb */
  let [r, g, b] = color
    .replace(/[^\d,]/g, '') /** Removes the letters */
    .split(',') /** Splits the digits by each ',' */
    .map(x => Number(x)) /** Transforms strings into numbers */

  /** Otherwise if we redive an HEX color, we transform it to rgb */
  if (color[0] == '#') {
    const { r: R, g: G, b: B } = hexToRgba(color)
    r = R, g = G, b = B
  }
  
  /** Loops for all color numbers, and shades them accordingly */
  return '#' + [r, g, b].map((_color: any) => {
    /** Helper function to keep the number between 0 and 255(color limits) */
    const limit = number => Math.round(Math.min(Math.max(0, number), 255))

    /** Increase/decrease the value of the numeric shade */
    const change = _color * lum

    /** Sum the base color with the difference, then return */
    _color = limit(_color + change).toString(16)

    return _color.length == 2 ? _color : '0' + _color
  }).join('') /** Merge the three 2-digit colors */
}