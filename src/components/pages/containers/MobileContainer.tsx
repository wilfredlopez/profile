import React, { Component } from "react"
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Sidebar,
} from "semantic-ui-react"
import MenuItemsMobile from "../Menu/MenuItemsMobile"
//custum
import MobileSidebar from "../Menu/MobileSidebar"
import getWidth from "./getWidth"

//custum

interface State {
  sidebarOpened: boolean
}
interface Props {}
class MobileContainer extends Component<Props, State> {
  state = { sidebarOpened: false }

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  barToggle = () => {
    this.setState((prevState) => {
      return { sidebarOpened: !prevState.sidebarOpened }
    })
  }

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation="push"
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <nav>
            <MenuItemsMobile handleOut={this.barToggle} />
          </nav>
        </Sidebar>

        <Sidebar.Pusher
          dimmed={sidebarOpened}
          style={{ minHeight: "100vh" }}
          onClick={sidebarOpened && this.barToggle}
        >
          <header>
            <Segment
              inverted
              textAlign="center"
              style={{ /*minHeight: 350, */ padding: "1em 0em" }}
              vertical
            >
              <Container>
                <MobileSidebar handleToggle={this.barToggle} />
              </Container>
            </Segment>
          </header>
          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

export default MobileContainer
