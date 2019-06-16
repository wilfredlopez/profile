import React from 'react'
import {
    Button,
    Grid,
    Header,
    Segment
} from 'semantic-ui-react'


const Projects = () => (
    <React.Fragment>
        <Segment style={{ padding: '2em 0em' }} vertical>
            <Grid container stackable verticalAlign='middle'>
                <Grid.Row>
                    <Grid.Column>
                        <Header as='h3' style={{
                            fontSize: '2em', textAlign:
                                'center'
                        }}>
                            Projects
              </Header>

                        <div>
                            <p>Vape Music</p>

                            <p>EasyTodos</p>

                        </div>

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

export default Projects