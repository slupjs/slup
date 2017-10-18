/**
 * Converts rgb color to hsl color
 * @param  {number} red   The red value of the rgb
 * @param  {number} green The green value of the rgb
 * @param  {number} blue  The blue value of the rgb
 * @returns {object}       The values of the hsl color
 */
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
  const _h = Math.round(h * 360)
  const _s = Math.round((s * 100))
  const _l = Math.round((l * 100))

  return { h: _h, s: _s, l: _l }
}


/**
 * Converts hsl color to rgb color
 * @param  {number} hue        The hue of the hsl
 * @param  {number} saturation The saturation of the hsl
 * @param  {number} lightness  The lightness of the hsl
 * @returns {object}           The values of the rgb color
 */
export const hslToRgb = (h: number, s: number, l: number) => {

  /** If hue is undefined */
  if (h == undefined) {
    return { r: 0, g: 0, b: 0 }
  }

  /** Get base values for the formula */
  let hue: number = h / 60
  const chroma: number = (1 - Math.abs((2 * l) - 1)) * s
  const intersection: number = chroma * (1 - Math.abs((hue % 2) - 1))
  const lightnessAdjustment = l - (chroma / 2)

  /** Get the largest amount of hue */
  hue = Math.floor(hue)

  /** Declare values that need to be set */
  let red: number, green: number, blue: number

  /** Set the values depending on the hue  */
  switch(hue) {
    case 0:
      red = chroma
      green = intersection
      blue = 0
    break
    case 1:
      red = intersection
      green = chroma
      blue = 0
    break
    case 2:
      red = 0
      green = chroma
      blue = intersection
    break
    case 3:
      red = 0
      green = intersection
      blue = chroma
    break
    case 4:
      red = intersection
      green = 0
      blue = chroma
    break
    case 5:
      red = chroma
      green = 0
      blue = intersection
    break
  }

  /** Round the values */
  const _r = Math.round((red + lightnessAdjustment) * 255)
  const _g = Math.round((green + lightnessAdjustment) * 255)
  const _b = Math.round((blue + lightnessAdjustment) * 255)

  return { r: _r, g: _g, b: _b }
}
