import { linkEvent } from 'inferno'

import { ContainedButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import {
  Container,
  CenterContainer,
  Headline
} from '../components/container'

/** Redirect helper */
const redirect = history =>
  setTimeout(() => history.push('/components/buttons'), 350)

export default (props: Object, { router }) =>
  <Container>
    <CenterContainer>
      <Logo />

      <Headline headline>
        Lighting-fast, highly customizable and flexible <a href='https://infernojs.org/'>Inferno</a> components<br />
        that strictly follow <a href='https://material.io/guidelines/'>Material Design</a> guidelines
      </Headline>

      <ContainedButton
        onClick={linkEvent(router.history, redirect)}
        secondary
      >
        Get started
      </ContainedButton>
    </CenterContainer>
  </Container>