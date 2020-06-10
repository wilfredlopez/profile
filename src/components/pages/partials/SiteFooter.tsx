import React from "react";
import { Container, Grid, Typography, List } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import { Segment } from "../../shared";
import SocialList from "./SocialList";

const SiteFooter = () => {
  return (
    <Segment style={{ padding: "5em 0em" }}>
      <Container>
        <Grid>
          <Grid>
            <Grid item={true}>
              <Typography variant="h4">Wilfred</Typography>
              <List>
                <NavLink to="/" exact className="item">
                  Home
                </NavLink>
                <NavLink to="/projects" exact className="item">
                  Demo Projects
                </NavLink>
                <NavLink to="/contact" exact className="item">
                  Contact
                </NavLink>
              </List>
            </Grid>
            <Grid>
              <Typography variant="h4" component="h4">Demo Projects</Typography>
              <List>
                <a
                  href="https://vapemusic.club"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vape Music
                </a>
                <a
                  href="https://shop-client.cubamc.now.sh/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  RetalMeNow
                </a>
                <a
                  href="https://wilfredexpensemanager.netlify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Expenses Manager
                </a>
              </List>
            </Grid>
            <Grid>
              <Typography variant="h4">
                Follow Me!
              </Typography>
              <SocialList />
            </Grid>
            <h4>
              All Rights Reseved
              <p>2020 &copy; Wilfred Lopez</p>
            </h4>
          </Grid>
        </Grid>
      </Container>
    </Segment>
  );
};

export default SiteFooter;
