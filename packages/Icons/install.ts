import { 
  readFileSync, 
  readdirSync, 
  existsSync, 
  mkdirSync,
  writeFile,
  appendFile
} from 'fs'
import { resolve } from 'path'
import { transform } from 'babel-core'

/** Paths */
const BASE = resolve(__dirname)
const ICONS_OUT = resolve(BASE, 'icons')
const ICONS_BASE = resolve(BASE, 'node_modules', 'icons')
const DOCS_IN = resolve(BASE, 'README.t.md')
const DOCS_OUT = resolve(BASE, 'README.md')

/** Babel options */
const OPTIONS = {
  presets: ['minify'],
  plugins: [
    'inferno',
    'transform-es2015-arrow-functions',
    'transform-es2015-modules-commonjs',
    'transform-object-rest-spread'
  ]
}

/** Base template for transpilation */
const TEMPLATE = readFileSync(resolve(BASE, 'template.js')).toString()

/** List of icons types */
const ICONS_TYPES = [
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

/** Object for ordinated list of icons */
let ICONS = {}
let OUTPUT = {}

if (!existsSync(ICONS_OUT)) mkdirSync(ICONS_OUT)

/** Generate a tree of icons for each type */
const ICONS_FOLDERS = ICONS_TYPES.forEach(type => {
  const path = resolve(ICONS_BASE, type, 'svg', 'production')


  ICONS[type] = readdirSync(path) /** List all svgs in the folder */
    .filter(item => item.indexOf('_24px.svg') !== -1) /** Filter just the 24px ones */
    .map(name => 
      name.replace('_24px.svg', '') /** Remove the suffix */
        .replace('ic_', '')         /** Remove the prefix */
    )
})

for (let key in ICONS) {
  const CATEGORY = ICONS[key]
  const OUT_BASE = resolve(ICONS_OUT, key)

  if (!existsSync(OUT_BASE)) mkdirSync(OUT_BASE)

  OUTPUT[key] = []

  CATEGORY.forEach(icon => {
    const LONG_ICON = 'ic_' + icon + '_24px.svg'
    const ICON_PATH = resolve(ICONS_BASE, key, 'svg', 'production', LONG_ICON)

    /** Remove hypens and replace them with an uppercase next-charter */
    const CAMELCASE = icon.replace(/(-.|_.)/g, x => x[1].toUpperCase()) 
    const OUT       = resolve(OUT_BASE, CAMELCASE + '.js')
    const URL       = 'https://storage.googleapis.com/material-icons/external-assets/v4/icons/svg/ic_' + icon + '_black_24px.svg'
    const PACKAGE   = '@slup/icons/' + key + CAMELCASE

    const CONTENT   = readFileSync(ICON_PATH)
      .toString()
      .replace('xmlns="http://www.w3.org/2000/svg"', '{...props}')

    const SVG      = TEMPLATE.replace('<svg />', CONTENT)
    const { code } = transform(SVG, OPTIONS)

    writeFile(OUT, code, void 0)

    OUTPUT[key].push({
      short: CAMELCASE,
      original: LONG_ICON,
      package: PACKAGE,
      short_original: icon,
      out: OUT,
      url: URL
    })

    console.log('🔨 Written icon:', CAMELCASE)
  })
}

writeFile(resolve(BASE, 'data.json'), JSON.stringify(OUTPUT, null, 2), () => {
  console.log('Written stats file! ⚡️')
})

console.log('📝 Writing docs...')

writeFile(DOCS_OUT, readFileSync(DOCS_IN), void 0)

for (let key in OUTPUT) {
  appendFile(DOCS_OUT, `- ## Category: **${key}**` + '\n', void 0)

  console.log('📝 Created list for:', key)

  OUTPUT[key].forEach(({ short, url, package: __package }) => {
    appendFile(
      DOCS_OUT, 
      `
    - ## Icon: **${short}** <img src="${url}">

      This icon can be used as follows:

      \`\`\`js
      import Icon from '${__package}'

      export default () => <Icon />
      \`\`\`
`,
      void 0
    )

    console.log('📝 --> Created list for:', short)
  })
}
