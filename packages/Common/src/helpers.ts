/**
 * Adds `px` if the value is a JS number
 *
 * @param {number | string} value Any css measurament size
 * @return {string} The sanitized string(css friendly)
 */
export const sanitize = value => typeof value == 'number' ? value + 'px' : value

/**
 * Capitalizes the given string
 *
 * @param  {string} initial The initial string
 * @return {string} The capitalized string
 */
export const capitalize = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

/**
 *  Keeps the value between the given maximum and minimum
 *
 * @param {number} min The minimum value
 * @param {number} value The given value
 * @param {number} maximum The maximum value
 *
 * @return {number} The value kept between the given limits
 */
export const vise = (min, value, max) => Math.min(Math.max(min, value), max)
