import React from 'react'
import {
    List,
    Icon
} from 'semantic-ui-react'

const SocialList = () => {
    return (
        <React.Fragment>
            <List inverted>
                <List.Item>
                    <List.Content>
                        <List.Header as='a' href="https://github.com/wilfredlopez">
                            <Icon name="github square" />
                            Github
                </List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header as='a' href="https://twitter.com/wilfreddonaldlo">
                            <Icon name="twitter square" />
                            Twitter
            </List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header as='a' href="https://twitter.com/wilfreddonaldlo" >
                            <Icon name="facebook square" />
                            Facebook
                </List.Header>
                    </List.Content>
                </List.Item>
                <List.Item>
                    <List.Content>
                        <List.Header as='a' href="https://twitter.com/wilfreddonaldlo">
                            <Icon name="instagram" />
                            Instagram
    </List.Header>
                    </List.Content>
                </List.Item>
            </List>
        </React.Fragment>
    )
}

export default SocialList
