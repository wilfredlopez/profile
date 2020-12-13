// import { StyledHtmlLink } from '@components/shared'
import { Button, Typography } from '@material-ui/core'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { makeStyles } from '@material-ui/core/styles'
import DragHandleIcon from '@material-ui/icons/DragHandle'
import MailIcon from '@material-ui/icons/Mail'
import MenuIcon from '@material-ui/icons/Menu'
// import { SECONDARY_COLOR } from '@root/theme/getTheme'
import clsx from 'clsx'
import NavLink from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'
import { NAV_LINKS, SOCIAL_LINKS } from './navlinks'

interface Props { }

const useStyles = makeStyles(theme => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuButton: {
    // marginRight: theme.spacing(0.5),
    // marginLeft: theme.spacing(0.5),
    minHeight: 50,
    minWidth: 50,
    zIndex: 1001,
  },
}))

export const StyledNavLink = styled.a<{ isActive?: boolean }>`
  color: ${props => (props.isActive ? props.theme.colors.tertiary : 'inherit')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.tertiary};
  }
`
export const StyledHtmlLinkWhite = styled.a<{ color?: string; noHover?: boolean }>`
  color: ${props => (props.color ? props.color : 'inherit')};
  text-decoration: none;
  &:hover {
    color: ${props =>
    props.noHover ? 'inherit' : 'black'};
  }
`

export type Anchor = 'top' | 'left' | 'bottom' | 'right'
interface Props {
  anchor: Anchor
}

// const variants = {
//   open: { opacity: 1, x: 0 },
//   closed: { opacity: 0, x: '-100%' },
// }

// const listItemVariants = {
//   open: {
//     opacity: 1,
//     y: 0,
//   },
//   closed: { opacity: 0, y: '-100%' },
// }

export const StyledNavLinkWhite = styled.a<{ isActive?: boolean }>`
  color: ${props => (props.isActive ? 'black' : 'inherit')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: black;
  }
`

export default function SideDrawer({ anchor }: Props) {
  const classes = useStyles()

  const router = useRouter()

  // const isBreakpoint = useMediaQuery(
  //   (theme: Theme) => theme.breakpoints.up("md"),
  //   {
  //     defaultMatches: true,
  //   },
  // );
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return
    }

    setState({ ...state, [anchor]: open })
  }

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {NAV_LINKS.map(({ text, href, Icon }, index) => (
          <NavLink key={text} href={href}>
            <StyledNavLinkWhite isActive={href === router.pathname}>
              <ListItem button>
                <ListItemIcon style={{ color: 'inherit' }}>
                  {Icon ? Icon : <DragHandleIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </StyledNavLinkWhite>
          </NavLink>
        ))}
      </List>
      <Divider />

      <List>
        <ListItem button={false}>
          <Typography variant='h6'>Social</Typography>
        </ListItem>
        {SOCIAL_LINKS.map(({ text, Icon, href }, index) => (
          <StyledHtmlLinkWhite
            href={href}
            title={text}
            target='_blank'
            rel='noopener noreferrer'
            role='link'
            key={text + index}
          >
            <ListItem button>
              <ListItemIcon style={{ color: 'inherit' }}>
                {Icon ? Icon : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          </StyledHtmlLinkWhite>
        ))}
      </List>
    </div>
  )

  // const isOpen = state[anchor] || isBreakpoint;
  const isOpen = state[anchor]

  return (
    <React.Fragment key={anchor}>
      {/* <Hidden mdUp initialWidth="sm"> */}
      <Button
        // edge="start"
        onClick={toggleDrawer(anchor, true)}
        className={classes.menuButton}
        color='inherit'
        aria-label='menu'
      >
        <MenuIcon />
      </Button>
      {/* </Hidden> */}

      <Drawer
        id='navbar-drawer'
        anchor={anchor}
        // variant={isBreakpoint ? "permanent" : undefined}
        open={isOpen}
        // ModalProps={{
        //   disableScrollLock: isBreakpoint,
        //   style: {
        //     position: isBreakpoint ? "relative" : "fixed",
        //   },
        // }}
        PaperProps={{
          style: {
            width: 240, overflow: 'hidden',
            backgroundColor: 'rgb(255 255 255 / 20%)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            color: 'white',

          },
        }}
        SlideProps={{
          timeout: {
            exit: 300,
            enter: 250,
          },
        }}
        // hideBackdrop={isBreakpoint}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </React.Fragment>
  )
}
