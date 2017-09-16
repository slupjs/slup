import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { Link } from 'inferno-router'
import { Tabs, Tab } from '@slup/tabs'
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
    'item one'
  ]

  state = { selected: 0 }

  handleClick(selected) {
    this.setState({ selected })
  }

  render() {
    return(
      <LogoContainer>
        <Tabs
          scrollable
          primary
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
        </Tabs>
      </LogoContainer>
    )
  }
}
