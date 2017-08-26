import Inferno, { render } from 'inferno'
import Component from 'inferno-component'

import { Ripple } from '@slup/ripple'
import { Slider } from '@slup/slider'
import { Navbar } from '@slup/navbar'
import {
  FlatButton,
  RaisedButton,
  Fab
} from '@slup/buttons'

import { Radio,
  Checkbox,
  Switch
} from '@slup/controls'


class Tester extends Component {
  state = {
    value: 0,
    total: 5000,
    checked: false
  }

  handleChange(value) {
    this.setState({ value })
  }

  handleControls() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    const {
      value,
      total,
      checked
    } = this.state

    return(
      <section>

        {/* Navbar demo */}
        <Navbar reveal={true} background='teal'>text</Navbar>

        <div style={{height: 50}} />
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

        <div style={{height: 50}} />

        <form>
          <Radio
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}}
          />
          <Checkbox
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}} />

          <Switch
            onChange={this.handleControls.bind(this)}
            checked={checked}
            style={{margin: 32}} />
        </form>

        <div style={{height: 50}} />

      </section>
    )
  }
}

render(<Tester />, document.getElementById('root'))
