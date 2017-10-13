import Inferno, { render } from 'inferno'

import { styled, ThemeProvider, injectGlobal, css, darkTheme } from '@slup/theming'

let B = styled('div')`
  transition: displat 1s linear;
`

let A = styled('div')`
  color: white;
`

A = A.withComponent('span')

const Test = () =>
  <div>
    <A>test</A>
    <B>
      <div>
        bau 
        <test />
      </div>
    </B>
  </div>

injectGlobal`
  body { background: red }
`

console.log(css`
  color: white;
  position: absolute;
`)

render(<Test />, document.getElementById('root'))
