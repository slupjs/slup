const { readdirSync, mkdirSync, statSync, existsSync, readFileSync, writeFileSync } = require('fs')
const { join } = require('path')
const { transform } = require('babel-core')

const TEMPLATE = readFileSync('./template.js').toString()
const OPTIONS = {
  presets: [ 'minify' ], 
  plugins: [
    'inferno', 
    'transform-es2015-arrow-functions', 
    'transform-es2015-modules-commonjs',
    'transform-object-rest-spread'
  ] 
}

let ICONS = [
  'action',
  'alert',
  'av',
  'communication',
  'content',
  'device',
  'editor',
  'file',
  'hardware',
  'image',
  'maps',
  'navigation',
  'notification',
  'places',
  'social',
  'toggle',
]

const icons = {}

if(!existsSync('_icons')) mkdirSync('_icons')

ICONS.forEach(category => 
    icons[category] = readdirSync(join('icons', category, 'svg', 'production'))
      .filter(item => item.indexOf('_24px.svg') !== -1)
)

for (let name in icons) {
  console.log('->> Building for category: `' + name + '`:')
  const _path = join('_icons', name)

  if (!existsSync(_path)) mkdirSync(_path)

  icons[name].forEach(icon => {
    console.log('--->> Building icon: `' + name + '/' + icon + '` ...')

    const path    = join('icons', name, 'svg', 'production', icon)
    const short   = icon
      .replace('_24px.svg', '')
      .replace('ic_', '')

    const out     = join('_icons', name, short) + '.js'
    const content = readFileSync(path)
      .toString()
      .replace('xmlns="http://www.w3.org/2000/svg"', '{...props}')

    const SVG     = TEMPLATE.replace('<svg />', content)
    const transpiled = transform(SVG, OPTIONS).code

    writeFileSync(out, transpiled)
  
    console.log('--->>')
    console.log('--->>')
    console.log('--->> Icon built: `' + name + '/' + icon + '`!')
    console.log('--->> Infos:')
    console.log('--->> Size: ' + transpiled.length  + ' bytes [THEORETICAL]')
    console.log('--->> Size: ' + statSync(out).size + ' bytes [ON DISK]')
    console.log('--->> Out file:'  + out)
    console.log('--->> Requireable by: @slup/icons/' + name + '/' + short )
    console.log('--->>')
    console.log('--->>')
  })
}