import React, { Component } from "react"
import { Grid, Header, Segment, Sticky, Ref } from "semantic-ui-react"

const facebookPostsList = [
  {
    url:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161583476580497&width=500",
    height: "180",
  },
  //   {
  //     url:
  //       "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161487251325497%3A0&width=500",
  //     height: "605",
  //   },
  {
    url:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10161052973195497&width=500",
    height: "174",
  },
  {
    url:
      "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FWilfredDonaldLo%2Fposts%2F10162092215695497&width=500",
    height: "210",
  },
]

export default class SocialMediaEmbeds extends Component {
  constructor(props) {
    super(props)
    this.contextRef = React.createRef()
    this.facebookPostsList = facebookPostsList
  }

  render() {
    const facebookPosts = this.facebookPostsList.map(p => {
      return (
        <iframe
          key={p.url}
          title="Facebook Post"
          src={p.url}
          width="500"
          height={p.height}
          style={{
            border: "none",
            overflow: "hidden",
            minWidth: "100%",
            maxWidth: "100%",
          }}
          scrolling="no"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      )
    })
    return (
      <Segment style={{ padding: "1em" }} vertical>
        <Header as="h2" style={{ fontSize: "2.5em" }} className="text-center">
          Social Media
        </Header>
        <Grid celled="internally" columns="equal" stackable>
          <Ref innerRef={this.contextRef}>
            <Grid.Row textAlign="center">
              <Grid.Column
                style={{ paddingBottom: "1em", paddingTop: "1em", zIndex: "1" }}
              >
                {!this.props.mobile ? (
                  <React.Fragment>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      <u>Facebook</u>
                    </Header>

                    <Sticky offset={80} context={this.contextRef}>
                      {facebookPosts}
                    </Sticky>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Header as="h3" style={{ fontSize: "2em" }}>
                      <u>Facebook</u>
                    </Header>

                    {facebookPosts}
                  </React.Fragment>
                )}
              </Grid.Column>

              <Grid.Column style={{ paddingBottom: "1em", paddingTop: "1em" }}>
                <Header as="h3" style={{ fontSize: "2em", zIndex: "0" }}>
                  <u>Twitter</u>
                </Header>
                <a
                  className="twitter-timeline"
                  href="https://twitter.com/WilfredDonaldLo?ref_src=twsrc%5Etfw"
                >
                  Tweets by WilfredDonaldLo
                </a>
              </Grid.Column>
            </Grid.Row>
          </Ref>
        </Grid>
      </Segment>
    )
  }
}
