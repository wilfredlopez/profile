// import { Hidden, Theme } from '@material-ui/core'
import AppBar from '@material-ui/core/AppBar'
import { makeStyles } from '@material-ui/core/styles'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import SideDrawer from './SideDrawer'
// import SideItems from './SideItems'
import Logo from '@components/shared/Logo'
import Link from 'next/link'


// const GRADIANT = 'linear-gradient(0deg, #2f946d 40%, #30a275 50%, #298a64 100%)'
// const GRADIANT = 'linear-gradient(0deg, #e6491d 40%, #d6431a 50%, #9a2f11 100%)' // 'linear-gradient(180deg, rgb(132 78 0) 45%, rgb(255 157 4) 100%)' // 'linear-gradient(180deg, rgb(35 35 35) 45%, rgb(191 115 1) 100%)'
// const GRADIANT = 'linear-gradient(0deg, #863f41 40%, #8a4143 50%, #914345 100%)'
// const GRADIANT_DARK = 'linear-gradient(0deg, #101010 40%, #101010 50%, #171717 100%)' //'linear-gradient(0deg, #982f11 40%, #922d11 50%, #4c1709 100%)'


// function getNavBackgroundAndColor(theme: Theme) {
//   if (theme.palette.type === 'dark') {
//     return {
//       background: `radial-gradient(#757575d9, #8080809e, #313131f5, #b19d9e, #656060, #060606d9, #bbabacd9)`,
//       color: 'white'
//     }
//   }
//   return {
//     background: 'radial-gradient(#757575d9, #ffffff9e, #d8d5d5f5, #b19d9e, #c1c1c1, #ffffffd9, #bbabacd9)',
//     color: 'black'
//   }
// }

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    display: 'flex',
  },
  toolbar: {
    transition: 'width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    // background: theme.palette.type === 'dark' ? GRADIANT_DARK : GRADIANT,//'#af6800', //'#1b1f29', //theme.palette.grey[100],
    // color: theme.palette.common.white, //theme.palette.secondary.contrastText,
    // width: "100%",
    // [theme.breakpoints.up("md")]: {
    //   width: "calc(100% - 240px)",
    // },
    background: 'rgba(255,255,255,0.1)',
    backgroundClip: 'padding-box',
    // backdropFilter: 'blur(40px)',
    backdropFilter: 'blur(40px) contrast(1.5)',
    // WebkitBackdropFilter: 'blur(40px)',
    WebkitBackdropFilter: 'blur(40px) contrast(1.5)',
    border: '1px solid transparent',
    color: 'inherit'
  },
  titleContainer: {
    flexGrow: 1,
    display: 'flex',
    marginLeft: theme.spacing(1),
  },
  title: {
    marginLeft: theme.spacing(1),
    marginTop: 'auto',
    marginBottom: 'auto',
    letterSpacing: '0.06em',
    fontSize: '1.2rem',
    textShadow: '2px 2px 5px rgb(0 0 0 / 5%)',
    fontWeight: 400,
    textTransform: 'uppercase',

  },
  spacer: {
    flexGrow: 2,
  },
  separator: {
    flex: '1 1 auto',
  },
  navBackground: {
    // background: 'radial-gradient(#757575d9, #ffffff9e, #d8d5d5f5, #b19d9e, #c1c1c1, #ffffffd9, #bbabacd9)',
    // ...getNavBackgroundAndColor(theme),
    background: theme.palette.background.paper,
    color: theme.palette.getContrastText(theme.palette.background.paper),
    position: "absolute",
    left: 0,
    right: 0,
    height: 50
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
      <div className={classes.navBackground}>
        <AppBar position='fixed' className={classes.toolbar}>


          <Toolbar>
            <Link href="/">
              <a className={classes.titleContainer} >
                <Logo />
                <Typography className={classes.title} variant="h1" component='h1'>
                  Wilfred Lopez
            </Typography>
                {/* <Hidden only='xs'>
              </Hidden> */}
              </a>
            </Link>
            <div className={classes.separator} />
            {/* <Hidden only="xs">
            <Typography variant="caption" className={classes.title}>
            WilfredLopez.Net
            </Typography>
          </Hidden> */}
            {/* <SideItems /> */}
            <SideDrawer anchor="right" />
          </Toolbar>
        </AppBar>
      </div>
    </div>
  )
}
