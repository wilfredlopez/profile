import React from "react";
import { ListItem } from "@material-ui/core";
import { StyledLink } from "components/shared";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import styled from "styled-components";

const FacebookIconStyled = styled(FacebookIcon)`
  border: 1px outset rgb(59, 89, 152);
  fill: #3b5998;
    border-radius: 6px;
    background: white;
`;

const LinkedInIconStyled = styled(LinkedInIcon)`
      fill: #2867B2;
    background: white;
    border: 1px outset rgb(40, 103, 178);
    border-radius: 6px;
`;

const InstagramIconStyled = styled(InstagramIcon)`
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

const socialMedia = [
  {
    label: "LinedIn",
    Icon: <LinkedInIconStyled />,

    url: "https://www.linkedin.com/in/wilfred-lopez-a309b896/",
  },
  {
    label: "Github",
    Icon: <GitHubIcon style={{ color: "#8f9498" }} />,
    url: "https://github.com/wilfredlopez",
  },
  {
    label: "YouTube",
    Icon: <YouTubeIcon style={{ color: "#FF0000" }} />,
    url:
      "https://www.youtube.com/channel/UCbJgT2f4AXpLxE0f9n-GCBg?view_as=subscriber",
  },
  {
    label: "Twitter",
    Icon: <TwitterIcon style={{ color: "#1DA1F2" }} />,
    url: "https://twitter.com/wilfreddonaldlo",
  },
  {
    label: "Facebook",
    Icon: <FacebookIconStyled />,
    url: "https://www.facebook.com/WilfredDonaldLo",
  },
  {
    label: "Instagram",
    Icon: <InstagramIconStyled />,
    url: "https://www.instagram.com/wilfredlopez/",
  },
] as const;

const Flexible = styled.span`
    display: flex;
    align-items: center;
    & span{
      margin-right: 4px;
    }
`;

const SocialList = () => {
  const listItems = socialMedia.map(({ Icon, label, url }) => {
    return (
      <ListItem key={label}>
        <StyledLink
          to={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Flexible>
            <span>
              {Icon}
            </span>
            {label}
          </Flexible>
        </StyledLink>
      </ListItem>
    );
  });
  return (
    <React.Fragment>
      {listItems}
    </React.Fragment>
  );
};

export default SocialList;
