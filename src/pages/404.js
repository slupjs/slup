import Inferno from 'inferno'
import Component from 'inferno-component'

export default class NotFound extends Component {
  render() {
    return(
      <div>
        <a>404 - Not Found</a>
        <h1>{this.context.router.location.pathname}</h1>
      </div>
    )
  }
}