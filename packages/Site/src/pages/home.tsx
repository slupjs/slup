import Inferno, { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import { CenterContainer } from '../components/container'

/** Redirect helper */
const redirect = router => 
  setTimeout(any => router.push('/components/buttons'), 350)

export default (props: Object, context: { router: any }) =>
  <CenterContainer>
    <Logo style={{ marginTop: -100 }} />

    <FlatButton 
      onClick={linkEvent(context.router, redirect)} 
      primary
    >
      Get started
    </FlatButton>

  </CenterContainer>
