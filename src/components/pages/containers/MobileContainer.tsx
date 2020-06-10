import React, { Component } from "react";

import MenuItemsMobile from "../Menu/MenuItemsMobile";
//custum
import MobileSidebar from "../Menu/MobileSidebar";
import { Responsive } from "../../shared";
import Sidebar from "../../shared/Sidebar";
import SidebarItem from "../../shared/SidebarItem";
import Segment from "../../shared/Segment";
import Container from "../../shared/Container";

//custum

interface State {
  sidebarOpened: boolean;
}
interface Props {}
class MobileContainer extends Component<Props, State> {
  state = { sidebarOpened: false };

  handleSidebarHide = () => this.setState({ sidebarOpened: false });

  handleToggle = () => this.setState({ sidebarOpened: true });

  barToggle = () => {
    this.setState((prevState) => {
      return { sidebarOpened: !prevState.sidebarOpened };
    });
  };

  render() {
    const { children } = this.props;
    const { sidebarOpened } = this.state;

    return (
      <Responsive
        maxWidth="950px"
      >
        <Sidebar
          toggleOpen={this.handleSidebarHide}
          isOpen={sidebarOpened}
        >
          <nav>
            <MenuItemsMobile handleOut={this.barToggle} />
          </nav>
        </Sidebar>

        <SidebarItem
          onClick={this.barToggle}
        >
          <header>
            <Segment
              style={{ /*minHeight: 350, */ padding: "1em 0em" }}
            >
              <Container>
                <MobileSidebar handleToggle={this.barToggle} />
              </Container>
            </Segment>
          </header>
          {children}
        </SidebarItem>
      </Responsive>
    );
  }
}

export default MobileContainer;
