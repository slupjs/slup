const build = require('./build')
const { readdirSync } = require('fs')
const { join } = require('path')

const ignored = [ 'Site', 'Icons' ]
const packages = readdirSync(join(process.cwd(), 'packages'))

Promise.all(packages
  .filter(pkg => ignored.indexOf(pkg) === -1)
  .map(package => build(package))
)
.catch(error => console.error(error))