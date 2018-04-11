<h1 align='center'>Slup - Theming</h1>

This package contains the Theming, a Utility Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material) and also contains many useful features such as a reproduction of the [styled-components](https://www.styled-components.com/) library and some handy functions to modify colors.

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  In Material Design, a primary color refers to a color that appears most frequently in your app.<br />
  A secondary color refers to a color used to accent key parts of your UI.
</blockquote>


## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/theming
```

## Usage
All material design colors are available in this package.<br />
We provide two preset themes: a `lightTheme`(default one) and a `darkTheme` option.
```js
import { ThemeProvider, lightTheme } from '@slup/theming'

<ThemeProvider theme={lightTheme}>
  <Application />
</ThemeProvider>
```

## Available properties
| Props          |    Type       |    Default    | Documentation          |
|-------------   |:-------------:|:-------------:|------:                 |
| theme          |  object       |  {}           | [Link](#property-theme)|

#### Property: 'theme'
With this property you can set a custom theme or you can import our preset themes: `lightTheme` or `darkTheme`. The default theme can be seen on the component demos of our other packages.

```js
import {
  ThemeProvider,
  black,
  white,
  cyan,
  pink
} from '@slup/theming'

const customTheme = {
  text: black,
  background: white,
  primary: cyan[300],
  secondary: pink[500]
}

const App = () =>
  <ThemeProvider theme={customTheme}>
    <YourApp />
  </ThemeProvider>
```

## Styling
We've made a reproduction of the styled-components library since we had some problems with compatibility but we also wanted a faster and lighter way of styling our components.
The syntax is almost identical to [styled-components](https://www.styled-components.com/) so if you want to see all the features that we offer you can take a look at their documentation.

```js
import Inferno from 'inferno'
import styled, { keyframes } from '@slup/theming'

const Rotate = keyframes`
  0%,
  100% {
    transform: scale(0)
  }

  50% {
    transform: scale(1)
  }
`

const Bubble = styled.div`
  position: absolute;
  width: 60px;
  height: 60px;
  background: rgba(255, 255, 255, .5);
  border-radius: 50%;
  animation: ${Rotate} 2s infinite forwards;
  animation-delay: ${props => props.second
    ? -1
    : 0
  }s;
`

const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`

render(
  <Container>
    <Bubble />
    <Bubble second />
  </Container>,
  document.body.firstChild
)

```

## Modifying colors
We have created some useful functions that help us modifying colors: `rgba()`, `lighten()` and `darken()`

#### Rgba
`rgba()` makes an rgba color by taking normal rgb values or an hex color:<br />
The first parameter is the hex or the rgb color, the second one is the alpha value.

```js
import styled, { rgba } from '@slup/theming'

const Title = styled.h1`
  color: ${rgba('#fff', 0.87)};
  background: ${rgba(52, 37, 137, 0.3)};
`
```

#### Lighten
`ligthen()`, as the name suggests, ligthens the given color
The first parameter is the amount of lightness you want to add,
the second one is a string representing the hex or the rgb color.

```js
import styled, { shade } from '@slup/theming'

const Box = styled.div`
  background: ${lighten(0.3, 'rgb(66, 134, 244)')}; // Returns rgb(212,227,252)
`
```

#### Darken
`darken()`, as the name suggests, darkens the given color
The first parameter is the amount of darkness you want to add,
the second one is a string representing the hex or the rgb color.

```js
import styled, { shade } from '@slup/theming'

const Box = styled.div`
  background: ${darken(1, '#fff')}; // Returns pure black
`
```
