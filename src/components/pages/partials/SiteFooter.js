import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import SocialList from './SocialList'

const SiteFooter = () => {
    return (
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
            <Container>
                <Grid divided inverted stackable>
                    <Grid.Row>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Wilfred' />
                            <List link inverted>
                                <Link to='/' className="item">Home</Link>
                                <Link to='/projects' className="item">Projects</Link>
                                <Link to='/about' className="item">About</Link>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Projects' />
                            <List link inverted>
                                <List.Item as='a' href="https://lmusic.herokuapp.com" target="_blank" rel="noopener noreferrer" role="link">Vape Music</List.Item>
                                <List.Item as='a' href="https://wilnotes.herokuapp.com" target="_blank" rel="noopener noreferrer" role="link">EasyTodos</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted >
                                Follow Me!
                </Header>
                            <SocialList />

                        </Grid.Column>
                        <h4>All Rights Reseved
                        <p>2019 &copy; Wilfred Lopez</p></h4>
                    </Grid.Row>
                </Grid>
            </Container>
        </Segment>
    )
}

export default SiteFooter
