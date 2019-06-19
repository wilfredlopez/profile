import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {
    Container,
    Menu,
    Responsive,
    Segment,
    Sidebar
} from 'semantic-ui-react'

import MenuItemsMobile from '../Menu/MenuItemsMobile'
import getWidth from './getWidth'

//custum
import MobileSidebar from '../Menu/MobileSidebar'


class MobileContainer extends Component {
    state = { sidebarOpened: null }

    handleSidebarHide = () => this.setState({ sidebarOpened: false })

    handleToggle = () => this.setState({ sidebarOpened: true })

    barToggle = () => { this.setState(prevState => { return { sidebarOpened: !prevState.sidebarOpened } }) }

    render() {
        const { children } = this.props
        const { sidebarOpened } = this.state

        return (
            <Responsive
                as={Sidebar.Pushable}
                getWidth={getWidth}
                maxWidth={Responsive.onlyMobile.maxWidth}
            >
                <Sidebar
                    as={Menu}
                    animation='push'
                    inverted
                    onHide={this.handleSidebarHide}
                    vertical
                    visible={sidebarOpened}
                >
                    <MenuItemsMobile handleOut={this.barToggle} />

                </Sidebar>

                <Sidebar.Pusher dimmed={sidebarOpened} style={{ minHeight: "100vh" }} onClick={sidebarOpened && this.barToggle}>
                    <Segment
                        inverted
                        textAlign='center'
                        style={{ /*minHeight: 350, */padding: '1em 0em' }}
                        vertical
                    >
                        <Container>
                            <MobileSidebar handleToggle={this.barToggle} />
                        </Container>

                    </Segment>
                    {children}
                </Sidebar.Pusher>
            </Responsive>
        )
    }
}

MobileContainer.propTypes = {
    children: PropTypes.node,
}

export default MobileContainer