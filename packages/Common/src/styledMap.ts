export const styledMap = (...args) => (props) => {
  /** Put the styles in the object */
  const styles: any = args[args.length - 1]
  const styleKeys: string[] = Object.keys(styles)

  /** Check if the first parameter is a string */
  if (typeof args[0] === 'string') {
    /** If it is a string we get the value from it */
    const argValue: number = args[0]
    const value: number = props[argValue]

    /**
     * If the value of the string isn't empty
     * return the value from the declared object
     */
    if (styles[value]) return styles[value]
  } else {
    /**
     * If the first parameter isn't a string
     * filter the object to match the wanted prop
     */
    const getKeys: string[] = styleKeys.filter(key => props[key])

    /**
     * If a prop is declared return the matching key
     * or the last one if there are more
     */
    if (getKeys.length) return styles[getKeys.pop()]
  }

  /** If a props isn't declared return the 'default' value from the object */
  if (styles.hasOwnProperty('default')) {
    return styles.default
  }

  /**
   * If neither a prop is declared nor the object has the 'default' property
   * return the last item of the object
   */
  return styles[styleKeys.pop()]
}
