import React, { useState, useEffect, useRef } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Segment,
    List,
    Icon,
    Sticky,
    Ref
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import getWidth from './containers/getWidth'

import HomepageHeading from './partials/HomepageHeading'

const education = [
    { icon: 'react', label: 'React' },
    { icon: 'node js', label: 'NodeJS with Express and MongoDB' },
    { icon: 'universal access', label: 'Web Accessibility' },
    { icon: 'js', label: 'Vanilla Javascript' },
    { icon: 'sass', label: 'SASS' },
    { icon: 'html5', label: 'HTML 5' },
    { icon: 'calendar alternate outline', label: 'Workforce Management' },
    { icon: 'microsoft', label: 'Microsoft Office' },
    { icon: 'talk', label: 'Bilingual (English, Spanish)' }
]

const experiences = [
    { icon: 'marker', label: 'Web Production QA Analyst', location: 'Century 21 Stores', isCurrent: true },
    { icon: 'marker', label: 'Suppor Center Specialist', location: 'Century 21 Stores', isCurrent: false },
    { icon: 'marker', label: 'Mission Control Specialist', location: 'Teleperformance', isCurrent: false },
    { icon: 'marker', label: 'Customer Service Representative', location: 'Teleperformance', isCurrent: false },
    { icon: 'marker', label: 'Call Center QA Analyst', location: 'BM Teleservices', isCurrent: false }
]


const facebookPostsList = [
    { url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161583476580497&width=500", height: '180' },
    { url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161487251325497%3A0&width=500", height: '605' },
    { url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161052973195497&width=500", height: '174' },
    { url: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10162092215695497&width=500", height: '210' }
]





const HomepageLayout = () => {
    const [mobile, setMobile] = useState(null)
    const contextRef = useRef()
    let deviceWith = getWidth()
    useEffect(() => {

        if (deviceWith <= 767) {
            setMobile(true)
        } else {
            setMobile(false)
        }
    }, [deviceWith])


    const facebookPosts = facebookPostsList.map((p) => {
        return (
            <iframe
                key={p.url}
                title="Facebook Post"
                src={p.url}
                width="500" height={p.height}
                style={{ border: 'none', overflow: "hidden", minWidth: '100%', maxWidth: '100%' }}
                scrolling="no"
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media">
            </iframe>
        )
    })

    const educationList = education.map((edu => {
        return (
            <List.Item key={edu.label}>
                <Icon name={edu.icon} />
                <List.Content>
                    <List.Header as='p' >{edu.label}</List.Header>
                </List.Content>
            </List.Item>
        )
    }))

    const experienceList = experiences.map((exp => {
        return (
            <List.Item key={exp.label}>
                <Icon name={exp.icon} />
                <List.Content>
                    <List.Header as='p'>
                        <Header as="span" color={exp.isCurrent ? 'teal' : 'grey'}>
                            {exp.label} {exp.isCurrent && '(Actual)'}
                        </Header>
                    </List.Header>
                    {exp.location}
                </List.Content>
            </List.Item>
        )
    }))
    return (
        <React.Fragment>
            {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
            <Segment style={{ padding: '2em 0em' }} vertical>
                <Grid container stackable verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Header as='h1' style={{ fontSize: '2em' }}>
                                Experiences
              </Header>
                            <h3>Job Experience</h3>

                            <List verticalAlign='middle' animated size="small">
                                {experienceList}
                            </List>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6}>
                            <h2>Education</h2>
                            <List divided verticalAlign='middle' animated>
                                {educationList}
                            </List>

                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column textAlign='center'>
                            <Button size='huge'><Link to="/projects">Look at my projects</Link></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '2em 0em' }} vertical>
                <Container text>
                    <Header as='h3' style={{ fontSize: '2em' }} className="text-center" id="demo-projects">Demo  Projects </Header>
                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='https://lmusic.herokuapp.com' target="_blank" rel="noopener noreferrer">Vape Music</a>
                    </Divider>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        Vape Music - Latin Music Download
                        </Header>
                    <div style={{ fontSize: '1.33em' }}>
                        <p>Its a Website for promotional music download. combined with a Backend API that can server song lists from a database including pagination.</p>
                        <p>The admin can add/remove, upload image and audio directly from the site.</p>
                        <p>Songs are distributed by categories, users can sort, view individual songs and download music.</p>
                    </div>
                    <Button as='a'
                        size='large'
                        href="https://lmusic.herokuapp.com">
                        Check it out
                    </Button>

                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='https://wilnotes.herokuapp.com' target="_blank" rel="noopener noreferrer">EasyTodos</a>
                    </Divider>
                    <Header as='h3' style={{ fontSize: '2em' }}>
                        EasyTodos - Save your todo list
                    </Header>
                    <div style={{ fontSize: '1.33em' }}>
                        <p>  EasyTodos is a simple solution to keep track of your daily tasks.

    This app is great to manage your daily job or just to have a place to keep relevant information that regards to a particular task.
</p><p>
                            All todos have a "Notes" section that can be styled and edited very easy. You can filter the list, mark a todo as completed or find a completed todo an have it listed back again.
</p>
                    </div>
                    <Button as='a'
                        size='large'
                        className="mt-2"
                        href="https://lmusic.herokuapp.com">
                        Check it out
                </Button>
                </Container>
            </Segment>


            <Segment style={{ padding: '0em' }} vertical>
                <h1 className="text-center display-3">Social Media</h1>
                <Grid celled='internally' columns='equal' stackable>
                    <Ref innerRef={contextRef}>
                        <Grid.Row textAlign='center'>
                            <Grid.Column style={{ paddingBottom: '1em', paddingTop: '1em', zIndex: '1' }}>
                                {!mobile ?
                                    <React.Fragment>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            <u>Facebook</u>
                                        </Header>

                                        <Sticky offset={80} context={contextRef}>
                                            {facebookPosts}
                                        </Sticky></React.Fragment> :

                                    <React.Fragment>
                                        <Header as='h3' style={{ fontSize: '2em' }}>
                                            <u>Facebook</u>
                                        </Header>

                                        {facebookPosts}

                                    </React.Fragment>
                                }


                            </Grid.Column>

                            <Grid.Column style={{ paddingBottom: '1em', paddingTop: '1em' }}>
                                <Header as='h3' style={{ fontSize: '2em', zIndex: '0' }}>

                                    <u>Twitter</u>

                                </Header>
                                <a className="twitter-timeline" href="https://twitter.com/WilfredDonaldLo?ref_src=twsrc%5Etfw">
                                    Tweets by WilfredDonaldLo
                            </a>

                            </Grid.Column>

                        </Grid.Row>
                    </Ref>
                </Grid>
            </Segment>
        </React.Fragment>
    )
}
export default HomepageLayout