import { Route, IndexRoute } from 'inferno-router'

import Home from './pages/home'
import { App } from './components/app'

/** Load fronts and global styles */
import './globals'


export const routes = (
  <Route component={App}>
    <IndexRoute component={Home} />
    <Route path='*' component={() =><a>404</a>} />
  </Route>
)