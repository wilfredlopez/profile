import { List, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import React, { Fragment } from "react";
import styled from "styled-components";

export const LinkedInButton = styled(Button)`
  background-color: #2867B2 !important;;
  color: white !important;;
  border-radius: 6px !important;;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;;
  /* padding: 7px 14px; */
  padding: 6px 8px !important;;
    font-size: 0.81rem !important;;
  &:hover {
    background-color: #2c5789 !important;;
  }
  & span .text-inner{
    margin-top: 2px !important;;
  }
`;
export const GithubButton = styled(Button)`
  background-color: #c4c7c9 !important;
  color:  #24292e !important;
  @media (max-width:420px){
    display: none !important;
  }
  /* border-radius: 6px; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;;
  /* padding: 7px 14px; */
  padding: 6px 8px !important;;
    font-size: 0.81rem !important;;
  &:hover {
    background-color: #8f9498 !important;;
  }
  & span{
      margin-left: 3px;
      margin-right: 3px;
  }
`;

export const TwitterButton = styled(Button)`
  background-color: #078bdc !important;;
  color: #f8f8f8 !important;;
  /* border-radius: 6px; */
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;;
  /* padding: 7px 14px; */
  padding: 6px 8px !important;;
    font-size: 0.81rem !important;;
  &:hover {
    background-color: #1DA1F2 !important;;
  }
`;

interface Props {
}
const SideItems: React.FC<Props> = () => {
  return (
    <Fragment>
      <List>
        {/* <Hidden only="xs"> */}

        <GithubButton
          title="Github"
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
        {/* </Hidden> */}
        <LinkedInButton
          role="link"
          title="LinkedIn"
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
            title="Twitter @WilfredonaldLo"
          >
            <TwitterIcon />
            {/* @wilfreddonaldlo */}
            @wilfr...
          </TwitterButton>
        </Hidden>
      </List>
    </Fragment>
  );
};

export default SideItems;
