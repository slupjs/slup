import Inferno, { linkEvent } from 'inferno'
import styled from '@slup/theming'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import { CenterContainer } from '../components/container'
import { Ed } from '../components/editor'

/** Redirect helper */
const redirect = router =>
  setTimeout(any => router.push('/components/buttons'), 350)

export default (props: Object, context: { router: any }) =>
  <Ed />