const cache = {}

/**
 * Stores a series of values that are returned from
 * the same function. Particularly useful when results are predictable
 * and often repetitive. Speed up things ⚡️
 * 
 * @param fn The function that generates the values
 */
export const memorize = (fn: Function) => arg => {
  /** 
   * If the value hasn't been stored yet, we save it
   */
  if (cache[arg] === undefined) cache[arg] = fn(arg)

  /** Return the stored value */
  return cache[arg]
}