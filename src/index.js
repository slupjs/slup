import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import { Slider } from '@slup/slider'
import {
  FlatButton,
  RaisedButton,
  Fab
} from '@slup/buttons'

class Tester extends Component {
  state = {
    value: 0,
    total: 5000
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

        <div style={{height: 50}} />

        {/* Slider demo */}
        <div style={{ margin: 8, padding: 16 }}>
          <Slider
            value={value}
            max={total}
            onChange={this.handleChange.bind(this)}
          />
          <div style={{height: 50}} />
          <Slider
            value={value}
            max={total}
            discrete={true}
            onChange={this.handleChange.bind(this)}
          />
        </div>

        <div style={{height: 50}} />

        {/* Buttons demo */}

        <FlatButton
          color='black'
          rippleOptions={{ background: 'rgba(0, 0, 0, .5)' }}
        >
          Test
        </FlatButton>
        <RaisedButton background='teal'>
          Text
        </RaisedButton>
        <Fab backgroundColor='rgb(0, 150, 136)' />
      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
