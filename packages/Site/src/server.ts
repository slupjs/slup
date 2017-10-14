/** Server modules */
import * as express from 'express'
import * as compress from 'compression'
import { join } from 'path'

/** Inferno imports */
import createElement from 'inferno-create-element'
import { renderToStaticMarkup } from 'inferno-server'
import { 
  match, 
  RouterContext, 
  doAllAsyncBefore 
} from 'inferno-router'
import { SSR } from '@slup/theming'

/** Page rendering peices */
import TEMPLATE from './parts'
import { routes }  from './routes'

const app = express()

app.use(compress())
app.use('/static',
  express.static(
    join(process.cwd(), 'dist'), 
    { index: false }
  )
)

app.get('*', (req, res) => {
  const props = match(routes, req.url)

  const App = createElement(RouterContext, props)
  
  /** Extract classed HTML and CSS */
  const JSX = renderToStaticMarkup(App)
  const { css, html, ids } = SSR.extract(JSX)
  const IDs = JSON.stringify(ids)

  res.send(
    TEMPLATE
      .replace(/\r?\n|\r/g, '')
      .replace('{{CSS}}', css)
      .replace('{{HTML}}', html)
      .replace('{{IDS}}', IDs)
  )
})

app.listen(process.env.PORT || 8080, () =>
  console.log('🌏 The server has started on port:', process.env.PORT || 8080)
)