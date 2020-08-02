import React, { useEffect } from "react";
import { Button, Grid, Typography, List, Container } from "@material-ui/core";
import {
  MailOutline as MailIcon,
  Phone as PhoneIcon,
} from "@material-ui/icons";
import { Segment, StyledHtmlLink } from "@components/shared";
import styled from "styled-components";
import { usePagesContext } from "@root/context/PagesContext";

const Centerer = styled.span`
      display: flex;
    justify-content: center;
    align-items: center;
`;

const Paragraph = styled.p`
  margin-top: 0;
  margin-bottom: 5px;
  font-size: 1.33em;
  text-align:left;
`;

const Contact = () => {
  const { changePage } = usePagesContext();
  useEffect(() => {
    changePage("Contact");
  }, [changePage]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <React.Fragment>
      <Container maxWidth="md">
        <Segment style={{ padding: "2em 0em" }}>
          <Grid container justify="center" alignContent="center">
            <Typography
              variant="h3"
              component="h2"
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
                <Paragraph>
                  Wilfred D. Lopez, from Dominican Republic. Lives in Garfield,
                  NJ, USA. Studied Tourism Bussiness Management in UAPA
                  University. Self educated in Typescript, React, NodeJS,
                  Express, MongoDB, Apollo-QraphQL, HTML, CSS and other modern
                  Javascript based languages.{" "}
                </Paragraph>

                <Paragraph>
                  Experience in Customer Service, Workforce Management, Web
                  Quality Assurance and Accessibility.
                </Paragraph>
              </Grid>
              <Grid>
                <List>
                  <Paragraph>
                    Excellent communication skills, organization skills, and
                    excellent attention to detail.
                  </Paragraph>
                  <Paragraph>
                    Strong knowledge of MS Excel, Jira, Salesforce Commerce
                    Cloud, and others.
                  </Paragraph>
                  <Paragraph>
                    Dedicated, passionate and reliable worker.
                  </Paragraph>
                  <Paragraph>
                    Proficient knowledge of accessibility standards (Section
                    508/WCAG 2.0 Level A and AA).{" "}
                  </Paragraph>
                </List>
              </Grid>
            </Grid>
            <div style={{ width: "100%" }}>
              <h3 className="text-center">Contact Me</h3>
            </div>
            <Grid container>
              <Grid item xs={6}>
                <div style={{ textAlign: "right" }}>
                  <Button size="large" color="secondary">
                    <StyledHtmlLink
                      href="mailto:cubamc@gmail.com"
                      title="By Email"
                    >
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
              <Grid item xs={6} style={{ textAlign: "left" }}>
                <Button
                  size="large"
                  color="secondary"
                >
                  <StyledHtmlLink href="tel:1+5514442665" title="By Phone">
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
    </React.Fragment>
  );
};

export default Contact;
