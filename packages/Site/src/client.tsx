import { render } from 'inferno'
import { Router } from 'inferno-router'
import { routes } from './routes'
import { hydrate } from '@slup/theming'
import createBrowserHistory from 'history/createBrowserHistory'

const History = createBrowserHistory()

hydrate(window.__ids)

declare global {
  interface Window { 
    __ids: string[], 
    commons: any
  }
}

render(
  <Router history={History}>
    {routes}
  </Router>,
  document.querySelector('.app')
)

window.commons = {
  inferno: require('inferno'),
  'inferno-component': require('inferno-component')
}