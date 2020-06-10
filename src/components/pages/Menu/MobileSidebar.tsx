import React from "react";
import { Menu as MenuIcon } from "@material-ui/icons";
import { Button, ListItem, MenuItem } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
interface Props {
  handleToggle: () => void;
}
const SidebarMenu: React.FC<Props> = ({ handleToggle }) => {
  return (
    <React.Fragment>
      <MenuItem color="secondary">
        <ListItem onClick={handleToggle}>
          <MenuIcon />
        </ListItem>
        <ListItem>
          <Button
            href="https://github.com/wilfredlopez"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
            Github
          </Button>

          <Button
            style={{ marginLeft: "0.2em" }}
            href="https://www.linkedin.com/in/wilfred-lopez-a309b896"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
            LinkedIn
          </Button>
        </ListItem>
      </MenuItem>
    </React.Fragment>
  );
};

export default SidebarMenu;

//props => handleToggle (handles toggle of menu)
