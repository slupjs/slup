import { expandHex, hexToRgb } from './hex'

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
