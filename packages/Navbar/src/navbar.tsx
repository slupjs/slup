import { Component } from 'inferno'

import { Bar } from './bar'

export class Navbar extends Component<any, any> {
  previousY = 0
  previousX = 0
  state = { maxHeight: 64 }

  componentDidMount() {
    if (this.props.reveal)
      window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    if (this.props.reveal)
      window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    const currentX = window.scrollX
    const currentY = window.scrollY

    // Ignore the horizontal scroll
    if(currentX !== this.previousX)
      return this.previousX = currentX

    if (currentY < this.previousY)
      this.setState({ maxHeight: 64 })
    else
      this.setState({ maxHeight: 0 })

    this.previousY = currentY
  }

  render(props) {
    return <Bar {...props} maxHeight={this.state.maxHeight} />
  }
}
