import Inferno, { render } from 'inferno'
import { Router, Route, IndexRoute } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ThemeProvider, darkTheme } from '@slup/theming'
import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'

import { Home } from './pages/home'
import { NotFound } from './pages/404'
import { Buttons, Components, ComponentPage } from './pages/buttons'

const History = createBrowserHistory()

const Test = (props, stats, context) => {

  console.log(arguments)

  return <div />
}

const App = ({ children }) => 
  <Container>
    <NavBar history={History} />
    <Content>
      {children}
    </Content>
  </Container>

const routes = (
  <ThemeProvider theme={darkTheme}>
    <Router history={History}>
      <Route component={App}>
        <IndexRoute component={Home} />
        <Route path='*' component={NotFound} />
      </Route>
    </Router>
  </ThemeProvider>
)
console.log(routes)

window.r = routes

render(routes, document.getElementById('root'))
