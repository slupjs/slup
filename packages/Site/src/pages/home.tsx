import Inferno, { linkEvent } from 'inferno'
import Component from 'inferno-component'
import styled from '@slup/theming'

import { FlatButton } from '@slup/buttons'
import { Logo } from '../components/icons'
import { CenterContainer } from '../components/container'
import { Tabs, Tab, TabIcon, TransitionPages, Page } from '@slup/tabs'

/** Redirect helper */
const redirect = router =>
  setTimeout(any => router.push('/components/buttons'), 350)

export default class Home extends Component<any, any> {
  tabs = [
    'item one',
    'item two',
    'item three'
  ]

  state = { selected: 0 }

  handleClick(i) {
    this.setState({ selected: i })
  }

  render() {
    return (
      <div style="overflow-x: hidden">
        <Tabs selected={this.state.selected}>
          {this.tabs.map((item, i) => {
            return (
              <Tab
                onClick={() => this.handleClick(i)}
                selected={this.state.selected === i}
              >
                {item}
              </Tab>
            )
          })}
        </Tabs>
        <TransitionPages selected={this.state.selected}>
          <Page>1</Page>
          <Page>2</Page>
          <Page>3</Page>
        </TransitionPages>
      </div>
    )
  }
}
