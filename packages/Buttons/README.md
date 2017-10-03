<demo gif>

<h1 align='center'>Slup - Buttons</h1>

This package contains the Buttons, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Material buttons trigger an ink reaction on press. They may display text, imagery, or both.
  <br />
  Flat buttons and raised buttons are the most commonly used types.
  <br />
  A floating action button is used for a promoted action.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/buttons
```

## Usage
```js
import {
  RaisedButton,
  FlatButton,
  Fab,
  IconButton
} from '@slup/buttons'

export const Buttons = () =>
  <div>
    <RaisedButton>Button</RaisedButton>
    <FlatButton>Button</FlatButton>
    <Fab>+</Fab>
    <IconButton>+</IconButton>
  </div>
```

## Available properties
| Props               | Type          | Default       | Documentation                                                        |
|---------------------|:-------------:|:-------------:|---------------------------------------------------------------------:|
| disabled            |  boolean      |  false        | [Link](#property-disabled)                                           |
| ripple              |  boolean      |  true         | [Link](#property-ripple-raisedbutton-flatbutton-fab)                 |
| secondary           |  boolean      |  false        | [Link](#property-secondary-raisedbutton-fab-iconbutton)              |
| primary             |  boolean      |  false        | [Link](#property-primary-raisedbutton-flatbutton-iconbutton)         |
| mini                |  boolean      |  false        | [Link](#property-mini-fab)                                           |
| centerRipple        |  boolean      |  true         | [Link](#property-centerripple-iconbutton)                            |

#### Property: 'disabled'
This property will disable the button
```html
<RaisedButton disabled>Button</RaisedButton>
<FlatButton disabled>Button</FlatButton>
<Fab disabled>+</Fab>
<IconButton disabled>+</IconButton>
```

#### Property: 'ripple' [RaisedButton, FlatButton, Fab]
This property if set to false will remove the Ripple effect
```html
<RaisedButton ripple={false}>Button</RaisedButton>
<FlatButton ripple={false}>Button</FlatButton>
<Fab ripple={false}>+</Fab>
```

#### Property: 'secondary' [RaisedButton, Fab, IconButton]
It will set the background to the 'secondary' color of the theme for the `RaisedButton` and the `Fab`.
<br />
It will only change the color for the `IconButton`
```html
<RaisedButton secondary>Button</RaisedButton>
<Fab secondary>+</Fab>
<IconButton secondary>+</IconButton>
```

#### Property: 'primary' [RaisedButton, FlatButton, IconButton]
It will set the background to the 'primary' color of the theme for the `RaisedButton`.
<br />
It will set the color to the 'primary' primary color of the theme for the `FlatButton` and `IconButton`
```html
<RaisedButton primary>Button</RaisedButton>
<FlatButton primary>Button</FlatButton>
<IconButton primary>+</IconButton>
```

#### Property: 'mini' [Fab]
It will reduce its size
```html
<Fab mini>+</Fab>
```

#### Property: 'centerRipple' [IconButton]
This property if set to false will make the ripple appear on the clicked position instead of starting from the center
```html
<IconButton centerRipple={false}>+</IconButton>
```
