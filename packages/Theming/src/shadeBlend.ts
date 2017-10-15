import { expandHex, rgbToHex } from './hex'

/**
 *
 * @param   {number} lum The ammount of luminosity
 * @param   {string} hex The color that will be changed
 * @returns {string}     The result of the change
 */
export const shadeBlend = (lum: number, hex: string) => {
  // Convert the rgb to a hex color
  if (hex[0] !== '#') {
    const [ r, g, b ] = hex.replace(/[^\d,]/g, '').split(',')
    hex = rgbToHex(r, g, b)
  }

  // Remove the hashtag and expand hex color if needed
  hex = hex.replace('#', '')
  if (hex.length < 6) hex = expandHex(hex)

  lum = lum || 0

  // Convert to decimal and change luminosity
  let hash = "#", c, i

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16)
    c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16)
    hash += ("00" + c).substr(c.length)
  }

  return hash
}

const color = shadeBlend(0.15, '#3cb878')
console.log(color)
