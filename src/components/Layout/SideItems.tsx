import { List, Hidden } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import TwitterIcon from "@material-ui/icons/Twitter";

import React, { Fragment } from "react";
;
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";
import styled from "styled-components";

export const FacebookIconStyled = styled(FacebookIcon)`
  border: 1px outset rgb(59, 89, 152);
  fill: #3b5998 !important;
    border-radius: 6px;
    background: white;
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
      fill: #2867B2 !important;
    background: white;
    border: 1px outset rgb(40, 103, 178);
    border-radius: 6px;
`;

export const InstagramIconStyled = styled(InstagramIcon)`
   /* fill: #d836a6;
    background: #512c05; */
    display: inline-block;
  text-align: center;
  border-radius: 40px;
  color: #fff;
  line-height: 250px;
  vertical-align: middle;
    background: #d6249f;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%,#d6249f 60%,#285AEB 90%);
  box-shadow: 0px 3px 10px rgba(0,0,0,.25);
  `;


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
  /* @media (max-width:420px){
    display: none !important;
  } */
   @media (max-width:299px){
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


const InstagramButton = styled(Button)`
  background-color: #ec4770 !important;
  /* color: #f8f8f8 !important;; */
  border-radius: 6px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08) !important;
  /* padding: 7px 14px; */
  padding: 6px 8px !important;
    font-size: 0.81rem !important;
    margin-left: 6px !important;
  &:hover {

    /* background-color: #1DA1F2 !important;; */
  }
`

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
        <Hidden xsDown>
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
          </TwitterButton>

          <InstagramButton
            href="https://instagram.com/wilfredlopez"
            //@ts-ignore
            rel="noopener noreferrer"
            //@ts-ignore
            target="_blank"
            title="Instagram @wilfredlopez"
          >
            <InstagramIconStyled />
          </InstagramButton>
        </Hidden>
      </List>
    </Fragment>
  );
};

export default SideItems;
