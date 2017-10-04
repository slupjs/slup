import Inferno, { render } from 'inferno'
import Component from 'inferno-component'
import { Router, Route, IndexRoute, match, doAllAsyncBefore } from 'inferno-router'
import createBrowserHistory from 'history/createBrowserHistory'

import { ThemeProvider, white, black, teal, purple } from '@slup/theming'
import { NavBar } from './components/navbar'
import { Container, Content } from './components/container'
import { ProgressBar } from './components/progress'

import { resolve } from './utils/routes'
import { pages } from './_pages'

const History   = createBrowserHistory()
let asyncBefore = url => doAllAsyncBefore(match(routes, url))

const Theme = {
  background: teal[500],
  text: white,
  primary: purple[500],
  secondary: purple[300]
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

export const routes = (
  <ThemeProvider theme={Theme}>
    <Router history={History} asyncBefore={url => asyncBefore(url)}>
      <Route component={App}>
        <IndexRoute getComponent={resolve} />

        ${pages.map(name =>
          <Route
            path={`/components/${name}`}
            getComponent={resolve}
          />
        )}

        <Route path='*' getComponent={resolve} />
      </Route>
    </Router>
  </ThemeProvider>
)

render(routes, document.getElementById('root'))

