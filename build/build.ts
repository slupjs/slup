import { join } from 'path'
import { sync } from 'rimraf'
import { existsSync } from 'fs'
import { rollup } from 'rollup'
import { input, output } from './configuration'

export default async pkg => {
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

  await Promise.all(['es', 'cjs', 'amd', 'umd', 'iife'].map(format => {
    console.log(pkg, '* Output for', format)
    bundle.write(outputOptions(format) as any)
  }))
}