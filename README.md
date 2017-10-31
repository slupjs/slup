<h1 align='center'>
  <img src='http://svgshare.com/i/344.svg' width='65%' />

  <h5 align='center'>Sets of material design components built with web technologies</h5>

  <h5 align='center'>
    <a href="https://lernajs.io/">
      <img alt="Lerna" src="https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg">
    </a>
    <a href="https://travis-ci.org/slupjs/slup">
      <img alt="Build Status" src="https://travis-ci.org/slupjs/slup.svg?branch=master">
    </a>
    <a>
      <img alt="License" src="https://img.shields.io/github/license/slupjs/slup.svg">
    </a>
  </h5>
</h1>

> **NOTE: The library isn't complete yet**

Slup was created by our desire for a performing UI framework following strictly [Material Design guidelines](https://material.io/guidelines). It packs lightweight components, based on the blazing-fast React-like library [Inferno](https://infernojs.org) and our own styling method inspired by the well known styled-component, but rewritten in a smaller and lightweight fashion. The speed and small size of our libraries provides some of the most goreous components in the design history with a lightweight and performant approach, perfect for your next PWA or web application. 

Plus we've also got an amazing support provided by [Typescript](https://www.typescriptlang.org/)(the most loved `compile-to-javascript` language from the comminty)!

## Philosophy

* High Performance
* Meticulousness
* Beautiful and well commented(understandable) code
* Be as indipendent from other libraries as possible
* Enhance compatibility with other frameworks like (p)react [NOT YET]
* Small size and small footprint

## Getting Started

Slup is divided in **packages**: each pacakge represents a corresponding [Material Design component](https://material.io/guidelines/components), this means that each package can be found at `@slup/<package>` and installed separately improving both **size and speed** of your final bundle.
Here's how:

## Installation

Any slup package can be installed whit [NPM](http://npmjs.com/) as follows:
```bash
npm i -s @slup/<package>
```

## Running the demo
> NOTE: This process requires you to have installed [lerna](https://lernajs.io/) globally.

- To kick things off, clone the demo and enter that directory:
```bash
git clone https://github.com/slupjs/slup && cd slup
```

- Install packages and run the demo:
```bash
lerna bootstrap # Install packages and symlinks
cd packages/Site # Go into the demo's site folder
yarn run compile:build # Build the javascritp SSR and client
yarn start # Start the demo server
```

## Development setup
> NOTE: This process requires you to have installed [lerna](https://lernajs.io/) globally.

- To kick things off, clone the demo and enter that directory:
```bash
git clone https://github.com/slupjs/slup && cd slup
```

- Install packages:
```bash
lerna bootstrap # Install packages and symlinks
```

- Then move onto the demo's folder and start the watcher and the server:
```bash
cd packages/Site # Go into the demo's site folder

# In a first terminal: 
yarn run compile:watch # Bundle the application watching for changes

# In a second terminal:
yarn start # Start the demo server
```

Now feel free to make your changes and create new [PRs](https://github.com/Gejsi/Material/pulls) 🎉

## License

This project is licensed under the MIT License

## Authors

* LucaT
* Gejsi
