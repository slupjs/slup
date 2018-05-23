import { Route, Router } from 'inferno-router'
import { ThemeProvider, WHITE, BLUE, PINK } from '@slup/theming'

import { URLs } from './pages'
import NotFound from './pages/404'
import { Demo } from './components/demo'
import { Container, Content } from './components/container'
import { App }  from './components/app'
import Home     from './pages/home'

/** Load fronts and global styles */
import './globals'

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

      <Route exact path='/' component={Home} />

      {URLs
        .slice()
        .filter(i => i.url.includes('components'))
        .map(item => {
          console.log('registering route', item);

          return <Route exact path={item.url} component={() => <Demo module={item.title} />} />
        })
      }

      <Route path='404' component={NotFound} />
    </Container>
  </ThemeProvider>
)