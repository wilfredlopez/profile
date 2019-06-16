

import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import {
    Button,
    Menu,
} from 'semantic-ui-react'

const MenuItems = ({ fixed }) => {

    return (
        <Fragment>
            <NavLink to="/" className="item" exact>
                Home
    </NavLink>
            <NavLink to="/projects" className="item" exact>Projects</NavLink>
            <NavLink to="/about" className="item" exact>About</NavLink>
            <Menu.Item position='right'>
                <Button as='a' inverted={!fixed}>
                    Log in
    </Button>
                <Button as='a' inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                    Sign Up
    </Button>
            </Menu.Item>
        </Fragment>
    )
}

export default MenuItems
