import React, { useEffect } from "react";
import {
  Button,
  Container,
  Grid,
  Typography,
  List,
} from "@material-ui/core";

import {
  education,
  experiences,
} from "./constants";
import HomepageHeading from "./partials/HomepageHeading";
import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";

import {
  Segment,
  StyledLink,
  PrimaryBackgroundSection,
} from "components/shared";
import styled from "styled-components";
import AllProjects from "./partials/AllProjects";
import { usePagesContext } from "context/PagesContext";
import Link from "next/link";
const StyledItem = styled.li`
  padding-top: 0;
  padding-bottom: 2px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  text-align: left;
    font-size: 1.5rem;
    border-bottom: 1px solid #dcd5d5;
    transition: all 10ms ease-in-out;
    &:hover{
      transform: translate(10px);
    }
`;

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

const ExperienceSection = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled(Typography)<{ component: string }>`
  text-decoration: underline;
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
      <List style={{ fontSize: "1.1em" }}>
        {SUMMARY_TEXTS.map((text) => {
          return <SummaryLi key={text}>{text}</SummaryLi>;
        })}
      </List>
    </Grid>
  );

  const educationList = education.map(({ label, Icon }) => {
    return (
      <StyledItem key={label}>
        <>
          <Typography variant="subtitle1" component="h3">
            {Icon}
            <span>{" "}</span>
            {label}
          </Typography>
        </>
      </StyledItem>
    );
  });

  const experienceList = experiences.map(
    ({ Icon, isCurrent, label, location }) => {
      return (
        <li key={label} className="mb-1">
          {/* <Icon name={exp.icon} /> */}
          {Icon}
          <ExperienceSection>
            <div>
              <Typography
                variant="h6"
                component="h3"
                style={{ color: isCurrent ? "blue" : "#5c5959" }}
              >
                {label}
                {isCurrent && "(Actual)"}
              </Typography>
            </div>
            {location}
          </ExperienceSection>
        </li>
      );
    },
  );
  return (
    <React.Fragment>
      <PrimaryBackgroundSection>
        <HomepageHeading />
      </PrimaryBackgroundSection>
      <Segment style={{ padding: "2em 0em" }}>
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
            <Grid item xs={12} sm={4}>
              <Title variant="h4" component="h2">
                Experiences
              </Title>
              <List>
                {experienceList}
              </List>
              {" "}
            </Grid>
            <Grid item xs={10} sm={4}>
              <Title variant="h4" component="h2">
                Skills
              </Title>
              <List>
                {educationList}
              </List>
            </Grid>
          </Grid>
          <Grid container justify="flex-start">
            <Container>
              {summary}
            </Container>
          </Grid>
          <Grid container justify="center">
            <Button color="primary" variant="contained">
              <Link href="/projects">
                <StyledLink>Demo Projects</StyledLink>
              </Link>
            </Button>
          </Grid>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em" }}>
        <Container id="projects">
          <AllProjects />
        </Container>
      </Segment>

      <SocialMediaEmbeds />
    </React.Fragment>
  );
};
export default HomepageLayout;
