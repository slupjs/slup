/** Load fronts and global styles */
import './globals'

import { BLUE, PINK, ThemeProvider, WHITE } from '@slup/theming'
import { Container, Content } from './components/container'
import { Route, Router } from 'inferno-router'

import { App }  from './components/app'
import { Demo } from './components/demo'
import Home     from './pages/home'
import NotFound from './pages/404'
import { URLs } from './pages'

export const THEME = {
  text: WHITE,
  background: '#303030',
  primary: BLUE[500],
  secondary: PINK[500],
  dark: true
}

export const routes = (
  <ThemeProvider theme={THEME}>
    <Container>
      <App />

      {URLs
        .slice()
        .filter(i => i.url.includes('components'))
        .map(item => 
          <Route computedMatch path={item.url} component={() => <Demo module={item.title} />} />
        )
      }

      <Route exact path='/' component={Home} />

      <Route path='*' component={NotFound} />
    </Container>
  </ThemeProvider>
)