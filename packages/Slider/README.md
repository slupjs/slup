<h1 align='center'>Slup - Slider</h1>

This package contains the Slider, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Sliders are ideal components for adjusting settings that reflect intensity levels, such as volume, brightness, or color saturation.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/slider
```

#### Usage [Slider]
```js
import { Slider } from '@slup/slider'

export class Test extends Component {
  state = {
    focused: false,
    value: 0
  }

  onFocus() {
    this.setState({ focused: true })
  }

  onBlur() {
    this.setState({ focused: false })
  }

  onChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <Slider
        focused={this.state.focused}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
        value={this.state.value}
        max={100}
      />
    )
  }
}
```

#### Usage [DiscreteSlider]
```js
import { DiscreteSlider } from '@slup/slider'

export class Test extends Component {
  state = {
    focused: false,
    value: 0
  }

  onFocus() {
    this.setState({ focused: true })
  }

  onBlur() {
    this.setState({ focused: false })
  }

  onChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <DiscreteSlider
        focused={this.state.focused}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
        value={this.state.value}
        max={100}
      />
    )
  }
}
```

#### Usage [SteppedSlider]
```js
import { SteppedSlider } from '@slup/slider'

export class Test extends Component {
  state = {
    focused: false,
    value: 0
  }

  onFocus() {
    this.setState({ focused: true })
  }

  onBlur() {
    this.setState({ focused: false })
  }

  onChange(value) {
    this.setState({ value })
  }

  render() {
    return (
      <SteppedSlider
        focused={this.state.focused}
        onFocus={this.onFocus.bind(this)}
        onBlur={this.onBlur.bind(this)}
        onChange={this.onChange.bind(this)}
        value={this.state.value}
        max={100}
      />
    )
  }
}
```

## Available properties
| Props       |    Type       |    Default    | Documentation               |
|-------------|:-------------:|:-------------:|------:                      |
| focused     |  boolean      |  false        | [Link](#property-focused)   |
| onChange    |  function     |  none         | [Link](#property-onchange)  |
| value       |  number       |  0            | [Link](#property-value)     |
| max         |  number       |  0            | [Link](#property-max)       |
| disabled    |  boolean      |  false        | [Link](#property-disabled)  |

#### Property: 'focused'
This property sets the focus of the slider
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={100}
/>
```

#### Property: 'onChange'
This property handles the 'change' event of the slider
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={100}
/>
```

#### Property: 'value'
This property handles the changing value of the slider
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={100}
/>
```

#### Property: 'max'
This property takes the maximum value that the slider can have
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={100}
/>
```

#### Property: 'disabled'
This property disables the slider
```js
<Slider
  onChange={this.handleChange.bind(this)}
  value={this.state.value}
  max={100}
  disabled
/>
```
