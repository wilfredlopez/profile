import React, { Component } from "react"
import {
  Container,
  Menu,
  Responsive,
  Segment,
  Visibility,
} from "semantic-ui-react"
import getWidth from "./getWidth"

//custom
import MenuItems from "../Menu/MenuItems"

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    fixed: true,
  }

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <header>
          <Visibility
            once={false}
            onBottomPassed={this.showFixedMenu}
            onBottomPassedReverse={this.hideFixedMenu}
          >
            <Segment
              inverted
              textAlign="center"
              style={{ /*minHeight: 500,*/ padding: "1em 0em" }}
              vertical
            >
              <nav id="navbar-wrapper">
                <Menu
                  fixed={fixed ? "top" : undefined}
                  inverted={!fixed}
                  pointing={!fixed}
                  secondary={!fixed}
                  size="large"
                  id="navbar"
                >
                  <Container>
                    <MenuItems fixed={fixed} />
                  </Container>
                </Menu>
              </nav>
            </Segment>
          </Visibility>
        </header>

        {children}
      </Responsive>
    )
  }
}

export default DesktopContainer
