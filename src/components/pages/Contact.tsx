import React, { useEffect } from "react";
import { Button, Grid, Typography, List, Container } from "@material-ui/core";
import {
  MailOutline as MailIcon,
  Phone as PhoneIcon,
} from "@material-ui/icons";
import HomepageHeading from "./partials/HomepageHeading";
import { Segment, StyledHtmlLink } from "components/shared";
import styled from "styled-components";

const Centerer = styled.span`
      display: flex;
    justify-content: center;
    align-items: center;
`;

const Contact = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      <Container>
        <Segment style={{ padding: "2em 0em" }}>
          <Grid container justify="center" alignContent="center">
            <Typography
              variant="h3"
              style={{
                fontSize: "2em",
                textAlign: "center",
              }}
            >
              Contact
            </Typography>
          </Grid>
        </Segment>
        <Segment style={{ padding: "0em 0em" }}>
          <Grid container>
            <Grid>
              <Grid item>
                <p style={{ fontSize: "1.33em" }}>
                  Wilfred D. Lopez, from Dominican Republic. Lives in Garfield,
                  NJ, USA. Studied Tourism Bussiness Management in UAPA
                  University. Self educated in Typescript, React, NodeJS,
                  Express, MongoDB, Apollo-QraphQL, HTML, CSS and other modern
                  Javascript based languages.{" "}
                </p>

                <p style={{ fontSize: "1.33em" }}>
                  Currently working as a QA Analyst for a B2C Reail Store.
                  Experience in Customer Service, Workforce Management, Web
                  Quality Assurance and Accessibility.
                </p>
              </Grid>
              <Grid>
                <List style={{ fontSize: "1.33em" }}>
                  <p>
                    Excellent communication skills, organization skills, and
                    excellent attention to detail.
                  </p>
                  <p>
                    Strong knowledge of MS Excel, Jira, Salesforce Commerce
                    Cloud, and others.
                  </p>
                  <p>Dedicated, passionate and reliable worker.</p>
                  <p>
                    Proficient knowledge of accessibility standards (Section
                    508/WCAG 2.0 Level A and AA).{" "}
                  </p>
                </List>
              </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
              <h3 className="text-center">Contact Me</h3>
            </div>
            <Grid container>
              <Grid item xs={6}>
                <div>
                  <Button size="large" color="secondary">
                    <StyledHtmlLink href="mailto:cubamc@gmail.com">
                      <Centerer>
                        <span>
                          By Email
                        </span>

                        <MailIcon />
                      </Centerer>
                    </StyledHtmlLink>
                  </Button>
                </div>
              </Grid>
              <Grid item xs={6}>
                <Button size="large" color="secondary">
                  <StyledHtmlLink href="tel:1+5514442665">
                    <Centerer>
                      <span>
                        By Phone
                      </span>
                      <PhoneIcon />
                    </Centerer>
                  </StyledHtmlLink>
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Segment>
      </Container>
      <HomepageHeading />
    </React.Fragment>
  );
};

export default Contact;
