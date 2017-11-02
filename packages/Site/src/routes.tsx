import { Route, IndexRoute } from 'inferno-router'

import Home from './pages/home'
import NotFound from './pages/404'
import { App } from './components/app'

/** Load fronts and global styles */
import './globals'


export const routes = (
  <Route component={App}>
    <IndexRoute component={Home} />
    <Route path='*' component={NotFound} />
  </Route>
)