import Inferno, { render } from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ThemeProvider, darkTheme } from '@slup/theming'
import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'

import { AsyncHome, AsyncNotFound } from './utils/staticRoutes'
import { requireComponent } from './utils/componentRoutes'

const History = createBrowserHistory()

const pages = [
  'buttons',
  'controls',
  'grid',
  'lists',
  'navbar',
  'ripple',
  'sidenav',
  'slider'
]

const App = ({ children }) => 
  <Container>
    <NavBar history={History} />
    <Content>{children}</Content>
  </Container>

const routes = (
  <ThemeProvider theme={darkTheme}>
    <Router history={History}>
      <Route component={App}>

        <IndexRoute getComponent={AsyncHome} />
        ${pages.map(name => 
          <Route
            path={`/components/${name}`}
            getComponent={(n, cb) => requireComponent(name, cb)}
          />
        )}
        <Route path='*' getComponent={AsyncNotFound} />
      </Route>
    </Router>
  </ThemeProvider>
)

render(routes, document.getElementById('root'))
