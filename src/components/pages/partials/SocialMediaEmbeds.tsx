import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { Segment } from "components/shared";

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
];

interface Props {
}

const SocialMediaEmbeds: React.FC<Props> = (props) => {
  const contextRef = React.useRef<HTMLDivElement>(null);
  const facebookPosts = facebookPostsList.map((p) => {
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
        //@ts-ignore
        allowTransparency="true"
        allow="encrypted-media"
      >
      </iframe>
    );
  });

  return (
    <Segment style={{ padding: "1em" }}>
      <Typography
        variant="h2"
        style={{ fontSize: "2.5em" }}
        className="text-center"
      >
        Social Media
      </Typography>
      <Grid>
        <div ref={contextRef}>
          <Grid>
            <Grid
              item
              style={{ paddingBottom: "1em", paddingTop: "1em", zIndex: 1 }}
            >
              <React.Fragment>
                <Typography variant="h3" style={{ fontSize: "2em" }}>
                  <u>Facebook</u>
                </Typography>

                {facebookPosts}
              </React.Fragment>
            </Grid>

            <Grid item style={{ paddingBottom: "1em", paddingTop: "1em" }}>
              <Typography variant="h3" style={{ fontSize: "2em", zIndex: 0 }}>
                <u>Twitter</u>
              </Typography>
              <a
                className="twitter-timeline"
                href="https://twitter.com/WilfredDonaldLo?ref_src=twsrc%5Etfw"
              >
                Tweets by WilfredDonaldLo
              </a>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </Segment>
  );
};

export default SocialMediaEmbeds;
