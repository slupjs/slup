import { match } from 'inferno-router'
import { routes } from '../index'

const onLoad = callback => module => callback({}, module.default)

export const resolve = (a, callback) => {
  console.log(a, callback)

  console.log(match(routes, window.location.pathname))

  import('../pages/home')
    .then(onLoad(callback))
}