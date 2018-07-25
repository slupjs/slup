import { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { ContainedButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import { Card } from '@slup/card'
import {
  Container,
  CenterContainer,
  Headline
} from '../components/container'

/** Redirect helper */
const redirect = history =>
  setTimeout(any => history.push('/components/buttons'), 350)

export default (props: Object, { router }) =>
  <Container>
    <CenterContainer>
      <Card
        style={{ height: '300px', width: '400px' }}
      />
    </CenterContainer>
  </Container>