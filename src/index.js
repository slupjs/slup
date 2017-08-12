import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '../packages/Ripple/src/index'
import { Slider } from '../packages/Slider/src/index'

class Tester extends Component {
  state = {
    value: 0,
    total: 100
  }

  handleChange(value) {
    this.setState({ value })
  }

  render() {
    const { value, total } = this.state

    return(
      <section>

        {/* Ripple demo */}
        <div style={{
          position: 'relative',
          background: 'blue',
          zIndex: 100,
          height: 200,
          width: 500 }}
        >
          <Ripple />
        </div>

        {/* Slider demo */}
        <div style={{ margin: 8, padding: 16 }}>
          <Slider
            value={value}
            max={total}
            onChange={this.handleChange.bind(this)}
          />
        </div>

      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
