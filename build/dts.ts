import { join } from 'path'
import { exec } from 'child_process'
import { sync } from 'rimraf'
import { bundle as dtsBundle } from 'dts-bundle'
import { readdirSync } from 'fs';

const command = `tsc src/index.ts --declaration --outDir dts --jsx preserve --moduleResolution node --types node`

export default pkg => {
  const base = join(process.cwd(), 'packages', pkg)

  console.log('Generating declarations files for', pkg)

  exec(command, { cwd: base }, (error, stdout, stderr) => {
    try {
      dtsBundle({
        name: `@slup/${pkg.toLowerCase()}`,
        main: join(base, 'dts', 'index.d.ts'),
        out: join(base, 'index.d.ts')
      })

      sync(join(base, 'dts'))

      console.log('Declarations built for package', pkg)
    } catch(err) {
      console.error('Error while building declarations in package', pkg, err)
    }
  })

  return pkg
}