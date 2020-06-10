import React, { Fragment } from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { ListItem, IconButton } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
interface Props {
  fixed: boolean;
}
const MenuItems: React.FC<Props> = ({ fixed }) => {
  return (
    <Fragment>
      <NavLink to="/" className="item" exact>
        Home
      </NavLink>
      <NavLink to="/projects" className="item" exact>
        Demo Projects
      </NavLink>
      <NavLink to="/contact" className="item" exact>
        Contact
      </NavLink>
      <ListItem>
        <IconButton
          href="https://github.com/wilfredlopez"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          id="profile-link"
        >
          <GitHubIcon />
          Github
        </IconButton>
        <Button
          color="primary"
          style={{ marginLeft: "0.4em" }}
          href="https://www.linkedin.com/in/wilfred-lopez-a309b896"
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          LinkedIn
        </Button>
        <Button
          style={{ marginLeft: "0.5em" }}
          href="https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw"
          rel="noopener noreferrer"
          target="_blank"
        >
          <TwitterIcon />
          @wilfreddonaldlo
        </Button>
      </ListItem>
    </Fragment>
  );
};

export default MenuItems;
