import { Container, Grid, Typography, List, ListItem } from '@material-ui/core'
// import { NavLink } from "react-router-dom";
import NavLink from 'next/link'
// import { PrimaryBackgroundSection } from '../shared'
import SocialList from '../partials/SocialList'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import ProjectLinks from './ProjectLinks'
import { FooterSection } from '../shared/multi-use'
import { LINK_COLOR_HOVER, LINK_COLOR } from '../../theme/getTheme'

export const FooterNavLink = styled.a<{ isActive?: boolean }>`
  /* color: ${props => (props.isActive ? props.theme.colors.tertiary : 'inherit')}; */
  color: ${props => (props.isActive ? LINK_COLOR_HOVER : 'inherit')};
  /* font-weight: ${props => (props.isActive ? 'bold' : 'normal')}; */
  text-decoration: none;
  cursor: pointer;
  &.item {
    /* color: ${props => props.theme.colors.tertiary}; */
    color: ${LINK_COLOR};
    font-weight: 500;
  }
  &:hover {
    /* color: ${props => props.theme.colors.tertiary}; */
    color: ${LINK_COLOR_HOVER};
    font-weight: 500;
  }
`

const FooterTitle = styled(Typography) <{ component?: string }>`
  /* text-align: center; */
`

const SiteFooter = () => {
  const { pathname } = useRouter()
  return (
    <FooterSection style={{ padding: '1em 0em' }}>
      <Container>
        <Grid
          container
          justify='space-around'
          alignContent='center'
          alignItems='flex-start'
        >
          <Grid
            container
            item
            justify='space-around'
            alignContent='center'
            alignItems='flex-start'
          >
            <Grid item={true} xs={12} sm='auto'>
              <List id='navbar'>
                <ListItem>
                  <FooterTitle variant='h6' component='h1'>
                    Pages
                  </FooterTitle>
                </ListItem>
                <ListItem>
                  <NavLink href='/'>
                    <FooterNavLink isActive={pathname === '/'}>
                      Home
                    </FooterNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href='/projects'>
                    <FooterNavLink isActive={pathname === '/projects'}>
                      Featured Projects
                    </FooterNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href='/contact'>
                    <FooterNavLink isActive={pathname === '/contact'}>
                      Contact
                    </FooterNavLink>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm='auto'>
              <List>
                <ListItem>
                  <FooterTitle variant='h6' component='h2'>
                    Featured Projects
                  </FooterTitle>
                </ListItem>
                <ProjectLinks />
              </List>
            </Grid>
            <Grid item xs={12} sm='auto'>
              <List>
                <ListItem>
                  <FooterTitle variant='h6' component='h2'>
                    Social
                  </FooterTitle>
                </ListItem>
                <SocialList />
              </List>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={4}
              justify='center'
              alignContent='center'
            >
              <List>
                <ListItem>
                  <Typography variant='body1'>All Rights Reseved</Typography>
                </ListItem>
                <ListItem>
                  <p>2020 &copy; Wilfred Lopez</p>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </FooterSection>
  )
}

export default SiteFooter
