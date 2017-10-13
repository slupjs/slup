const cache = {}

export const memoize = (fn: Function) => arg => {
  if (cache[arg] === undefined) cache[arg] = fn(arg)
  return cache[arg]
}