import { Fab } from '@material-ui/core'
import React, { PropsWithChildren } from 'react'
import { ScrollTop } from './Layout/BackToTop'
import Navigation from './Layout/Navigation'
import SiteFooter from './footer/SiteFooter'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp'

interface Props {}

const PageWrapper = (props: PropsWithChildren<Props>) => {
  return (
    <>
      <Navigation />
      {/* //Needed for the scroll top to work. also margin to account for the fixed position of the Navigation.  */}
      <div
        id='back-to-top-anchor'
        style={{ minHeight: 0, marginBottom: '3.1rem' }}
      />

      {props.children}

      <footer>
        <SiteFooter />
      </footer>

      <ScrollTop {...props}>
        <Fab color='secondary' size='small' aria-label='scroll back to top'>
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  )
}

export default PageWrapper
