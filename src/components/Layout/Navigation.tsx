import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import SideDrawer, { StyledNavLink } from './SideDrawer'
import SideItems from './SideItems'
import styled from 'styled-components'
import { usePagesContext } from '@root/context/PagesContext'
import Link from 'next/link'
import { NAV_LINKS } from './navlinks'
import { List, ListItem, Hidden } from '@material-ui/core'
import { useRouter } from 'next/router'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "calc(100% - 240px)",
    // },
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(1),
  },
  spacer: {
    flexGrow: 2,
  },
  separator: {
    flex: '1 1 auto',
  },
  listItem: {
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    marginLeft: 12,
    fontWeight: 500,
    fontSize: '1rem',
    '&:hover, &.Mui-selected:hover, &.Mui-selected': {
      color: theme.palette.secondary.main,
      background: 'transparent',
    },
  },
}))

const StyledAppBar = styled(AppBar)`
  color: ${props => props.theme.colors.light} !important;
`

export default function Navigation() {
  const classes = useStyles()
  const router = useRouter()

  return (
    <div className={classes.root}>
      <StyledAppBar position='fixed' className={classes.toolbar}>
        <Toolbar>
          <SideDrawer anchor='left' />

          <Hidden only='xs'>
            <Typography variant='h6' component='h1' className={classes.title}>
              WilfredLopez
            </Typography>
          </Hidden>
          <div className={classes.separator} />
          {/* <Hidden only="xs">
            <Typography variant="caption" className={classes.title}>
            WilfredLopez.Net
            </Typography>
          </Hidden> */}
          <SideItems />
        </Toolbar>
      </StyledAppBar>
    </div>
  )
}
