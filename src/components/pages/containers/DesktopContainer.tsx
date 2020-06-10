import React, { Component } from "react";

//custom
import MenuItems from "../Menu/MenuItems";

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {
    fixed: true,
  };

  hideFixedMenu = () => this.setState({ fixed: false });
  showFixedMenu = () => this.setState({ fixed: true });

  render() {
    const { children } = this.props;
    const { fixed } = this.state;

    return (
      <div>
        <header>
          <span>
            <section
              style={{ /*minHeight: 500,*/ padding: "1em 0em" }}
            >
              <nav id="navbar-wrapper">
                <section
                  id="navbar"
                >
                  <div>
                    <MenuItems fixed={fixed} />
                  </div>
                </section>
              </nav>
            </section>
          </span>
        </header>

        {children}
      </div>
    );
  }
}

export default DesktopContainer;
