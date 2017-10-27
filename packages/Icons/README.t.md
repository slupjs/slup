<h1 align='center'>Slup - Icons</h1>

This package contains the icons provided by Material Design which are part of a bigger ecosystem called [Slup](https://github.com/gejsi/material)

## Installation

This package can be installed with [NPM](http://npmjs.com/)
```
npm install --save @slup/icons
```

## Usage
The icons are stored in a tree representing the [Google's Material Design Icons](https://github.com/google/material-design-icons) repo, and so they can be resolved as follows:

- Visit our [outo-generated List](#icons)

- Find the icon you are interested in

- Check out the example

**PLEASE NOTE: These files are generated automatically, report any bug if you catch them!**

### Example

```js
import Menu from '@slup/icons/navigation/menu'

export const MenuIcon = () =>
  <Menu />
```

## Building

Building is as simple as running one command:

```
npm  prepublish
yarn prepublish
```

This command will execute the `install.js` script wich will fetch for all the icons types, and look for all the icons inside of each time. From these informations it will build a tree of compiled small icons files, representing the original set forked from the [Google's Material Design Icons](https://github.com/google/material-design-icons) repo, in a friendly, importable and [Inferno](https://infernojs.org/)-based package.

## Icons
