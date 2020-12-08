import { Fab, } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'
import { ScrollTop } from './Layout/BackToTop'
import Navigation from './Layout/Navigation'
import SiteFooter from './footer/SiteFooter'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'
import useSharedStyles from '@root/theme/useSharedStyles'
import { GlassFab } from './shared'

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

      {props.children}

      <footer>
        <SiteFooter />
      </footer>

      <ScrollTop {...props}>
        <GlassFab color="inherit" size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon color="inherit" />
        </GlassFab>
      </ScrollTop>
    </>
  )
}

export default PageWrapper
