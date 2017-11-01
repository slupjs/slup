import { ThemeProvider, WHITE, DEEP_PURPLE } from '@slup/theming'

import { Header } from './header'
import { Container, Content } from './container'

export const THEME = {
  text: WHITE,
  primary: WHITE,
  secondary: WHITE,
  background: DEEP_PURPLE[500]
}


export const App = ({ children }) =>
  <ThemeProvider theme={THEME}>
    <Container>
      <Header />
      <Content>{children}</Content>
    </Container>
  </ThemeProvider>
