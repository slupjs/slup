import Inferno from 'inferno'
import { Route, IndexRoute } from 'inferno-router'
import { ThemeProvider, darkTheme } from '@slup/theming'

import Home from './pages/home'
import { Navbar } from '@slup/navbar'
import { Container, Content } from './components/container'

/** Load fronts and global styles */
import './globals'

const App = ({ children }) => 
  <ThemeProvider theme={darkTheme}>
    <Container>
      <Navbar>nav</Navbar>
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