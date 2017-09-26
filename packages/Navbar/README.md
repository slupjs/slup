<demo gif>

<h1 align='center'>Slup - Navbar</h1>

This package contains the Navbar, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  The app bar, formerly known as the action bar in Android, is a special kind of toolbar that’s used for branding, navigation, search, and actions.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/navbar
```

## Usage
```js
import { Navbar } from '@slup/navbar'

export class Text extends Component {
  render() {
    return(
      <Navbar>/* Icons and Title here */</Navbar>
    )
  }
}
```

## Available properties
| Props          |    Type       |    Default    | Documentation                |
|-------------   |:-------------:|:-------------:|------:                       |
| primary        |  boolean      |  false        | [Link](#property-primary)    |
| fixed          |  boolean      |  false        | [Link](#property-fixed)      |
| reveal         |  boolean      |  false        | [Link](#property-reveal)     |

#### Property: 'primary'
This property will set the background to the primary color of the theme
```js
<Navbar primary />
```

#### Property: 'fixed'
This property will fix the Navbar relative to the browser window
```js
<Navbar fixed />
```

#### Property: 'reveal'
This property will fix the Navbar relative to the browser window but it will "reveal" itself only when scrolling up
```js
<Navbar reveal />
```
