import Inferno          from 'inferno'
import Component        from 'inferno-component'
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

  render() {
    const { opened, lists } = this.state
    const { pathname }      = this.props.history.location
    const name              = generate(pathname)

    return(
      <div>
        <Navbar background='#03A9F4'>
          <Grid middle>
            <Col sm={12} offset_lg={320}>
              <Grid middle space_between>

                {/* Main title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>

                  <Menu
                    onClick={this.handleOpen} 
                    style={{
                      marginRight: 32,
                      display: document.body.offsetWidth > 960
                        ? 'none'
                        : 'block',
                      cursor: opened || document.body.offsetWidth > 960
                        ? 'default'
                        : 'pointer'
                    }} 
                  />

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
          style={{ background: '#424242' }}
        >
          <List>
            <ListItem sublist visible={lists.components}>
              <ListItem onClick={e => this.toggleList('components')}>Components</ListItem>

              {/* List of components */}
              <List>
                <ListItem nested>Buttons</ListItem>
                <ListItem nested>Controls</ListItem>
                <ListItem nested>Grid</ListItem>
                <ListItem nested>Icons</ListItem>
                <ListItem nested>Lists</ListItem>
                <ListItem nested>NavBar</ListItem>
                <ListItem nested>Ripple</ListItem>
                <ListItem nested>SideNav</ListItem>
                <ListItem nested>Sliders</ListItem>
              </List>
            </ListItem>
          </List>
        </Sidenav>
      </div>
    )
  }
}
