/**
 * Dubles the HEX string passed, from 3 to 6 digits
 *
 * @param hex 3-digit HEX code
 */
export const expandHex = (hex: string): string =>
  hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]

/**
 * Converts an hex color to an rgb one
 * and returns an object containing values:
 * `r`, `g` and `b`
 *
 * @param   {string}   hex An hex color string
 * @returns {RGBColor} RGB The object representing the color
 */
export const hexToRgb = (_hex: string) => {
  let hex: string = _hex.length === 4
  /** 3-digit HEX code */
  ? expandHex(_hex.replace('#', ''))

  /** Classic 6-digit HEX color */
  : _hex.replace('#', '')

  let r: number = parseInt(hex.slice(0, 2), 16)
  let g: number = parseInt(hex.slice(2, 4), 16)
  let b: number = parseInt(hex.slice(4, 6), 16)

  return { r, g, b }
}

/**
 * Converts a rgb color into an HEX string
 *
 * @param r The red value
 * @param g The green value
 * @param b The blue value
 */
export const rgbToHex = (r: number, g: number, b: number): string =>
  '#' + [r, g, b].map((x: number) =>
    /** length of r/g/b -> hex */
    x.toString(16).length === 1
      /**
       * If the x converted to 2-digit HEX is long 1 charter,
       * supply the first number as a 0
       */
      ? '0' + x.toString(16)

      /** Otherwhise use the 2-digit converted string as the value */
      : x.toString(16)
  )
  /** Merge the array into a 6-digit HEX string */
  .join('')
