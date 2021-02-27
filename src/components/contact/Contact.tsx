import { Segment, StyledHtmlLink } from '@components/shared'
import Logo from '@components/shared/Logo'
import { Button, Container, Grid, Typography } from '@material-ui/core'
import { MailOutline as MailIcon, Phone as PhoneIcon } from '@material-ui/icons'
import { CONTACT_EMAIL } from '@root/constants'
import { usePagesContext } from '@root/context/PagesContext'
import { useEffect, Fragment } from 'react'
import styled from 'styled-components'

const Centerer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`

const Contact = () => {
  const { changePage } = usePagesContext()
  useEffect(() => {
    changePage('Contact')
  }, [changePage])

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])

  return (
    <Fragment>


      <Container maxWidth='md'>

        <Segment>
          <Grid container>
            {/* <Grid container>
              <Grid item>
                <Paragraph>
                  Wilfred D. Lopez, from Dominican Republic. Lives in Garfield,
                  NJ, USA. Studied Tourism Bussiness Management in UAPA
                  University. Self educated in Typescript, React, NodeJS,
                  Express, MongoDB, Apollo-QraphQL, HTML, CSS and other modern
                  Javascript based languages.{' '}
                </Paragraph>

                <Paragraph>
                  Experience in Customer Service, Workforce Management, Web
                  Quality Assurance and Accessibility.
                </Paragraph>
              </Grid>
              <Grid>
                <List>
                  <Paragraph>
                    Excellent communication skills, organization skills, and
                    excellent attention to detail.
                  </Paragraph>
                  <Paragraph>
                    Strong knowledge of MS Excel, Jira, Salesforce Commerce
                    Cloud, and others.
                  </Paragraph>
                  <Paragraph>
                    Dedicated, passionate and reliable worker.
                  </Paragraph>
                  <Paragraph>
                    Proficient knowledge of accessibility standards (Section
                    508/WCAG 2.0 Level A and AA).{' '}
                  </Paragraph>
                </List>
              </Grid>
            </Grid> */}
            <div style={{ width: '100%' }}>
              <Typography
                className="caption-text"
                style={{ textTransform: "uppercase", fontSize: '1.7rem', marginTop: "1.5rem", }}
                component="h1"
                align="center"
                variant="h5"
                gutterBottom>Contact</Typography>
              <br />
            </div>
            <Grid container>
              <Grid item xs={12}>
                <Logo height={175} width={175} />
                <br />
                <br />
              </Grid>
              <Grid item xs={6}>
                <div style={{ textAlign: 'right' }}>
                  <Button size='large' color='secondary'>
                    <StyledHtmlLink
                      href={`mailto:${CONTACT_EMAIL}`}
                      title='By Email'
                    >
                      <Centerer>
                        <span>By Email</span>

                        <MailIcon />
                      </Centerer>
                    </StyledHtmlLink>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6} style={{ textAlign: 'left' }}>
                <Button size='large' color='secondary'>
                  <StyledHtmlLink href='tel:1+5514442665' title='By Phone'>
                    <Centerer>
                      <span>By Phone</span>
                      <PhoneIcon />
                    </Centerer>
                  </StyledHtmlLink>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Segment>
      </Container>
    </Fragment>
  )
}

export default Contact
