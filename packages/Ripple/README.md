<demo gif>

<h1 align='center'>Slup - Ripple</h1>

This package contains the Ripple, a Material Design Component which is part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Description
From Google's [Material Design guidelines](https://material.io/guidelines):
<blockquote>
  Connect user input to screen reactions by using touch ripples to both indicate the point of touch, and to confirm that touch input was received.
  <br />
  For touch or mouse, this occurs at the point of contact.
</blockquote>

## Installation
This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/ripple
```

## Usage
Implementing the ripple is very easy, all you have to do is putting it inside a Component with `relative` position
```js
import { Ripple } from '@slup/ripple'

export const Test = () =>
  <div style={{ position: 'relative', height: 50, width: 100 }}>
    <Ripple />
  </div>
```
