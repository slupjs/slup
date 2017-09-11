import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { Link } from 'inferno-router'
import { TabContainer, Tab } from '@slup/tabs'
import { Logo } from '../components/logo'

const LogoContainer = styled.div`
  width: 100%;
  height: 100%;
`

const CleanLink = styled(Link)`
  text-decoration: none;
`

export class Home extends Component {
  render() {
    return(
      <LogoContainer>
        <TabContainer primary center>
          <Tab>Item one</Tab>
          <Tab>Item two</Tab>
          <Tab>Item three</Tab>
        </TabContainer>
      </LogoContainer>
    )
  }
}
