/**
 * Dubles the HEX string passed, from 3 to 6 digits
 *
 * @param hex 3-digit HEX code
 */
export const expandHex = (hex: string): string =>
  hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2]

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

export const rgbToHsl = (r: number, g: number, b: number) => {
  /** Get the values from the rgb color */
  let red: number   = r / 255
  let green: number = g / 255
  let blue: number  = b / 255

  /** Take the max and the min from values */
  let max: number   = Math.max(red, green, blue)
  let min: number   = Math.min(red, green, blue)
  let delta: number = (max - min)

  /** Declare the hsl values that need to be set */
  let h: number, s: number, l: number

  /** Set the lightness */
  l = Math.round(((max + min) / 2) * 100)

  /** Set the saturation */
  if (l == 1) {
    s = 0
  } else {
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)
  }

  /** Set the hue */
  if (delta == 0) {
    h = 0
  } else if (red >= blue && blue > green) {
    h = 60 * (6 - ((blue - green) / (red - green)))
  } else if (red >= green && green >= blue) {
    h = 60 * ((green - blue) / (red - blue))
  } else if (max == green) {
    h = 60 * (((blue - red) / delta) + 2)
  } else if (max == blue) {
    h = 60 * (((red - green) / delta) + 4)
  }

  /** Round the saturation value */
  let _s = Math.round(s * 100)
  if (_s > 100) _s = 100

  let _h = Math.round(h)

  return {h: _h, s: _s, l}
}
