import { ListItem } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { Fragment } from "react";
interface Props {
}
const SideItems: React.FC<Props> = () => {
  return (
    <Fragment>
      <ListItem>
        <Button
          href="https://github.com/wilfredlopez"
          target="_blank"
          rel="noopener noreferrer"
          role="link"
          id="profile-link"
        >
          <GitHubIcon />
          Github
        </Button>
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

export default SideItems;
