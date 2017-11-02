import { linkEvent } from 'inferno'
import Component from 'inferno-component'
import { ThemeProvider, WHITE, DEEP_PURPLE, BLUE } from '@slup/theming'

import { Header } from './header'
import { Navigation } from './navigation'
import { Container, Content } from './container'
import { Pages } from '../pages'

export const THEME = {
  text: WHITE,
  primary: WHITE,
  secondary: BLUE[500],
  background: DEEP_PURPLE[500]
}


export class App extends Component<null, { open: boolean }> {
  public state = { open: false }

  /**
   * Toggles the sidenav
   *
   * @param this The local class
   */
  private toggleNav({ self, value }: { self: any, value: boolean }) {
    self.setState({ open: value })
  }

  public render({ children }) {
    return(
      <ThemeProvider theme={THEME}>
        <Container>

          {/** The page's header */}
          <Header
            onOpen={linkEvent({ value: true, self: this }, this.toggleNav)}
          />

          {/** Sidenav */}
          <Navigation
            items={Pages}
            opened={this.state.open}
            onClose={linkEvent({ value: false, self: this }, this.toggleNav)}
          />

          <Content>{children}</Content>

        </Container>
      </ThemeProvider>
    )
  }
}
