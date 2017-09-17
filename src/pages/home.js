import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { Link } from 'inferno-router'
import { Tabs, Tab, Icon } from '@slup/tabs'
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
    {
      text: 'item one',
      icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    },
    {
      text: 'item two',
      icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    },
    {
      text: 'item three',
      icon: <svg width="24" height="24" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
    }
  ]

  state = { selected: 0 }

  handleClick(selected) {
    this.setState({ selected })
  }

  render() {
    return(
      <LogoContainer>
        <Tabs
          primary
          fit
          center
          selected={this.state.selected}>
          {this.tabs.map((item, i) => {
            return(
              <Tab
                onClick={() => this.handleClick(i)}
                selected={this.state.selected == i}
              >
                <Icon>{item.icon}</Icon>
                <span>{item.text}</span>
              </Tab>
            )
          })}
        </Tabs>
      </LogoContainer>
    )
  }
}
