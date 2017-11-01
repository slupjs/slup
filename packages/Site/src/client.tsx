import Inferno, { render } from 'inferno'
import { Router } from 'inferno-router'
import { routes } from './routes'
import { hydrate } from '@slup/theming'

declare global {
  interface Window { __ids: string[], t: any }
}

import createBrowserHistory from 'history/createBrowserHistory'

const History = createBrowserHistory()

hydrate(window.__ids)

render(
  <Router history={History}>
    {routes}
  </Router>,
  document.querySelector('.app')
)