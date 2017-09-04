import Inferno, { render } from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'

import { Home } from './pages/home'
import { NotFound } from './pages/404'
import { Buttons, Components, ComponentPage } from './pages/buttons'

const History = createBrowserHistory()

const routes = ( 
  <Container>
    <NavBar history={ History } />
    <Content>
      <Router history={ History } >
        <IndexRoute component={ Home } />
        <Route path="/components" component={ Components } />
        <Route path="/components/:page" component={ ComponentPage } />
        <Route path="*" component={ NotFound } />
      </Router>
    </Content>
  </Container>
)

render(routes, document.getElementById('root'))