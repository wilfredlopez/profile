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
                        <Icon.Group >
                            <Icon name='github' />
                            <Icon corner name='add' />
                        </Icon.Group>
                        github
                    </Button>
                    <Button as='a' inverted style={{ marginLeft: '0.5em' }}>
                        <Icon.Group>
                            <Icon name='twitter' style={{ color: "#1da1f2" }} />
                            <Icon corner name='add' style={{ color: "#1da1f2" }} />
                        </Icon.Group>
                        @wilfreddonaldlo
                    </Button>
                </Menu.Item>
            </Menu>
        </React.Fragment>
    )
}

export default SidebarMenu

//props => handleToggle (handles toggle of menu)