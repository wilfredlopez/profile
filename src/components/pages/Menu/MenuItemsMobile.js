

import React, { Fragment } from 'react'
import {
    Menu,
} from 'semantic-ui-react'

const MenuItems = ({ fixed }) => {

    return (
        <Fragment>
            <Menu.Item as='a' active>Home</Menu.Item>
            <Menu.Item as='a'>Work</Menu.Item>
            <Menu.Item as='a'>Company</Menu.Item>
            <Menu.Item as='a'>Careers</Menu.Item>
            <Menu.Item as='a'>Log in</Menu.Item>
            <Menu.Item as='a'>Sign Up</Menu.Item>
        </Fragment>
    )
}

export default MenuItems
