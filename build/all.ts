import build from './build'
import { readdirSync } from 'fs'
import { join } from 'path'

try {
  const ignored = ['Site', 'Icons']
  const packages = readdirSync(join(process.cwd(), 'packages'))

  packages
    .filter(pkg => ignored.indexOf(pkg) === -1)
    .map(pkg => build(pkg))
} catch(error) {

  console.log('------ ERROR ------')
  console.error(error._babel ? error.codeFrame : error.frame ? error.frame : error)
  process.exit(1)

}