/** Express modules */
import * as express from 'express'
import * as compress from 'compression'

/** Utilities */
import { createServer as createHTTPS } from 'https'
import { createServer as createHTTP } from 'http'
import { readFileSync } from 'fs'
import { join } from 'path'

/** Inferno imports, render utilities */
import createElement from 'inferno-create-element'
import { renderToStaticMarkup } from 'inferno-server'
import { match, RouterContext } from 'inferno-router'
import { SSR } from '@slup/theming'

/** Page rendering peices */
import TEMPLATE from './parts'
import { routes }  from './routes'

/** Declare server utilities constants */
const message = '[:url] in :response-time ms ->> :res[content-length]'

/**
 * Redirects to HTTPS on production mode, 
 * stick with HTTP for development
 * 
 * @param req The request object
 * @param res The response object
 */
const redirector = (req, res) => {
  if (process.env.NODE_ENV == 'production') {
    res.writeHead(302, { Location: `https://${req.headers.host}${req.url}` }) 
    res.end()
  } else app.handle(req, res)
}
const app = express()

app.use(compress())
app.use('/static', express.static(join(process.cwd(), 'dist')))

/** All-routes matcher. The response is handled by inferno-router */
app.get('*', (req, res) => {
  /** Generate props for the mathing components in the router */
  const props = match(routes, req.url)
  const App = createElement(RouterContext, props)
  
  /** Render to string the generated JSX tree */
  const JSX = renderToStaticMarkup(App)

  /** Extract html, css string, plus an ids array for hydratation */
  const { css, html, ids } = SSR.extract(JSX)
  const IDs = JSON.stringify(ids)
  
  /** Render the page to the user based on the template */
  res.send(
    TEMPLATE
      .replace(/\r?\n|\r/g, '')
      .replace('{{CSS}}', css)
      .replace('{{HTML}}', html)
      .replace('{{IDS}}', IDs)
  )
})

/** Listen on HTTPS just on the production phase */
if(process.env.NODE_ENV == 'production') {
  /** Certificates for SSL encryption(HTTPS) */
  const options = {
    key: readFileSync(join(process.cwd(), 'key.pem')),
    cert: readFileSync(join(process.cwd(), 'cert.pem'))
  }

  createHTTP(redirector).listen(80, () => console.log(`🌏 ⚡️ HTTPS server listening`))
  createHTTPS(options, app).listen(443, () => console.log(`🌏 ⚡️ HTTPS server listening`))
} else {
  createHTTP(redirector).listen(80, () => console.log(`🌏 ⚡️ HTTPS server listening`))
}