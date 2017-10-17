export const rgbToHsl = (r: number, g: number, b: number) => {
  /** Get the values from the rgb color */
  let red: number = r / 255
  let green: number = g / 255
  let blue: number = b / 255

  /** Take the max and the min from values */
  let max: number = Math.max(red, green, blue)
  let min: number = Math.min(red, green, blue)
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

  return { h: _h, s: _s, l }
}
