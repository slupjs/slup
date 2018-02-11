import Component from 'inferno-component'
import { load, transpile } from '../compiler'

interface IProps { code: string }
interface IState {
  error?: TypeError
  loading?: boolean
}

const prefix = `(function(f) {
  const modules = window.top.commons

  const require = m => modules[m]
  const mod = { exports: {} }
  f(mod, mod.exports, require)

  const element = mod.exports.default || mod.exports

  modules['inferno'].render(
    modules['inferno'].createVNode(16, element), 
    document.body
  )
})(function(module, exports, require){`
const suffix = '})'

export class Evaluate extends Component<IProps, IState> {
  private mount: HTMLIFrameElement
  private code: string

  public async componentWillMount() {
    this.setState({ loading: true })

    await load('https://unpkg.com/@babel/standalone@7.0.0-beta.39/babel.min.js')

    this.setState({ loading: false})
  }

  private async compile(code) {
    if (this.state.loading) return

    try {
      this.code = (await transpile(code)).code

      if (this.mount) {
        (this.mount.contentWindow as any).eval(`${prefix}${this.code}${suffix}`)
      }

      this.setState({ error: null })
    } catch (e) {
      console.error(e, this.code)

      const error = e.stack || e
      this.setState({ error: error.split('at ')[0] })
    }
  }

  public async componentWillReceiveProps({ code }) {
    await this.compile(code)
  }

  public async componentDidMount() {
    await this.compile(this.props.code)
  }

  render() {
    const { loading, error } = this.state

    return(
      <div>
        {loading && <div>Loading</div>}
        {error && <span>{error}</span>}

        <iframe 
          style={{ display: error ? 'none' : 'block' }} 
          ref={e => this.mount = e} 
          onError={console.error}
        />
      </div>
    )
  }
}