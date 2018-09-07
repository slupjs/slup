<h1 align='center'>Slup - Controls</h1>

This package contains the Controls, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Checkboxes allow the selection of multiple options from a set.<br />
  Radio buttons allow the selection of a single option from a set.<br />
  Switches allow a selection to be turned on or off.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/controls
```

#### Usage [Checkbox]
This example includes the **checkbox**
```js
export class Test extends Component {
  state = {
    checked: false
  }

  handleChange() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Checkbox
        onChange={this.handleChange.bind(this)}
        checked={this.state.checked}
      />
    )
  }
}
```

#### Usage [Switch]
This example includes the **switch**
```js
export class Test extends Component {
  state = {
    checked: false
  }

  handleChange() {
    this.setState({ checked: !this.state.checked })
  }

  render() {
    return (
      <Switch
        onChange={this.handleChange.bind(this)}
        checked={this.state.checked}
      />
    )
  }
}
```

#### Usage [Radio]
This example includes the **radio**
```js
export class Test extends Component {
  state = {
    checked: 0
  }

  handleChange(value, i) {
    this.setState({ checked: i })
  }

  render() {
    return(
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {['React', 'Inferno', 'Preact'].map((value, i) =>
          <Radio
            onChange={() => this.handleChange.call(this, value, i)}
            checked={this.state.checked === i}
          />
        )}
      </div>
    )
  }
}
```


## Available properties
| Props                       |    Type       |    Default    | Documentation                           |
|-----------------------------|:-------------:|:-------------:|---------------------------------------: |
| onChange                    |  function     |  none         | [Link](#property-onchange)              |
| checked                     |  boolean      |  false        | [Link](#property-checked)               |
| disabled                    |  boolean      |  false        | [Link](#property-disabled)              |
| leftLabel / rightLabel      |  string       |  undefined    | [Link](#property-leftlabel--rightlabel) |  

#### Property: 'onChange'
This property handles the activation of the controls.
```js
<Checkbox onChange={() => console.log('activated')} />
<Switch onChange={() => console.log('activated')} />
<Radio onChange={() => console.log('activated')} />
```

#### Property: 'checked'
This property handles the state of the controls.
```js
<Checkbox checked />
<Switch checked />
<Radio checked />
```

#### Property: 'disabled'
This property disables the controls.
```js
<Checkbox disabled />
<Switch disabled />
<Radio disabled />
```

#### Property: 'leftLabel / rightLabel'
These properties provides a left/right-sided `<label />`  that can display a given string.
Use `leftLabel` for a left-handed label, `rightLabel` for the same result on the right.

```js
<Checkbox leftLabel='Text' rightLabel='Text' />
<Switch leftLabel='Text' rightLabel='Text' />
<Radio leftLabel='Text' rightLabel='Text' />
```
