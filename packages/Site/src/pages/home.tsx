import Inferno, { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/icons'

const LogoContainer = styled.div`
  display: flex;
  flex: 1;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

/** Redirect helper */
const redirect = router => 
  setTimeout(any => router.push('/components/buttons'), 350)

export default (props: Object, context: { router: any }) =>
  <LogoContainer>
    <Logo style={{ marginTop: -100 }} />

    <FlatButton 
      onClick={linkEvent(context.router, redirect)} 
      primary
    >
      Get started
    </FlatButton>

  </LogoContainer>
