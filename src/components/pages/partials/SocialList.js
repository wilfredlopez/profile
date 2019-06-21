import React from 'react'
import {
    List,
    Icon
} from 'semantic-ui-react'

const socialMedia = [
    { label: 'Github', icon: 'github square', url: "https://github.com/wilfredlopez" },
    { label: 'YouTube', icon: 'youtube', url: "https://www.youtube.com/channel/UCbJgT2f4AXpLxE0f9n-GCBg?view_as=subscriber" },
    { label: 'Twitter', icon: 'twitter square', url: "https://twitter.com/wilfreddonaldlo" },
    { label: 'Facebook', icon: 'facebook square', url: "https://www.facebook.com/WilfredDonaldLo" },
    { label: 'Instagram', icon: 'instagram', url: "https://www.instagram.com/wilfredlopez/" },
]

const SocialList = () => {
    const listItems = socialMedia.map(item => {
        return (
            <List.Item>
                <List.Content>
                    <List.Header as='a' href={item.url} target="_blank" rel="noopener noreferrer" role="link">
                        <Icon name={item.icon} />
                        {item.label}
                    </List.Header>
                </List.Content>
            </List.Item>
        )
    })
    return (
        <React.Fragment>
            <List inverted>
                {listItems}
            </List>
        </React.Fragment>
    )
}

export default SocialList
