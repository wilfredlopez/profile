import React, { useEffect } from 'react'
import {
    Button,
    Header,
    Segment,
    Container,
    Divider
} from 'semantic-ui-react'


const Projects = () => {
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }, [])
    return (

    <React.Fragment>
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
            <Button size='large'><a href="https://vapemusic.herokuapp.com">Vape Music</a></Button>
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
            <Button size='large'><a href="https://wilnotes.herokuapp.com" target="_blank" rel="noopener noreferrer">EasyTodos</a></Button>
        </Container>
    </Segment>
    </React.Fragment>
)}

export default Projects