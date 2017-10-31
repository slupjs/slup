/**
 * Adds `px` if the value is a JS number
 * 
 * @param value Any css measurament size
 */
export const sanitize = value => typeof value == 'number' ? value + 'px' : value
