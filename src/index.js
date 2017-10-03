import Inferno, { render } from 'inferno'
import Component from 'inferno-component'
import { Router, Route, IndexRoute, match, doAllAsyncBefore } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ThemeProvider, white, black, teal } from '@slup/theming'
import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'
import { ProgressBar } from './components/progress'

import { requireComponent } from './utils/componentRoutes'

const History     = createBrowserHistory()
let  asyncBefore = url => doAllAsyncBefore(match(routes, url))

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

const Theme = {
  background: teal[500],
  text: white,
  primary: teal[500],
  secondary: teal[300]
}

class App extends Component {
  state = { progress: 0, display: false }

  componentDidMount() {
    asyncBefore = url => {
      this.setState({ progress: 30, display: true })

      return doAllAsyncBefore(match(routes, url))
    }

    window.endReq = () => {
      this.setState({ progress: 100 })

      setTimeout(() => this.setState({ display: false }), 400)
    }

  }

  render({ children }) {
    return( 
      <Container>
        <ProgressBar {...this.state} />
        <NavBar history={History} />
        <Content>{children}</Content>
      </Container>
    )
  }
}

const routes = (
  <ThemeProvider theme={Theme}>
    <Router history={History} asyncBefore={url => asyncBefore(url)}>
      <Route component={App}>
        <IndexRoute getComponent={(n, cb) => requireComponent('home', cb)} />

        ${pages.map(name => 
          <Route
            path={`/components/${name}`}
            getComponent={(n, cb) => requireComponent(name, cb)}
          />
        )}

        <Route path='*' getComponent={(n, cb) => requireComponent('404', cb)} />
      </Route>
    </Router>
  </ThemeProvider>
)

render(routes, document.getElementById('root'))

