import Inferno, { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { FlatButton } from '../../../Buttons/src/index'
import { Logo } from '../components/icons'
import {
  Container,
  CenterContainer,
  Headline
} from '../components/container'

/** Redirect helper */
const redirect = router =>
  setTimeout(any => router.push('/components/buttons'), 350)
  
export default (props: Object, context: { router: any }) =>
  <Container>
    <CenterContainer>
      <Logo />

      <Headline headline>
        Lighting-fast, highly customizable and flexible <a href='https://infernojs.org/'>Inferno</a> components<br />
        that strictly follow <a href='https://material.io/guidelines/'>Material Design</a> guidelines
      </Headline>

      <FlatButton
        onClick={linkEvent(context.router, redirect)}
        secondary
      >
        Get started
      </FlatButton>

    </CenterContainer>
  </Container>