

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Button,
    Menu,
    Icon
} from 'semantic-ui-react'

const MenuItems = ({ fixed }) => {

    return (
        <Fragment>
            <NavLink to="/" className="item" exact>Home</NavLink>
            <NavLink to="/projects" className="item" exact>Projects</NavLink>
            <NavLink to="/about" className="item" exact>Contact Me</NavLink>
            <Menu.Item position='right'>
                <Button as='a' inverted={!fixed} primary={fixed} href="https://github.com/wilfredlopez" target="_blank">
                    <Icon.Group size='large'>
                        <Icon name='github' />
                        <Icon corner name='add' />
                    </Icon.Group>
                    github
                </Button>
                <Button as='a' inverted={!fixed} style={{ marginLeft: '0.5em' }} href="https://twitter.com/wilfreddonaldlo?ref_src=twsrc%5Etfw" target="_blank">
                    <Icon.Group size='large'>
                        <Icon name='twitter' style={{ color: "#1da1f2" }} />
                        <Icon corner name='add' style={{ color: "#1da1f2" }} />
                    </Icon.Group>
                    @wilfreddonaldlo
                </Button>
            </Menu.Item>
        </Fragment>
    )
}

export default MenuItems
