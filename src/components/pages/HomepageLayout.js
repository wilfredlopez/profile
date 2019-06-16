import React, { useState, useEffect } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Image,
    Segment
} from 'semantic-ui-react'

import getWidth from './containers/getWidth'

import HomepageHeading from './partials/HomepageHeading'

const HomepageLayout = () => {
    const [mobile, setMobile] = useState(null)

    useEffect(() => {
        let deviceWith = getWidth()
        if (deviceWith <= 767) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }, [])

    console.log(mobile)

    return (
        <React.Fragment>
            {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
            <Segment style={{ padding: '8em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Im having this available for all you!
              </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Boilerplate combining Create-react-app, React-router-dom, React-redux(with Easy-peasy) and Semantic-UI.

                            </p><a href="https://github.com/wilfredlopez">See in Github</a>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                We Make Bananas That Can Dance
              </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                Yes that's right, you thought it was the stuff of dreams, but even bananas can be
                                bioengineered.
              </p>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <Image bordered rounded size='large' src='https://res.cloudinary.com/wlopez/image/upload/v1553345921/gp2nduoaesieuqpzvt6h.png' />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'>Check Them Out</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '0em' }} vertical>
                <Grid celled='internally' columns='equal' stackable>
                    <Grid.Row textAlign='center'>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "What a Company"
              </Header>
                            <p style={{ fontSize: '1.33em' }}>That is what they all say about us</p>
                        </Grid.Column>
                        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                "I shouldn't have gone with their competitor."
              </Header>
                            <p style={{ fontSize: '1.33em' }}>
                                <Image avatar src='https://res.cloudinary.com/wlopez/image/upload/v1553345921/gp2nduoaesieuqpzvt6h.png' />
                                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '8em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Breaking The Grid, Grabs Your Attention
          </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Instead of focusing on content creation and hard work, we have learned how to master the
                        art of doing nothing by providing massive amounts of whitespace and generic content that
                        can seem massive, monolithic and worth your attention.
          </p>
                    <Button as='a' size='large'>
                        Read More
          </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '3em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='/case'>Case Studies</a>
                    </Divider>

                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Did We Tell You About Our Bananas?
          </Header>
                    <p style={{ fontSize: '1.33em' }}>
                        Yes I know you probably disregarded the earlier boasts as non-sequitur filler content, but
                        it's really true. It took years of gene splicing and combinatory DNA research, but our
                        bananas can really dance.
          </p>
                    <Button as='a' size='large'>
                        I'm Still Quite Interested
          </Button>
                </Container>
            </Segment>
        </React.Fragment>
    )
}
export default HomepageLayout