import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'

import { Link } from 'inferno-router'
import { RaisedButton } from '@slup/buttons'
import { Logo } from '../components/logo'

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
      <LogoContainer>
        {Logo}
        <RaisedButton onClick={this.handleClick}>Get started !</RaisedButton>
      </LogoContainer>
    )
  }
}