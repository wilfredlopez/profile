import React from "react";
import { Container, Grid, Typography, List, ListItem } from "@material-ui/core";
// import { NavLink } from "react-router-dom";
import NavLink from "next/link";
import {
  PrimaryBackgroundSection,
  StyledHtmlLink,
} from "../../shared";
import SocialList from "./SocialList";
import styled from "styled-components";

export const StyledNavLink = styled.a`
  color: hsla(0,0%,100%,.5);
  text-decoration: none;
  cursor: pointer;
  &.item{
    color: #ffffff;
    font-weight: 500;
  }
  &:hover{
    color: #ffffff;
    font-weight: 500;
  }
`;

const Title = styled(Typography)<{ component?: string }>`
  /* text-align: center; */
`;

const NonActiveLink = styled(StyledHtmlLink)`
    color: hsla(0,0%,100%,.5);
    &:hover{
    color: #ffffff;
    font-weight: 500;
  }
`;

const SiteFooter = () => {
  return (
    <PrimaryBackgroundSection style={{ padding: "1em 0em" }}>
      <Container>
        <Grid
          container
          justify="space-around"
          alignContent="center"
          alignItems="flex-start"
        >
          <Grid
            container
            item
            justify="space-around"
            alignContent="center"
            alignItems="flex-start"
          >
            <Grid item={true} xs={12} sm="auto">
              <List id="navbar">
                <ListItem>
                  <Title variant="h6" component="h1">Pages</Title>
                </ListItem>
                <ListItem>
                  <NavLink href="/">
                    <StyledNavLink className="item">
                      Home
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/projects">
                    <StyledNavLink>
                      Demo Projects
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/contact">
                    <StyledNavLink>
                      Contact
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm="auto">
              <List>
                <ListItem>
                  <Title variant="h6" component="h2">Demo Projects</Title>
                </ListItem>
                <ListItem>
                  <NonActiveLink
                    href="https://vapemusic.club"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Vape Music"
                  >
                    Vape Music
                  </NonActiveLink>
                </ListItem>
                <ListItem>
                  <NonActiveLink
                    href="https://shop-client.cubamc.now.sh/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    RetalMeNow
                  </NonActiveLink>
                </ListItem>
                <ListItem>
                  <NonActiveLink
                    href="https://wilfredexpensemanager.netlify.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Expenses Manager
                  </NonActiveLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm="auto">
              <List>
                <ListItem>
                  <Title variant="h6" component="h2">
                    Social Media
                  </Title>
                </ListItem>
                <SocialList />
              </List>
            </Grid>
            <Grid
              container
              item
              xs={12}
              sm={4}
              justify="center"
              alignContent="center"
            >
              <List>
                <ListItem>
                  <Typography variant="body1">
                    All Rights Reseved
                  </Typography>
                </ListItem>
                <ListItem>
                  <p>2020 &copy; Wilfred Lopez</p>
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </PrimaryBackgroundSection>
  );
};

export default SiteFooter;
