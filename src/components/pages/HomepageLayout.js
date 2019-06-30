import React, { useState, useEffect } from 'react'
import {
    Button,
    Container,
    Divider,
    Grid,
    Header,
    Segment,
    List,
    Icon
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import getWidth from './containers/getWidth'

import HomepageHeading from './partials/HomepageHeading'
import SocialMediaEmbeds from './partials/SocialMediaEmbeds'

const education = [
    { icon: 'react', label: 'React' },
    { icon: 'node js', label: 'NodeJS with Express and MongoDB' },
    { icon: 'universal access', label: 'Web Accessibility' },
    { icon: 'js', label: 'Vanilla Javascript' },
    { icon: 'sass', label: 'SASS / CSS3' },
    { icon: 'html5', label: 'HTML 5' },
    { icon: 'cloud', label: 'Salesforce Commerce Cloud' },
    { icon: 'calendar alternate outline', label: 'Workforce Management' },
    { icon: 'microsoft', label: 'Microsoft Office, Excel VBA' },
    { icon: 'talk', label: 'Bilingual (English, Spanish)' }
]

const experiences = [
    { icon: 'marker', label: 'Web Production QA Analyst', location: 'Century 21 Stores', isCurrent: true },
    { icon: 'marker', label: 'Suppor Center Specialist', location: 'Century 21 Stores', isCurrent: false },
    { icon: 'marker', label: 'Mission Control Specialist', location: 'Teleperformance', isCurrent: false },
    { icon: 'marker', label: 'Customer Service Representative', location: 'Teleperformance', isCurrent: false },
    { icon: 'marker', label: 'Call Center QA Analyst', location: 'BM Teleservices', isCurrent: false }
]





const HomepageLayout = () => {
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
                                Experiences</Header>
                            <h3>Job Experience</h3>

                            <List verticalAlign='middle' animated size="small">
                                {experienceList}
                            </List>               </Grid.Column>
                        <Grid.Column floated='right' width={6}>

                            <Header as='h2' style={{ fontSize: '2em' }}>
                                Skills</Header>
                            <List divided verticalAlign='middle' animated size="large">
                                {educationList}
                            </List>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <List size="large" as="ul" style={{ fontSize: '1.3em' }}>
                                <List.Item as="li">Proficient knowledge of HTML 5, CSS 3, JavaScript.</List.Item>
                                <List.Item as="li">Proficient and experieced with MS Excel.</List.Item>
                                <List.Item as="li">Excellent communication skills, organization skills, and excellent attention to detail.</List.Item>
                                <List.Item as="li">Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA). </List.Item>
                                <List.Item as="li">Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).</List.Item>
                                <List.Item as="li">6 years of call center and Workforce Management experience.</List.Item>
                                <List.Item as="li">Proficient experience in QA testing methodology.</List.Item>
                                <List.Item as="li">Proven ability to document issues and bugs.</List.Item>
                            </List>
                        </Grid.Column>
                        <Grid.Column floated='right' width={6} className="text-center">
                            <Button size='huge' ><Link to="/projects">Look at my Projects</Link></Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>

            <Segment style={{ padding: '2em 0em' }} vertical>
                <Container text>
                    <Divider
                        as='h4'
                        className='header'
                        horizontal
                        style={{ margin: '1em 0em', textTransform: 'uppercase' }}
                    >
                        <a href='https://vapemusic.herokuapp.com' target="_blank" rel="noopener noreferrer">Vape Music</a>
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
                        href="https://vapemusic.herokuapp.com">
                        Vape Music
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
                        <p> EasyTodos is a simple solution to keep track of your daily tasks.This app is great to manage your daily job or just to have a place to keep relevant information that regards to a particular task.
                    </p>
                        <p>All todos have a "Notes" section that can be styled and edited very easy. You can filter the list, mark a todo as completed or find a completed todo an have it listed back again.
                    </p>
                    </div>
                    <Button as='a'
                        size='large'
                        className="mt-2"
                        href="https://vapemusic.herokuapp.com">
                        EasyTodos
                </Button>
                </Container>
            </Segment>

            <SocialMediaEmbeds mobile={mobile} />

        </React.Fragment>
    )
}
export default HomepageLayout

