import Inferno          from 'inferno'
import Component        from 'inferno-component'
import { Redirect, Link }     from 'inferno-router'
import { bind }         from 'decko'

import { Col, Grid }    from '@slup/grid'
import { Navbar }       from '@slup/navbar'
import { SideNav }      from './sidenav'
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

  render(props) {
    const { opened } = this.state
    const { pathname } = this.props.history.location
    const name         = generate(pathname)

    return(
      <nav>
        <Navbar primary>
          <Grid middle style={{overflow: 'hidden'}}>
            <Col sm={12}>
              <Grid middle space_between style={{overflow: 'hidden'}}>

                {/* Main title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>

                  <Menu
                    onClick={this.handleOpen}
                    style={{ marginRight: 32, cursor: 'pointer'}}
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

        <SideNav
          opened={opened}
          onClose={this.handleClose}
        />
      </nav>
    )
  }
}
