import React from "react"
import { Button, Icon, Menu } from "semantic-ui-react"

interface Props {
  handleToggle: () => void
}
const SidebarMenu: React.FC<Props> = ({ handleToggle }) => {
  return (
    <React.Fragment>
      <Menu inverted pointing secondary size="large">
        <Menu.Item onClick={handleToggle}>
          <Icon name="sidebar" size="large" />
        </Menu.Item>
        <Menu.Item position="right">
          <Button
            as="a"
            inverted
            href="https://github.com/wilfredlopez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Group>
              <Icon name="github" />
              <Icon corner name="add" />
            </Icon.Group>
            Github
          </Button>

          <Button
            as="a"
            inverted
            style={{ marginLeft: "0.2em" }}
            href="https://www.linkedin.com/in/wilfred-lopez-a309b896"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon.Group>
              <Icon name="linkedin" style={{ color: "#1da1f2" }} />
            </Icon.Group>
            LinkedIn
          </Button>
        </Menu.Item>
      </Menu>
    </React.Fragment>
  )
}

export default SidebarMenu

//props => handleToggle (handles toggle of menu)
