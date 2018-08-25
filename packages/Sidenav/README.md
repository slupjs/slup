<h1 align='center'>Slup - Sidenav</h1>

This package contains the Sidenav, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  The nav drawer spans the height of the screen, with everything behind it visible but darkened by a scrim.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/sidenav
```

## Usage
```js
import { Sidenav } from '@slup/sidenav'

export class Test extends Component {
  state = { opened: false }

  handleClick() {
    this.setState({ opened: true })
  }

  handleClose() {
    this.setState({ opened: false })
  }

  render() {
    return (
      <div>
        {/* Simple button to trigger the sidenav */}
        <button onClick={this.handleClick.bind(this)}>Trigger</button>

        {/* The component itself */}
        <Sidenav
          opened={this.state.opened}
          onClose={this.handleClose.bind(this)}
        />
      </div>
    )
  }
}
```

## Available properties
| Props          |    Type       |    Default    | Documentation                |
|-------------   |:-------------:|:-------------:|-----------------------------:|
| opened         |  boolean      |  false        | [Link](#property-opened)     |
| onClose        |  function     |  none         | [Link](#property-onclose)    |
| right          |  boolean      |  false        | [Link](#property-right)      |
| responsive     |  boolean      |  false        | [Link](#property-responsive) |
| permanent      |  boolean      |  false        | [Link](#property-permanent)  |
| overlay        |  boolean      |  true         | [Link](#property-overlay)    |

#### Property: 'opened'
This property the sidenav visible if set to true  
```js
<Sidenav
  opened={this.state.opened}
  onClose={this.handleClose.bind(this)}
/>
```

#### Property: 'onClose'
This property handles the event that occurs when the overlay is clicked/swiped
```js
<Sidenav
  opened={this.state.opened}
  onClose={this.handleClose.bind(this)}
/>
```

#### Property: 'responsive'
This property closes the Sidenav on a small viewport but it will open it on a bigger one
```js
<Sidenav
  opened={this.state.opened}
  onClose={this.handleClose.bind(this)}
  responsive
/>
```

#### Property: 'permanent'
This property makes the Sidenav always visible
```js
<Sidenav
  opened={this.state.opened}
  onClose={this.handleClose.bind(this)}
  permanent
/>
```

#### Property: 'overlay'
This property removes the overlay if set to false
```js
<Sidenav
  opened={this.state.opened}
  onClose={this.handleClose.bind(this)}
  overlay={false}
/>
```
