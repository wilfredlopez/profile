import { IconButton, Typography } from "@material-ui/core";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core/styles";
import DragHandleIcon from "@material-ui/icons/DragHandle";
import GitHubIcon from "@material-ui/icons/GitHub";
import HomeIcon from "@material-ui/icons/Home";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import TwitterIcon from "@material-ui/icons/Twitter";
import WebIcon from "@material-ui/icons/Web";
import clsx from "clsx";
import { StyledHtmlLink } from "components/shared";
import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

interface Props {
}

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const StyledNavLink = styled(NavLink)`
    color: inherit;
    text-decoration: none;
`;

interface NavLinkItem {
  text: string;
  href: string;
  Icon?: JSX.Element;
}

const SOCIAL_LINKS: NavLinkItem[] = [
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
];

const NAV_LINKS: NavLinkItem[] = [
  {
    href: "/",
    text: "Home",
    Icon: <HomeIcon />,
  },
  {
    href: "/projects",
    text: "Demo Projects",
    Icon: <WebIcon />,
  },
  {
    href: "/contact",
    text: "Contact",
    Icon: <MailIcon />,
  },
];

export type Anchor = "top" | "left" | "bottom" | "right";
interface Props {
  anchor: Anchor;
}
export default function SideDrawer({ anchor }: Props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (
      event: React.KeyboardEvent | React.MouseEvent,
    ) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {NAV_LINKS.map(({ text, href, Icon }, index) => (
          <StyledNavLink key={text} to={href}>
            <ListItem button>
              <ListItemIcon>
                {Icon ? Icon : <DragHandleIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </StyledNavLink>
        ))}
      </List>
      <Divider />

      <List>
        <ListItem>
          <Typography variant="h6">
            Social Media
          </Typography>
        </ListItem>
        {SOCIAL_LINKS.map(({ text, Icon, href }, index) => (
          <StyledHtmlLink
            href={href}
            title={text}
            target="_blank"
            rel="noopener noreferrer"
            role="link"
            key={text}
          >
            <ListItem button>
              <ListItemIcon>
                {Icon ? Icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </StyledHtmlLink>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <React.Fragment key={anchor}>
        <IconButton
          onClick={toggleDrawer(anchor, true)}
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
        >
          {list(anchor)}
        </Drawer>
      </React.Fragment>
    </div>
  );
}
