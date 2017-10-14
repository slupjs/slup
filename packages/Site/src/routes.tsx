import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'

import Home from './pages/home'
import { Container, Content } from './components/container'

import { ThemeProvider } from '@slup/theming'

const App = ({ children }) => 
  <ThemeProvider theme={{ background: 'red' }}>
    <Container>
      <div>nav</div>
      <Content>
        test spaced string
        {children}
      </Content>
    </Container>
  </ThemeProvider>

export const routes = (
  <Route component={App}>
    <IndexRoute component={Home} />
    <Route path='*' component={() =><a>404</a>} />
  </Route>
)