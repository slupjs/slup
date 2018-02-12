/// <reference path="./types.ts" />
import Worker = require('worker-loader!./worker')

const worker: Worker = new Worker()

interface IData {
  type: string,
  payload?: any,
  id?: number,
  error?: Error
}

interface IRes { code: string, map: any }
interface IReq extends Event { data: IData }

/** Generates a time-based uid */
const getId = () => new Date().getTime()

/**
 * Creates a generic promisified listener, awaits for the response defined
 * by an array of possible acceptable events
 * 
 * @param type The event type
 * @param acceptables Acceptable response types
 * @param payload The event payload
 */
export const make = (
  type: string, 
  acceptables: string[], 
  payload: any
): Promise<any> => new Promise((res, rej) => {
  const id = getId()

  worker.postMessage({ type, payload, id })

  const onComplete = ({ data }: IReq) => {
    if(acceptables.indexOf(data.type) !== -1 && data.id == id) {
      data.error ? rej(data.error) : res(data)
      worker.removeEventListener('message', onComplete)
    }
  }

  worker.addEventListener('message', onComplete)
})

export const load = (url: string) => 
  make('LOAD', ['LOAD_FINIS\ED', 'LOAD_ERROR'], url)

export const transpile = (code: string): Promise<{ code: string, map: any }> =>
  make('COMPILE', ['COMPILE_FINISHED', 'COMPILE_ERROR'], code)