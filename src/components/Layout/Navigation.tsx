import { Hidden } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import SideDrawer from './SideDrawer'
import SideItems from './SideItems'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    background: theme.palette.secondary.dark,
    color: theme.palette.secondary.contrastText,
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

export default function Navigation() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='fixed' className={classes.toolbar}>
        <Toolbar>
          <SideDrawer anchor='left' />

          <Hidden only='xs'>
            <Typography variant='h6' component='h1'>
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
      </AppBar>
    </div>
  )
}
