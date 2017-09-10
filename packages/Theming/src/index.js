import { white, black, blue, indigo } from './colors'

export const lightTheme = {
  text: black,
  background: '#fafafa',
  primary: blue[500],
  secondary: indigo[500]
}

export const darkTheme = {
  text: white,
  background: '#303030',
  primary: blue[500],
  secondary: indigo[500]
}

export * from './colors'
export { ThemeProvider } from 'styled-components'
