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
const socialMedia = [
  {
    label: "LinedIn",
    Icon: <LinkedInIcon style={{ color: "#2867B2" }} />,

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
    Icon: <FacebookIcon style={{ color: "#3b5998", background: "#f8fbfd" }} />,
    url: "https://www.facebook.com/WilfredDonaldLo",
  },
  {
    label: "Instagram",
    Icon: <InstagramIcon
      style={{
        color: "#d836a6",
        background: "#512c05",
      }}
    />,
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
