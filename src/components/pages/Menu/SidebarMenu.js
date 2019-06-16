import React from 'react'
import {
    Button,
    Icon,
    Menu,
} from 'semantic-ui-react'

const SidebarMenu = ({ handleToggle }) => {
    return (
        <React.Fragment>
            <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={handleToggle}>
                    <Icon name='sidebar' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button as='a' inverted>
                        Log in
</Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        Sign Up
</Button>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default SidebarMenu

//props => handleToggle (handles toggle of menu)