import { List, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";
import React, { Fragment } from "react";
import styled from "styled-components";

export const LinkedInButton = styled(Button)`
  background-color: #2867B2;
  color: white;
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  /* padding: 7px 14px; */
  padding: 6px 8px;
    font-size: 0.81rem;
  &:hover {
    background-color: #2c5789;
  }
  & span .text-inner{
    margin-top: 2px;
  }
`;
export const GithubButton = styled(Button)`
  background-color: #c4c7c9;
  color:  #24292e;

  /* border-radius: 6px; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  /* padding: 7px 14px; */
  padding: 6px 8px;
    font-size: 0.81rem;
  &:hover {
    background-color: #8f9498;
  }
  & span{
      margin-left: 3px;
      margin-right: 3px;
  }
`;

export const TwitterButton = styled(Button)`
  background-color: #078bdc;
  color: #f8f8f8;
  /* border-radius: 6px; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  /* padding: 7px 14px; */
  padding: 6px 8px;
    font-size: 0.81rem;
  &:hover {
    background-color: #1DA1F2;
  }
`;

interface Props {
}
const SideItems: React.FC<Props> = () => {
  return (
    <Fragment>
      <List>
        <Hidden only="xs">
          <GithubButton
            href="https://github.com/wilfredlopez"
            //@ts-ignore
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            id="profile-link"
          >
            <GitHubIcon />
            {" "}
            <span>
              Github
            </span>
          </GithubButton>
        </Hidden>
        <LinkedInButton
          role="link"
          variant="text"
          style={{ marginLeft: "0.4em" }}
          href="https://www.linkedin.com/in/wilfred-lopez-a309b896"
          //@ts-ignore
          target="_blank"
          rel="noopener noreferrer"
        >
          <LinkedInIcon />
          <span className="text-inner">
            LinkedIn
          </span>
        </LinkedInButton>
        <Hidden smDown>
          <TwitterButton
            style={{ marginLeft: "0.5em" }}
            href="https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw"
            //@ts-ignore
            rel="noopener noreferrer"
            //@ts-ignore
            target="_blank"
          >
            <TwitterIcon />
            @wilfreddonaldlo
          </TwitterButton>
        </Hidden>
      </List>
    </Fragment>
  );
};

export default SideItems;
