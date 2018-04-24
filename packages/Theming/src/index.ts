import { styled } from './styles/styled'
import { HTML_TAGS } from './elements'
import { WHITE, BLACK, BLUE, INDIGO } from './colors'

/** Style helpers */
export * from './styles/provider'
export * from './styles/styled'
export * from './styles/styles'
export * from './styles/server'

/** Color manipulation */
export * from './manipulation/rgba'
export * from './manipulation/shade'
export * from './manipulation/hsl'
export * from './manipulation/hex'

/** Constants set */
export * from './colors'
export * from './elements'

export const lightTheme = {
  text: BLACK,
  background: '#FAFAFA',
  primary: BLUE[500],
  secondary: INDIGO[500],
  dark: false
}

export const darkTheme = {
  text: WHITE,
  background: '#303030',
  primary: BLUE[500],
  secondary: INDIGO[500],
  dark: true
}

const generateExports = () => {
  const _styled = (element) => styled(element)

  HTML_TAGS.forEach(tag => _styled[tag] = styled(tag))

  return _styled
}

export default generateExports()