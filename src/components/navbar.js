import Inferno            from 'inferno'
import Component          from 'inferno-component'
import { Link }           from 'inferno-router'
import { bind, debounce } from 'decko'

import { Col, Grid }  from '@slup/grid'
import { Navbar }     from '@slup/navbar'
import { Typography } from '@slup/typography'
import { IconButton } from '@slup/buttons'
import Menu           from '@slup/icons/navigation/menu'

import { SideNav }    from './sidenav'
import { GitHub }     from './icons'

import { generate }     from '../utils/title'

export class NavBar extends Component {
  state = { opened: false }
  title = generate(window.location)

  /** Handle component updates. Refresh the page's title */
  componentWillUpdate() {
    document.title = generate(window.location)
    this.title     = generate(window.location)
  }

  @debounce(300)
  handleLink() {
    window.open('//github.com/slupjs/slup', '_blank')
  }

  @bind
  handleOpen() {
    this.setState({ opened: true })
  }

  @bind
  handleClose() {
    this.setState({ opened: false })
  }

  render = () =>
    <nav>
      <Navbar style='box-shadow: none'>

        {/** Grid for positioning */}
        <Grid middle style={{ overflow: 'hidden' }}>
          <Col sm={12}>
            <Grid middle space_between style={{ overflow: 'hidden' }}>

              {/* Main title and menu button */}
              <div style={{ display: 'flex', alignItems: 'center' }}>

                <IconButton onClick={this.handleOpen} style='margin-right: 16px'>
                  <Menu />
                </IconButton>

                <Typography title>{this.title}</Typography>

              </div>

              {/* Optional icons */}
              <IconButton onClick={this.handleLink}>
                <GitHub />
              </IconButton>

            </Grid>
          </Col>
        </Grid>

      </Navbar>

      {/** Sidenav external component */}
      <SideNav {...this.state} onClose={this.handleClose} />
    </nav>

}
