import Inferno          from 'inferno'
import Component        from 'inferno-component'
import { Redirect, Link }     from 'inferno-router'
import { bind }         from 'decko'

import { Col, Grid }    from '@slup/grid'
import { Navbar }       from '@slup/navbar'
import { Sidenav }      from '@slup/sidenav'
import { List, ListItem } from '@slup/lists'
import { Menu, GitHub } from './icons'

import { generate }     from '../utils/title'

export class NavBar extends Component {
  state = {
    opened: false,
    redirect: false,
    lists: { components: false }
  }

  @bind
  handleOpen() {
    this.setState({ opened: true })
  }

  @bind
  handleClose() {
    this.setState({ opened: false })
  }

  @bind
  toggleList(name) {
    const { lists } = this.state

    lists[name] = !lists[name]

    this.setState({ lists })
  }

  @bind
  redirect(path) {
    console.log('Redirecting to:', path)

    this.setState({ redirect: path })
  }

  render(props) {
    const {
      opened,
      lists,
      redirect
    } = this.state
    const { pathname } = this.props.history.location
    const name         = generate(pathname)

    return(
      <div>
       {redirect ? <Redirect to={redirect} /> : null}
        <Navbar primary style={{ boxShadow: 'none' }}>
          <Grid middle>
            <Col sm={12} offset_lg={320}>
              <Grid middle space_between>

                {/* Main title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>

                  <Col hide_lg hide_xl>
                    <Menu
                      onClick={this.handleOpen}
                      style={{ marginRight: 32, cursor: 'pointer'}}
                    />
                  </Col>

                  <h3 style={{ margin: 0, fontWeight: 'normal' }}>{name}</h3>

                </div>

                {/* Optional icons */}
                <div>
                  <GitHub />
                </div>
              </Grid>
            </Col>
          </Grid>
        </Navbar>

        <Sidenav
          responsive
          opened={opened}
          onClose={this.handleClose}
        >
          <List>
            <ListItem sublist visible={lists.components}>
              <ListItem onClick={e => this.toggleList('components')}>Components</ListItem>

              {/* List of components */}
              <List>
                <ListItem nested><Link to='/components/buttons'>Buttons</Link></ListItem>
                <ListItem onClick={e => this.redirect('/components/controls')} nested>Controls</ListItem>
                <ListItem onClick={e => this.redirect('/components/grid')} nested>Grid</ListItem>
                <ListItem onClick={e => this.redirect('/components/icons')} nested>Icons</ListItem>
                <ListItem onClick={e => this.redirect('/components/lists')} nested>Lists</ListItem>
                <ListItem onClick={e => this.redirect('/components/navbar')} nested>NavBar</ListItem>
                <ListItem onClick={e => this.redirect('/components/ripple')} nested>Ripple</ListItem>
                <ListItem onClick={e => this.redirect('/components/sidenav')} nested>SideNav</ListItem>
                <ListItem onClick={e => this.redirect('/components/sliders')} nested>Sliders</ListItem>
              </List>
            </ListItem>
          </List>
        </Sidenav>
      </div>
    )
  }
}
