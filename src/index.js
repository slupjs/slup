import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '../packages/Ripple/src/index'

class Tester extends Component {
  render() {
    return(
      <div style={{ position: 'relative', height: 200, width: 400 }}>
        <Ripple />
      </div>
    )
  }
}

render(<Tester />, document.getElementById('root'))
