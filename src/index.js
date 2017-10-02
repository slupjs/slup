import Inferno, { render } from 'inferno'
import Component from 'inferno-component'
import { Router, Route, IndexRoute, match, doAllAsyncBefore } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ThemeProvider, white, black, teal } from '@slup/theming'
import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'
import { ProgressBar } from './components/progress'

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

const Theme = {
  background: teal[500],
  text: white,
  primary: teal[500],
  secondary: teal[300]
}

const App = ({ children, progress }) => {
  console.log(progress)
  return( 
  <Container>
    <ProgressBar progress={progress} />
    <NavBar history={History} />
    <Content>{children}</Content>
  </Container>
  )
}

class Routes extends Component {
  state = { progrss: 10 }

  render() {
    const self = this

    return(
      <ThemeProvider theme={Theme}>
        <Router history={History} asyncBefore={url => {
          //self.setState({ pecentage: 90 })

          //console.log(<Routes />, typeof url)

          return doAllAsyncBefore(match(new Routes().render(), url))
          }}>
          <Route component={() => <App progress={this.state.progrss} />}>
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
  }
}

render(<Routes />, document.getElementById('root'))

