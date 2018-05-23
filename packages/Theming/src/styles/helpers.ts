/** Utils */
import isUnitless from 'unitless-css-property'
import { memorize } from '@slup/common'

import { handleInterpolation, REGISTERED } from './styles' 

/**
 * Removes special charters from names, and
 * makes all charters lowercase
 */
export const sanitizeName = memorize((name: string) =>
  name.replace(/[A-Z]|^ms/g, '-$&').toLowerCase()
)

/**
 * Sanitizes all css values and keys. 
 * Puts px on values that aren't unitless. 
 * Ignores undefined, null and boolean values.
 * 
 * @param key key of the CSS property
 * @param value value of the property
 */
export const sanitizeStyle = (key: string, value: any) => {
  /** Exclude values that aren't defined or are booleans */
  if (value === undefined || value == null || typeof value == 'boolean') {
    return ''
  }

  /** Adds `px` where needed */
  if (!isUnitless(key) && !isNaN(value) && value !== 0) {
    return value + 'px'
  }

  /** Returns the value if there's no processing required */
  return value
}


const cache = new WeakMap()

export function sanitizeObject(obj: Object | TemplateStringsArray): string {
  if(cache.has(obj)) return cache.get(obj)

  const strings: Array<string> = []

  /** Treat an array as a TemplateStringArray */
  if(obj instanceof Array) {

    /** Add a string for each interpolation */
    obj.forEach(interp =>
      strings.push(handleInterpolation.call(this, interp, false))
    )

  } else {

    Object.keys(obj).forEach(function(key: string){
      if(typeof obj[key] == 'object') {
        /** 
         * If the value of a key is an object(array) we 
         * take it as an interpolation and process it
         */
        strings.push(
          `${key}{${handleInterpolation.call(this, obj[key], false)}}`
        )
      } else {
        /** If the value is a string we check if it's stored */
        if(REGISTERED[obj[key]]) {

          /** If it is, then we don't need to process it */
          strings.push(`${key}{${REGISTERED[obj[key]]}}`)

        } else {

          /** Otherwhise we'll process it and save it. */
          strings.push(`${sanitizeName(key)}:${sanitizeStyle(
            key, /** The key  */
            obj[key] /** The value */
          )};`)
        }
      }
    }, this)

    cache.set(obj, strings.join(''))

    return strings.join('')

  }

  return strings.join('')
}

/**
 * Checks if the last charter in a string is a dot(.)
 * 
 * @param string The string to be checked
 */
export const isLastCharDot = (string: string): Boolean =>
  string.charCodeAt(string.length - 1) === 46 // .
