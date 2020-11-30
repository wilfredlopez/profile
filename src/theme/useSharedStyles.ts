import { makeStyles, Theme, createStyles } from '@material-ui/core'

const useSharedStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: theme.palette.common.black,
    },
    noPaddingX: {
      paddingLeft: 0,
      paddingRight: 0,
    },
    minPaddingX: {
      paddingLeft: theme.spacing(0.5),
      paddingRight: theme.spacing(0.5),
    },
    flexCenter: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    homepageHeadingPaper: {
      background: theme.palette.type === 'dark' ? 'inherit' : '#b15558',
      color: theme.palette.background.paper,
      // paddingTop: '4rem',
      // paddingBottom: '2rem',
      // [theme.breakpoints.down('xs')]: {
      //   paddingTop: '5rem',
      // },
    },
    backToTopAncher: {
      display: 'inline-block',
      height: theme.mixins.toolbar.minHeight,
      marginBottom: '-1px',
      background: 'transparent',
      // marginBottom: '-10px',
      // [theme.breakpoints.down('sm')]: {
      //   marginBottom: '-1px',
      //   paddingBotton: '10px',
      // },
    },
    welcomeSection: {
      height: 'unset',
      [theme.breakpoints.up('sm')]: {
        height: '81vh',
      },
    },

    // backToTopAncher: {
    //   minHeight: 0,
    //   // marginBottom: '3.1rem',
    //   marginBottom: theme.spacing(1),
    //   [theme.breakpoints.down('xs')]: {
    //     // marginBottom: '3.78rem',
    //     marginBottom: theme.spacing(3.5),
    //   },
    //   [theme.breakpoints.up('sm')]: {
    //     // marginBottom: '1rem',
    //     marginBottom: theme.spacing(2),
    //   },
    // },
    constrainedSection: {
      marginLeft: 'auto',
      [theme.breakpoints.only('md')]: {
        // position: "absolute",
        // right: 0,
        minWidth: theme.breakpoints.values.md + 20,
        color: 'yellow',
        maxWidth: theme.breakpoints.values.md - 240,
      },
      [theme.breakpoints.up('lg')]: {
        maxWidth: theme.breakpoints.values.lg - 240,
        minWidth: theme.breakpoints.values.lg + 20,
        color: 'blue',
      },
    },
  })
)

export default useSharedStyles
