import React, { useEffect } from "react";
import {
  Container,
  Grid,
  Typography,
  List,
  useMediaQuery,
  Paper,
  Box,
  Hidden,
} from "@material-ui/core";

import {
  education,
  experiences,
} from "../custom-icons";
import HomepageHeading from "../partials/HomepageHeading";
// import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";

import {
  NonStyledAnchor,
  PrimaryBackgroundSection,
} from "@components/shared";
import styled from "styled-components";
import { usePagesContext } from "@root/context/PagesContext";
import Link from "next/link";
import { BrandButton } from "@root/styles/Custom";
import AllProjects from "../pages/projects/index";
import useSharedStyles from "@root/styles/useSharedStyles";
import { motion } from "framer-motion";

const StyledItem = styled.li`
  padding-top: 0;
  padding-bottom: 6px;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  text-align: left;
    font-size: 1.5rem;
    border-bottom: 1px solid #dcd5d5;
    /* transition: all 100ms ease-in-out; */
    /* &:hover{
      transform: translate(10px);
    } */
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
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
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

  const educationList = education.map(({ label, Icon }, index) => {
    return (
      <StyledItem key={label + "-" + index}>
        <>
          <motion.div
            whileTap={{ scale: 1.2 }}
            whileHover={{ scale: 1.2 }}
          >
            <Typography variant="subtitle1" component="h3">
              {Icon}
              <span>{" "}</span>
              {label}
            </Typography>
          </motion.div>
        </>
      </StyledItem>
    );
  });

  const experienceList = experiences.map(
    ({ Icon, isCurrent, label, location }) => {
      return (
        <li key={label} className="mb-1">
          {/* <Icon name={exp.icon} /> */}
          <ExperienceSection>
            {Icon}
            <div>
              <Typography
                variant="h6"
                component="h3"
                style={{
                  color: isCurrent
                    ? "blue"
                    : prefersDarkMode
                    ? "#c8c8c8"
                    : "#fcfcfc",
                }}
              >
                {label}
                {isCurrent && "(Actual)"}
              </Typography>
            </div>
            <em>{location}</em>
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
      <Paper square>
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
              <List>
                {experienceList}
              </List>
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

              <List>
                {educationList}
              </List>
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
          <Grid
            container
            justify="center"
            style={{ marginTop: 25, marginBottom: 25 }}
          >
            <motion.div whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.3 }}>
              <BrandButton
                color="default"
                size="large"
              >
                <Link href="/projects">
                  <NonStyledAnchor>
                    {"Showcase Projects".toUpperCase()}
                  </NonStyledAnchor>
                </Link>
              </BrandButton>
            </motion.div>
          </Grid>
        </Grid>

        <Container
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
        </Container>
      </Paper>
      {/* <SocialMediaEmbeds /> */}
    </React.Fragment>
  );
};
export default HomepageLayout;
