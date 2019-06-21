import React, { useState, useEffect } from 'react'
import {
    Button,
    Grid,
    Header,
    Segment,
    Icon,
    List
} from 'semantic-ui-react'

import HomepageHeading from './partials/HomepageHeading'
import getWidth from './containers/getWidth'
import SocialMediaEmbeds from './partials/SocialMediaEmbeds'

const About = () => {
    const [mobile, setMobile] = useState(null)
    let deviceWith = getWidth()
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])

    useEffect(() => {

        if (deviceWith <= 767) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }, [deviceWith])

    return (
        <React.Fragment>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h3' style={{
                                fontSize: '2em', textAlign:
                                    'center'
                            }}>
                                About
              </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <p style={{ fontSize: '1.33em' }}>Wilfred D. Lopez, from Dominican Republic. Lives in Garfield, NJ, USA. Studied Tourism Bussiness Management in UAPA University.
                        Experience in Customer Service, Workforce Management, Web Quality Assurance and Accessibility. </p>

                            <p style={{ fontSize: '1.33em' }}>Currently working as a QA Analyst for a B2C Reail Store.
                        Self educated in React, NodeJS, Express, MongoDB and other modern Javascript based languages.</p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <List style={{ fontSize: '1.33em' }}>
                                <p>Excellent communication skills, organization skills, and excellent attention to detail.</p>
                                <p>Strong knowledge of MS Excel.</p>
                                <p>Dedicated, passionate and reliable worker.</p>
                                <p>Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA). </p>
                            </List>


                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center' >
                            <div className="p-3" style={{ background: 'rgba(0, 0, 0, 0.85)', borderRadius: '1rem' }}>
                                <h3 className="text-center text-white">Contact Me</h3>
                                <Button size='large'><a href="mailto:cubamc@gmail.com">By Email <Icon name="mail"></Icon></a></Button>
                                <Button size='large'><a href="tel:1+5514442665">By Phone <Icon name="phone"></Icon></a></Button>
                            </div>

                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <SocialMediaEmbeds mobile={mobile} />
            {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
        </React.Fragment>
    )
}

export default About