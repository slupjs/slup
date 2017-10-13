import Inferno, { render } from 'inferno'

import T, { ThemeProvider, styled, css, injectGlobal } from '@slup/theming'

console.log(T)

let B = styled('div')`
  color: ${props => props.theme.test};
`

let A = styled('div')`
  color: white;
`

A = A.withComponent('span')

const Test = () =>
  <ThemeProvider theme={{ test: 'red' }}>
    <div>
      <A>test</A>
      <B>
        <div>
          bau 
          <test />
        </div>
      </B>
    </div>
  </ThemeProvider>

injectGlobal`
  body { background: red }
`

console.log(css`
  color: white;
  position: absolute;
`)

render(<Test />, document.getElementById('root'))
