import React from 'react'
import {
    Button,
    Grid,
    Header,
    Segment
} from 'semantic-ui-react'


const About = () => (
    <React.Fragment>
        <Segment style={{ padding: '8em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column width={8}>
                        <Header as='h3' style={{ fontSize: '2em' }}>
                        About
                       
              </Header>
                        <p style={{ fontSize: '1.33em' }}>
                        @Github - Wilfred Lopez 2019
                      
              </p>
                      
                        <p style={{ fontSize: '1.33em' }}>
                        
              </p>
                    </Grid.Column>
                    <Grid.Column floated='right' width={6}>
                    Boilerplate combining Create-react-app, React-router-dom, React-redux(with Easy-peasy) and Semantic-UI.
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row>
                    <Grid.Column textAlign='center'>
                        <Button size='huge'><a href="https://github.com/wilfredlopez">Check it out</a></Button>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    </React.Fragment>
)

export default About