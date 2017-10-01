<h1 align='center'>Slup - Icons</h1>

This package contains the icons provided by Material Design which are part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Installation
**Note: you must have installed git to install the package**

First of all you have to install the package with [NPM](http://npmjs.com/)
```
npm install --save @slup/icons
```
And then
```
yarn build
```

## Usage
Once you have installed and built the package you can now import any icon,
take a look at this [site](https://material.io/icons/) to choose the icon you want to use
```js
import Menu from '@slup/icons/navigation/menu'

export const MenuIcon = () =>
  <Menu />
```
