import React from 'react'
import {
    Container,
    Grid,
    Header,
    List,
    Segment
} from 'semantic-ui-react'

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
                                <List.Item as='a' href="/">Home</List.Item>
                                <List.Item as='a' href="/projects">Demo Projects</List.Item>
                                <List.Item as='a' href="/contact">Contact</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={3}>
                            <Header inverted as='h4' content='Projects' />
                            <List link inverted>
                                <List.Item as='a'>Vape Music</List.Item>
                                <List.Item as='a'>EasyTodos</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <Header as='h4' inverted>
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
