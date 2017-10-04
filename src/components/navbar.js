import Inferno          from 'inferno'
import Component        from 'inferno-component'
import { Redirect, Link }     from 'inferno-router'
import { bind }         from 'decko'

import { Col, Grid }  from '@slup/grid'
import { Navbar }     from '@slup/navbar'
import { IconButton } from '@slup/buttons'
import Menu           from '@slup/icons/navigation/menu'

import { SideNav }    from './sidenav'
import { GitHub }     from './icons'

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
        <Navbar style='box-shadow: none'>
          <Grid middle style={{overflow: 'hidden'}}>
            <Col sm={12}>
              <Grid middle space_between style={{overflow: 'hidden'}}>

                {/* Main title */}
                <div style={{ display: 'flex', alignItems: 'center' }}>

                  <IconButton onClick={this.handleOpen} style='margin-right: 16px'>
                    <Menu />
                  </IconButton>

                  <h3 style={{ margin: 0, fontWeight: 'normal' }}>{name}</h3>

                </div>

                {/* Optional icons */}
                <IconButton>
                  <GitHub />
                </IconButton>
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
