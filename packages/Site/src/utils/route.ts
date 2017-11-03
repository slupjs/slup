declare const System: any

export type CallBack = (err: Error, element: any) => void

/**
 * Loads routes modules asyncronously
 * 
 * @param name Name of the page
 */
export const load = name => async (none: any, callback: CallBack) => {
  const module = await System.import(`../pages/${name.toLowerCase()}`)

  callback(null, module.default)
}