import React, {useState, useEffect} from 'react'
import {
    Button,
    Grid,
    Header,
    Segment,
    Icon
} from 'semantic-ui-react'

import SocialList from './partials/SocialList'
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
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        About
                       
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        Studied Tourism Bussiness Management in UAPA University. Experience in Customer Service, Web QA and Web Accessibility (Deque University Certified).
                          
              </p>
                      
                        <p style={{ fontSize: '1.33em' }}>
                        Currently working as a Web QA Analyst for a B2C Reail Store. Self educated in React, NodeJS, Express, MongoDB and other modern Javascript based languages.
              </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
         

                    <div style={{background: 'rgba(34, 103, 71, 0.84)', borderRadius: '1rem'}} className="p-3 mt-2">
                    <h3 className="text-white text-center">Follow Me!</h3>
                    <SocialList/>
                    </div>
                   
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center' >
                    <div className="p-3" style={{background: 'rgba(0, 0, 0, 0.85)', borderRadius: '1rem'}}>
                    <h3 className="text-center text-white">Contact Me</h3>
                        <Button size='large'><a href="mailto:cubamc@gmail.com">By Email <Icon name="mail"></Icon></a></Button>
                        <Button size='large'><a href="tel:1+5514442665">By Phone <Icon name="phone"></Icon></a></Button>
                    </div>
                    
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        <SocialMediaEmbeds mobile={mobile}/>
        {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
    </React.Fragment>
)}

export default About