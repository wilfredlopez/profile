import { Fab, Paper, } from '@material-ui/core'
import { PropsWithChildren } from 'react'
import { ScrollTop } from './Layout/BackToTop'
import Navigation from './Layout/Navigation'
import SiteFooter from './footer/SiteFooter'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useSharedStyles from '@root/theme/useSharedStyles'
// import { GlassFab } from './shared'

interface Props { }




const PageWrapper = (props: PropsWithChildren<Props>) => {
  const classes = useSharedStyles()


  return (
    <>

      <Navigation />
      {/* //Needed for the scroll top to work. also margin to account for the fixed position of the Navigation.  */}
      <div
        className={classes.backToTopAncher}
        id='back-to-top-anchor'
      />

      <Paper component="main">

        {props.children}
      </Paper>

      <footer>
        <SiteFooter />
      </footer>

      <ScrollTop {...props}>
        <Fab color="inherit" size='small' aria-label='scroll back to top'>

          <KeyboardArrowUpIcon color="inherit" />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default PageWrapper
