const { join } = require('path')
const { sync } = require('rimraf')
const { existsSync } = require('fs')
const rollup = require('rollup')
const { input, output } = require('./configuration')

module.exports = async package => {
  console.log(package, 'Started working')

  const base = join(process.cwd(), 'packages', package)
  const out  = join(base, 'dist')
  const entry = join(base, 'src', 'index.ts')

  console.log(package, '* Removing old build folder')
  if(existsSync(out)) sync(out)

  console.log(package, '* Generating configuration')

  const inputOptions = input(entry)
  const outputOptions = output(base)

  console.log(package, '* Bundling')

  return rollup.rollup(inputOptions)
    .then(handleBundle(package, outputOptions))
    .catch(onError)
}

const handleBundle = (package, options) => bundle => 
  Promise.all(['es', 'cjs', 'amd', 'umd', 'iife'].map(format => {
    console.log(package, '* Output for', format)
    bundle.write(options(format))
  }))

const onError = error => {
  console.log('------ ERROR ------')
  console.error(error._babel ? error.codeFrame : error.frame ? error.frame : error)
  process.exit(1)
}
