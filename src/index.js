import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '../packages/Ripple/src/index'
import { Slider } from '../packages/Slider/src/index'

class Tester extends Component {
  render() {
    return(
      <section>

        {/* Ripple demo */}
        <div style={{ position: 'relative', height: 200, width: 500 }}>

          <Ripple />
        </div>

        {/* Slider demo */}
        <div style={{ margin: 8, padding: 16 }}>
          <Slider />
        </div>
      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
