<h1 align='center'>Slup - Buttons</h1>

This package contains the Buttons, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Material buttons trigger an ink reaction on press. They may display text, imagery, or both.<br />
  Flat buttons and raised buttons are the most commonly used types.<br />
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
  ContainedButton,
  TextButton,
  Fab,
  IconButton
} from '@slup/buttons'

export const Buttons = () =>
  <div>
    <ContainedButton>Button</ContainedButton>
    <OutlinedButton>Button</OutlinedButton>
    <TextButton>Button</TextButton>
    <Fab>+</Fab>
    <IconButton>+</IconButton>
  </div>
```

## Available properties
| Props               | Type          | Default       | Documentation                                                                         |
|---------------------|:-------------:|:-------------:|--------------------------------------------------------------------------------------:|
| disabled            |  boolean      |  false        | [Link](#property-disabled)                                                            |
| ripple              |  boolean      |  true         | [Link](#property-ripple-containedbutton-outlinedbutton-textbutton-fab)                |
| secondary           |  boolean      |  false        | [Link](#property-secondary-containedbutton-outlinedbutton-fab-iconbutton-extendedfab) |
| primary             |  boolean      |  false        | [Link](#property-primary-containedbutton-outlinedbutton-textbutton-iconbutton)        |
| mini                |  boolean      |  false        | [Link](#property-mini-fab)                                                            |
| centerRipple        |  boolean      |  true         | [Link](#property-centerripple-iconbutton)                                             |
| icon                |  function     |  none         | [Link](#property-icon-containedbutton-extendedfab)                                    |

#### Property: 'disabled'
This property will disable the button.
```js
<ContainedButton disabled>Button</ContainedButton>
<OutlinedButton disabled>Button</OutlinedButton>
<TextButton disabled>Button</TextButton>
<Fab disabled>+</Fab>
<IconButton disabled>+</IconButton>
```

#### Property: 'ripple' [ContainedButton, OutlinedButton, TextButton, Fab]
This property if set to false will remove the Ripple effect.
```js
<ContainedButton ripple={false}>Button</ContainedButton>
<OutlinedButton ripple={false}>Button</OutlinedButton>
<TextButton ripple={false}>Button</TextButton>
<Fab ripple={false}>+</Fab>
```

#### Property: 'secondary' [ContainedButton, OutlinedButton, Fab, IconButton, ExtendedFab]
This property will set the background to the 'secondary' color of the theme for the `ContainedButton`, the `Fab` and the `ExtendedFab`.
<br />
This property will only change the color for the `OutlinedButton` and the `IconButton`.
```js
<ContainedButton secondary>Button</ContainedButton>
<OutlinedButton secondary>Button</OutlinedButton>
<Fab secondary>+</Fab>
<IconButton secondary>+</IconButton>
```

#### Property: 'primary' [ContainedButton, OutlinedButton, TextButton, IconButton]
This property will set the background to the 'primary' color of the theme for the `ContainedButton`.
<br />
This property will set the color to the 'primary' color of the theme for the `OutlinedButton`, the `TextButton` and the `IconButton`.
```js
<ContainedButton primary>Button</ContainedButton>
<OutlinedButton primary>Button</OutlinedButton>
<TextButton primary>Button</TextButton>
<IconButton primary>+</IconButton>
```

#### Property: 'mini' [Fab]
This property will reduce the size of the component
```js
<Fab mini>+</Fab>
```

#### Property: 'centerRipple' [IconButton]
This property, if set to false, will make the ripple appear on the clicked position instead of starting from the center.
```js
<IconButton centerRipple={false}>+</IconButton>
```

#### Property: 'icon' [ContainedButton, OutlinedButton, TextButton, ExtendedFab]
This property takes an icon which will be set near the text.
```js
<ContainedButton icon={<Icon />}>Button</ContainedButton>
<OutlinedButton icon={<Icon />}>Button</OutlinedButton>
<TextButton icon={<Icon />}>Button</TextButton>
<ExtendedFab icon={<Icon />}>Button</ExtendedFab>
```
