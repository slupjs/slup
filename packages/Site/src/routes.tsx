import { Route, IndexRoute } from 'inferno-router'

import { URLs } from './pages'
import NotFound from './pages/404'
import { App }  from './components/app'
import Home     from './pages/home'

/** Load fronts and global styles */
import './globals'

export const load = name => async ({ props }, callback) => {
  const module = await import('./components/demo')

  callback(null, () => <module.Demo {...props} module={name} />)
}

export const routes = (
  <Route component={App}>

    <IndexRoute component={Home} />

    {URLs.slice().map(item =>
      <Route path={item.url} getComponent={load(item.title)} />
    )}

    <Route path='*' component={NotFound} />

  </Route>
)