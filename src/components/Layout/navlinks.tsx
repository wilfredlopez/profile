import GitHubIcon from "@material-ui/icons/GitHub"
import HomeIcon from "@material-ui/icons/Home"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import MailIcon from "@material-ui/icons/Mail"
import TwitterIcon from "@material-ui/icons/Twitter"
import InstagramIcon from "@material-ui/icons/Instagram"
import WebIcon from "@material-ui/icons/Web"

export interface NavLinkItem {
  text: string
  href: string
  Icon?: JSX.Element
}

export const SOCIAL_LINKS: NavLinkItem[] = [
  {
    href: "https://github.com/wilfredlopez",
    text: "Github",
    Icon: <GitHubIcon />,
  },
  {
    href: "https://www.linkedin.com/in/wilfred-lopez-a309b896",
    text: "LinkedIn",
    Icon: <LinkedInIcon />,
  },
  {
    href: "https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw",
    text: "@wilfreddonaldlo",
    Icon: <TwitterIcon />,
  },
  {
    href: "https://www.instagram.com/wilfredlopez/",
    text: "Instagram",
    Icon: <InstagramIcon />,
  },
]

export const NAV_LINKS: NavLinkItem[] = [
  {
    href: "/",
    text: "Home",
    Icon: <HomeIcon />,
  },
  {
    href: "/projects",
    text: "Showcase Projects",
    Icon: <WebIcon />,
  },
  {
    href: "/contact",
    text: "Contact",
    Icon: <MailIcon />,
  },
]
