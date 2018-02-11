import Inferno, { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import { CenterContainer } from '../components/container'
import { Demo } from '../components/demo'

/** Redirect helper */
const redirect = router =>
  setTimeout(any => router.push('/components/buttons'), 350)


import { load, transpile } from '../compiler'

(window as any).load = load;
(window as any).transpile = transpile

export default (props: Object, context: { router: any }) =>
  <Demo />