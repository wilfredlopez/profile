// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";
import {
  PrimaryBackgroundSection,
} from "@components/shared";
import {
  Box,
  Container,
  Grid,
  Hidden,
  List,
  Paper,
  Typography,
} from "@material-ui/core";
import { usePagesContext } from "@root/context/PagesContext";
import useSharedStyles from "@root/theme/useSharedStyles";
import React, { useEffect } from "react";
import styled from "styled-components";
import {
  ExperienceList,
} from "./ExperienceList";
import { EducationList } from "./EducationList";
import HomepageHeading from "../partials/HomepageHeading";
import HomeProjectGrid from "./HomeProjectGrid";
import ShowCaseProjectButton from "./ShowCaseProjectButton";

const SummaryLi = styled.li`
    padding-top: 2px;
    padding-bottom: 2px;
    padding-left: 12px;
    text-align: start;
    font-size: 1.16rem;
    &::before{
      content: "• ";
    }
`;

const Title = styled(Typography)<{ component: string }>`
  text-decoration: underline;
  margin-bottom: 30px !important;
`;

const SectionGridStyled = styled(Grid)`
  margin-top: 50px !important;
  margin-bottom: 50px !important;
`;

const SUMMARY_TEXTS = [
  "Proficient knowledge of HTML 5, CSS 3, JavaScript.",
  "Experieced with MS Excel.",
  "Excellent communication skills, organization skills, and excellent attention to detail.",
  "Proficient knowledge of accessibility standards (Section 508/WCAG 2.0 Level A and AA).",
  "Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).",
  "6 years of call center and Workforce Management experience.",
  "Proficient experience in QA testing methodology.",
  "Proven ability to document issues and bugs.",
];

const HomepageLayout = () => {
  const { changePage } = usePagesContext();
  const classes = useSharedStyles();
  useEffect(() => {
    changePage("Home");
  }, [changePage]);
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  const summary = (
    <Grid item>
      <Container maxWidth="md">
        <List style={{ fontSize: "1.1em" }}>
          {SUMMARY_TEXTS.map((text) => {
            return <SummaryLi key={text}>{text}</SummaryLi>;
          })}
        </List>
      </Container>
    </Grid>
  );

  return (
    <React.Fragment>
      <PrimaryBackgroundSection>
        <HomepageHeading />
      </PrimaryBackgroundSection>
      <Paper square elevation={0}>
        <Grid
          container
          spacing={0}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
        >
          <Grid
            container
            item
            direction="row"
            justify="space-around"
            alignItems="flex-start"
          >
            <SectionGridStyled
              item
              xs={12}
              sm={4}
            >
              <Title
                variant="h4"
                component="h2"
                align="center"
              >
                Experiences
              </Title>
              <ExperienceList />
              {" "}
            </SectionGridStyled>

            <Grid
              item
              xs={10}
              sm={4}
            >
              <Hidden xsDown>
                <Box
                  css={{
                    marginTop: 50,
                  }}
                />
              </Hidden>
              <Title variant="h4" component="h2" align="center">
                Skills
              </Title>

              <EducationList />
            </Grid>
          </Grid>

          <Grid container justify="flex-start">
            <Container
              classes={{
                root: classes.minPaddingX,
              }}
            >
              <Box
                css={{
                  marginTop: 25,
                }}
              />
              {summary}
            </Container>
          </Grid>
          {/* <ShowCaseProjectButton /> */}
        </Grid>

        {/* <Container
          id="projects"
          classes={{
            root: classes.minPaddingX,
          }}
        >
          <AllProjects
            addMarginTop={false}
            showSliderControls={false}
            loop={false}
            limitTo={2}
          />
        </Container> */}
      </Paper>
      <Box pb={2} />
      <Paper square>
        <Box pt={1} />

        <ShowCaseProjectButton color="inherit" variant="outlined" />
        <Container
          id="projects"
          classes={{
            root: classes.minPaddingX,
          }}
        >
          <HomeProjectGrid />
        </Container>
      </Paper>
      {/* <SocialMediaEmbeds /> */}
    </React.Fragment>
  );
};
export default HomepageLayout;
