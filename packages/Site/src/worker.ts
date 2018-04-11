import * as InfernoPl from 'babel-plugin-inferno'
const ctx: Worker = self as any

interface IData {
  type: string
  payload?: any
  id?: number
}

const cache = []

ctx.onmessage = ({ data }: { data: IData }) => {
  //console.log('Received on the worker', data)

  switch(data.type) {
    case 'LOAD':
      if(!ctx['Babel']) {
        (ctx as any).importScripts(data.payload)
      }

      ctx.postMessage({ type: 'LOAD_FINISHED', id: data.id })
    break

    case 'COMPILE':
      let code

      if(cache[data.payload]) {
        code = cache[data.payload]
      } else {
        const { Babel } = ctx as any
        
        try {
          code = Babel.transform(data.payload, {
            presets: ['typescript'],
            plugins: [
              [InfernoPl, { imports: true }],
              'transform-modules-commonjs'
            ]
          }).code

          cache[data.payload] = code

          ctx.postMessage({ type: 'COMPILE_FINISHED', id: data.id, code })
        } catch(err) {
          ctx.postMessage({ 
            type: 'COMPILE_ERROR', 
            error: err.stack.split('at ')[0], // Remove at ...
            id: data.id, 
            code: null 
          })
        }
      }
    break
  }
}