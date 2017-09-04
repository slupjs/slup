import Inferno          from 'inferno'
import Component        from 'inferno-component'
import { bind }         from 'decko'

import { Col, Grid }    from '@slup/grid'
import { Navbar }       from '@slup/navbar'
import { Sidenav }      from '@slup/sidenav'
import { Menu, GitHub } from './icons'

import { generate }     from '../utils/title'

export class NavBar extends Component {
  state = { opened: false }

  @bind
  handleOpen() {
    this.setState({ opened: true })
  }

  @bind
  handleClose() {
    this.setState({ opened: false }) 
  }

  render() {
    const { opened }   = this.state
    const { pathname } = this.props.history.location
    const name         = generate(pathname)
    
    return(
      <div>
        <Navbar background='#03A9F4'>
          <Col sm={12} offset_lg={320}>
            <Grid space_between middle>
              <Col>
                <div style={{ cursor: 'pointer' }} onClick={this.handleOpen}>
                  <Menu style={{ marginRight: 16 }} />
                  {name}
                </div>
              </Col>
              <Col>
                <GitHub style={{ marginLeft: 'auto' }} />
              </Col>
            </Grid>
          </Col>
        </Navbar>
        <Sidenav
          responsive
          opened={opened}
          onClose={this.handleClose}
        >
          
        </Sidenav>
      </div>
    )
  }
}