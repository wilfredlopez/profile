import PropTypes from 'prop-types'
import React from 'react'
import {
    Button,
    Container,
    Header,
    Icon,
    Responsive,
    Sidebar,
    Segment
} from 'semantic-ui-react'

import Counter from '../../Utils/Counter'
import getWidth from '../containers/getWidth'


const HomepageHeading = ({ mobile }) => (
    <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={mobile && Responsive.onlyMobile.maxWidth}
        minWidth={!mobile ? Responsive.onlyTablet.minWidth : ''}
    >
        <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 500, padding: '1em 0em' }}
            vertical
        >
            <Container text>
                <Header
                    as='h1'
                    content='Wilfred React Template'
                    inverted
                    style={{
                        fontSize: mobile ? '2em' : '4em',
                        fontWeight: 'normal',
                        marginBottom: 0,
                        marginTop: mobile ? '1.5em' : '1em',
                    }}
                />
                <Header
                    as='h2'
                    content='Simple Counter with Easy Peasy (redux)'
                    inverted
                    style={{
                        fontSize: mobile ? '1.5em' : '1.7em',
                        fontWeight: 'normal',
                        marginTop: mobile ? '0.5em' : '1em',
                    }}
                />

                <Counter />
                <br />
                <Button primary size='huge'>
                    <a href="https://github.com/wilfredlopez">Get from Github</a>
                    <Icon name='right arrow' />
                </Button>
            </Container>
        </Segment>
    </Responsive>
)

HomepageHeading.propTypes = {
    mobile: PropTypes.bool,
}

export default HomepageHeading