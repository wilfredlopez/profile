import React from 'react'
import { ListItem } from '@material-ui/core'
import { StyledLink } from '@components/shared'

import GitHubIcon from '@material-ui/icons/GitHub'
// import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'
import styled from 'styled-components'
import {
  // FacebookIconStyled,
  InstagramIconStyled,
  LinkedInIconStyled,
} from '../Layout/SideItems'

const socialMedia = [
  {
    label: 'LinedIn',
    Icon: <LinkedInIconStyled />,

    url: 'https://www.linkedin.com/in/wilfred-lopez-a309b896/',
  },
  {
    label: 'Github',
    Icon: <GitHubIcon style={{ color: '#8f9498' }} />,
    url: 'https://github.com/wilfredlopez',
  },

  {
    label: 'Twitter',
    Icon: <TwitterIcon style={{ color: '#1DA1F2' }} />,
    url: 'https://twitter.com/wilfreddonaldlo',
  },
  // {
  //   label: "Facebook",
  //   Icon: <FacebookIconStyled />,
  //   url: "https://www.facebook.com/WilfredDonaldLo",
  // },
  {
    label: 'Instagram',
    Icon: <InstagramIconStyled />,
    url: 'https://www.instagram.com/wilfredlopez/',
  },
  // {
  //   label: "YouTube",
  //   Icon: <YouTubeIcon style={{ color: "#FF0000" }} />,
  //   url:
  //     "https://www.youtube.com/channel/UCbJgT2f4AXpLxE0f9n-GCBg?view_as=subscriber",
  // },
] as const

const Flexible = styled.span`
  display: flex;
  align-items: center;
  & span {
    margin-right: 4px;
  }
`

const SocialList = () => {
  const listItems = socialMedia.map(({ Icon, label, url }) => {
    return (
      <ListItem key={label}>
        <StyledLink href={url} target='_blank' rel='noopener noreferrer'>
          <Flexible>
            <span>{Icon}</span>
            {label}
          </Flexible>
        </StyledLink>
      </ListItem>
    )
  })
  return <React.Fragment>{listItems}</React.Fragment>
}

export default SocialList
