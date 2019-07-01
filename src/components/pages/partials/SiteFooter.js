import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react'
import { NavLink } from 'react-router-dom'

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
                                <NavLink to='/' exact className="item" >Home</NavLink>
                                <NavLink to='/projects' exact className="item">Projects</NavLink>
                                <NavLink to='/contact' exact className="item">Contact</NavLink>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Projects' />
                            <List link inverted>
                                <List.Item as='a' href="https://vapemusic.herokuapp.com" target="_blank" rel="noopener noreferrer" role="link">Vape Music</List.Item>
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
