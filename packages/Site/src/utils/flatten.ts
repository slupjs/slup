/**
 * Flattens a nested array into a single array
 */
export const flatten = (arr: any[]) =>
  arr.reduce((flat, toFlatten) =>
    flat.concat(Array.isArray(toFlatten) 
      ? flatten(toFlatten) 
      : toFlatten
    ), [])