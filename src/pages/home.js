import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { Link } from 'inferno-router'
import { Grid, Col } from '@slup/grid'
import { Logo } from '../components/logo'

const LogoContainer = styled.div`
  height: 100%;
`

const CleanLink = styled(Link) `
  text-decoration: none;
`

export class Home extends Component {
  handleClick() {
    console.log('a')
  }

  render() {
    return (
      <div>
        <Grid>
          <Col sm hide_md><div style={{margin: 8, background: '#f4f4f4', height: 32}} /></Col>
          <Col sm><div style={{margin: 8, background: '#f4f4f4', height: 32}} /></Col>
        </Grid>
      </div>
    )
  }
}
