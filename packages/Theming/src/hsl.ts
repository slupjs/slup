export const rgbToHsl = (red: number, green: number, blue: number) => {
  /** Take the values from the rgb color */
  let r: number = red / 255
  let g: number = green / 255
  let b: number = blue / 255

  /** Get the max and the min value from the rgb color */
  let max: number = Math.max(r, g, b)
  let min: number = Math.min(r, g, b)
  let delta: number = max - min

  /** Declare the values that need to be set */
  let h: number = 0
  let s: number = 0
  let l: number = (max + min) / 2


  if (max === min) {
    /** Acromatic */
    h = s = 0
  } else {
    /** Set the saturation */
    s = l > 0.5 ? delta / (2 - max - min) : delta / (max + min)

    /** Set the hue */
    switch (max) {

      /** Calculate if the red is the max value */
      case r:
        h = (g - b) / delta + (g < b ? 6 : 0)
      break

      /** Calculate if the green is the max value */
      case g:
        h = (b - r) / delta + 2
      break

      /** Calculate if the blue is the max value */
      case b:
        h = (r - g) / delta + 4
      break
    }

    /** Divide the hue by a base number */
    h /= 6
  }

  /** Round the values */
  let _h = Math.round(h * 360)
  let _s = Math.round((s * 100))
  let _l = Math.round((l * 100))

  return { h: _h, s: _s, l: _l }
}
