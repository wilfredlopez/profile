import {
  Button,
  Hidden,
  IconButton,
  Theme,
  Typography,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
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
import { StyledHtmlLink } from "@components/shared";
import React, { useRef } from "react";
// import { NavLink } from "react-router-dom";
import NavLink from "next/link";
import styled from "styled-components";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "@root/styles/getTheme";
import { usePagesContext } from "@root/context/PagesContext";
import { useRouter } from "next/router";
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
    // marginRight: theme.spacing(0.5),
    // marginLeft: theme.spacing(0.5),
    minHeight: 50,
    minWidth: 50,
    zIndex: 1001,
  },
}));

const StyledNavLink = styled.a<{ isActive?: boolean }>`
    color: ${(props) => props.isActive ? SECONDARY_COLOR : "inherit"} ;
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
    text: "Showcase Projects",
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

const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};

const listItemVariants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: { opacity: 0, y: "-100%" },
};

export default function SideDrawer({ anchor }: Props) {
  const classes = useStyles();

  const router = useRouter();

  // const theme = useTheme()
  const isBreakpoint = useMediaQuery(
    (theme: Theme) => theme.breakpoints.up("md"),
    {
      defaultMatches: true,
    },
  );
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
          <NavLink key={text} href={href}>
            <StyledNavLink isActive={href === router.pathname}>
              <ListItem
                button
              >
                <ListItemIcon style={{ color: "inherit" }}>
                  {Icon ? Icon : <DragHandleIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </StyledNavLink>
          </NavLink>
        ))}
      </List>
      <Divider />

      <List>
        <ListItem button={false}>
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
              <ListItemIcon style={{ color: "inherit" }}>
                {Icon ? Icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </StyledHtmlLink>
        ))}
      </List>
    </div>
  );

  const isOpen = state[anchor] || isBreakpoint;

  return (
    <React.Fragment key={anchor}>
      <Hidden mdUp initialWidth="sm">
        <IconButton
          edge="start"
          onClick={toggleDrawer(anchor, true)}
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
        >
          <MenuIcon />
        </IconButton>
      </Hidden>

      <Drawer
        id="navbar-drawer"
        anchor={anchor}
        open={isOpen}
        PaperProps={{
          style: {
            width: 240,
          },
        }}
        SlideProps={{
          timeout: {
            exit: 300,
            enter: 250,
          },
        }}
        hideBackdrop={isBreakpoint}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  );
}
