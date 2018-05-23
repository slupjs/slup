import styled, { rgba, lightTheme } from '@slup/theming'
import { styledMap } from '@slup/common'

const fontSize = styledMap({
  display4: 112,
  display3: 56,
  display2: 45,
  display1: 34,
  headline: 24,
  title: 20,
  subheading: 15,
  body2: 13,
  body1: 13,
  caption: 12,
  button: 14,
  default: 14
})

const fontWeight = styledMap({
  display4: 300,
  display3: 400,
  display2: 400,
  display1: 400,
  headline: 400,
  title: 500,
  subheading: 400,
  body2: 500,
  body1: 400,
  caption: 400,
  button: 500,
  default: 400
})

const colors = styledMap({
  display4:   props => rgba(props.theme.text || lightTheme.text, .54),
  display3:   props => rgba(props.theme.text || lightTheme.text, .54),
  display2:   props => rgba(props.theme.text || lightTheme.text, .54),
  display1:   props => rgba(props.theme.text || lightTheme.text, .54),
  headline:   props => rgba(props.theme.text || lightTheme.text, .87),
  title:      props => rgba(props.theme.text || lightTheme.text, .87),
  subheading: props => rgba(props.theme.text || lightTheme.text, .87),
  body2:      props => rgba(props.theme.text || lightTheme.text, .87),
  body1:      props => rgba(props.theme.text || lightTheme.text, .87),
  caption:    props => rgba(props.theme.text || lightTheme.text, .54),
  button:     props => rgba(props.theme.text || lightTheme.text, .87),
  default:    props => props.theme.text || lightTheme.text
})

const smallFontSize = styledMap({
  display4: 112,
  display3: 56,
  display2: 45,
  display1: 34,
  headline: 24,
  title: 20,
  subheading: 16,
  body2: 14,
  body1: 14,
  caption: 12,
  button: 14,
  default: 14
})

export const Typography = styled.p`
  margin: 0;
  text-transform: ${props => props.button ? 'uppercase' : 'initial'};

  /* Default font size */
  font-size: ${fontSize}px;

  /* Default font weight */
  font-weight: ${fontWeight};

  /* Default colors */
  color: ${colors};


  /* Media queries for font size */
  @media only screen and (max-width: 600px) {
    font-size: ${smallFontSize}px;
  }
`
