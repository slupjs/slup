import { join } from 'path'
import { sync } from 'rimraf'
import { existsSync } from 'fs'
import { rollup, watch as rWatch } from 'rollup'
import { input, output } from './configuration'

export const build = async pkg => {
  console.log(pkg, 'Started working')

  const base = join(process.cwd(), 'packages', pkg)
  const out = join(base, 'dist')
  const entry = join(base, 'src', 'index.ts')

  console.log(pkg, '* Removing old build folder')
  if(existsSync(out)) sync(out)

  console.log(pkg, '* Generating configuration')

  const inputOptions = input(entry)
  const outputOptions = output(base)

  console.log(pkg, '* Bundling')

  const bundle = await rollup(inputOptions as any)

  await Promise.all(['es', 'cjs', 'amd', 'umd'].map(format => {
    console.log(pkg, '* Output for', format)
    bundle.write(outputOptions(format) as any)
  }))
}

export const watch = async pkg => {
  const base = join(process.cwd(), 'packages', pkg)
  const entry = join(base, 'src', 'index.ts')

  const inputOptions = input(entry)
  const outputOptions = output(base)

  const watcher = rWatch({
    ...inputOptions, 
    output: outputOptions('es')
  } as any)

  watcher.on('event', event => {
    switch(event.code) {
      case 'START':
        console.log('Started watching', pkg)
      break
    
      case 'FATAL':
      case 'ERROR':
        console.log('Fatal error', event)
      break

      case 'BUNDLE_START':
      case 'BUNDLE_END':
      break // Ignore

      case 'END':
        console.log(event.code, 'OK')
      break

      default: console.log(event)
    
    }
  })
}