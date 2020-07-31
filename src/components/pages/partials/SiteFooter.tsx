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
import { useRouter } from "next/router";
import { SECONDARY_COLOR } from "@root/styles/getTheme";

export const StyledNavLink = styled.a<{ isActive?: boolean }>`
  color: ${(props) => props.isActive ? SECONDARY_COLOR : "hsla(0,0%,100%,.5)"};
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
  const { pathname } = useRouter();
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
                    <StyledNavLink isActive={pathname === "/"}>
                      Home
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/projects">
                    <StyledNavLink isActive={pathname === "/projects"}>
                      Showcase Projects
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
                <ListItem>
                  <NavLink href="/contact">
                    <StyledNavLink isActive={pathname === "/contact"}>
                      Contact
                    </StyledNavLink>
                  </NavLink>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm="auto">
              <List>
                <ListItem>
                  <Title variant="h6" component="h2">Showcase Projects</Title>
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
                    href="https://wilfredlopez.net/"
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
