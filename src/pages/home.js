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
  tabs = [
    'item one',
    'item two',
    'item three'
  ]

  state = { selected: 0 }

  handleClick(selected) {
    this.setState({ selected })
  }

  render() {
    return(
      <LogoContainer>
        <TabContainer
          primary
          center 
          selected={this.state.selected}>
          {this.tabs.map((item, i) => {
            return(
              <Tab
                onClick={() => this.handleClick(i)}
                selected={this.state.selected == i}
              >
                {item}
              </Tab>
            )
          })}
        </TabContainer>
      </LogoContainer>
    )
  }
}
