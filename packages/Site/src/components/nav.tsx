import { Component, linkEvent } from 'inferno'
import { generateTitle } from '../utils/title'
import { Header } from './header'
import { Navigation } from './navigation'
import { Pages } from '../pages'


export class Nav extends Component<null, { open: boolean }> {
  public state = { open: false }

  /**
   * Toggles the sidenav
   *
   * @param this The local class
   */
  private toggleNav({ self, value }: { self: any, value: boolean }) {
    self.setState({ open: value })
  }

  public render(none, { open }, { router }) {
    return(
      <div>
        {/** The page's header */}
        <Header
          onOpen={linkEvent({ value: true, self: this }, this.toggleNav)}
          style={
            generateTitle(router.route.location) === 'Home' &&
            { background: 'transparent', boxShadow: 'none' }
          }
        />

        {/** Sidenav */}
        <Navigation
          items={Pages}
          opened={open}
          onClose={linkEvent({ value: false, self: this }, this.toggleNav)}
          onRedirect={linkEvent({ value: false, self: this }, this.toggleNav)}
        />
      </div>
    )
  }
}
