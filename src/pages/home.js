import Inferno from 'inferno'
import Component from 'inferno-component'
import styled from 'styled-components'
import { bind, debounce } from 'decko'

import { RaisedButton } from '@slup/buttons'
import { Slider } from '@slup/slider'
import { Logo } from '../components/logo'

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export class Home extends Component {
  @bind
  @debounce(300)
  handleClick() {
    this.context.router.push('/components/buttons')
  }

  render() {
    return (
      <LogoContainer>
        {Logo}
        <RaisedButton onClick={this.handleClick} primary>Get started</RaisedButton>
        <Slider steps={4} />
      </LogoContainer>
    )
  }
}
