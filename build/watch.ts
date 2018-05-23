import { watch } from './build'
//import dts from './dts'
import { readdirSync } from 'fs'
import { join } from 'path'

try {
  const ignored = ['Site', 'Icons']
  const packages = readdirSync(join(process.cwd(), 'packages'))
    .filter(pkg => ignored.indexOf(pkg) === -1)

  //packages.forEach(pkg => dts(pkg))
  packages.forEach(pkg => watch(pkg))
  
} catch (error) {

  console.log('------ ERROR ------')
  console.error(error._babel ? error.codeFrame : error.frame ? error.frame : error)
  process.exit(1)

}