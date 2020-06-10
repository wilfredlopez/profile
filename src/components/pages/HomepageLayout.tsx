import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Typography,
  ListItem,
  List,
} from "@material-ui/core";
import Project from "../Utils/Project";
import {
  education,
  experiences,
  retailmeNowDescription,
  vapeMusicDescription,
  expenseManagerDescription,
  // easyTodosDescription
} from "./constants";
import getWidth from "./containers/getWidth";
import HomepageHeading from "./partials/HomepageHeading";
import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";

// import vapemusicImg from "../../img/vapemusic.jpeg"
import vapemusicImg from "../../img/vapemusic-example.jpg";
import retailmenowImg from "../../img/retailmenow.jpeg";
import expenseManagerImg from "../../img/expense-manager-example.jpg";
import { Segment } from "components/shared";

const HomepageLayout = () => {
  const [mobile, setMobile] = useState<boolean>(true);
  let deviceWith = getWidth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    if (deviceWith && deviceWith <= 767) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [deviceWith]);

  const summary = (
    <Grid container>
      <List style={{ fontSize: "1.3em" }}>
        <ListItem>
          Proficient knowledge of HTML 5, CSS 3, JavaScript.
        </ListItem>
        <ListItem>Experieced with MS Excel.</ListItem>
        <ListItem>
          Excellent communication skills, organization skills, and excellent
          attention to detail.
        </ListItem>
        <ListItem>
          Proficient knowledge of accessibility standards (Section 508/WCAG 2.0
          Level A and AA).{" "}
        </ListItem>
        <ListItem>
          Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).
        </ListItem>
        <ListItem>
          6 years of call center and Workforce Management experience.
        </ListItem>
        <ListItem>
          Proficient experience in QA testing methodology.
        </ListItem>
        <ListItem>
          Proven ability to document issues and bugs.
        </ListItem>
      </List>
    </Grid>
  );

  const educationList = education.map((edu) => {
    return (
      <ListItem key={edu.label}>
        {/* <Icon name={edu.icon} /> */}
        <List>
          <p>{edu.label}</p>
        </List>
      </ListItem>
    );
  });

  const experienceList = experiences.map((exp) => {
    return (
      <ListItem key={exp.label}>
        {/* <Icon name={exp.icon} /> */}
        <section>
          <div>
            <Typography
              variant="body1"
              style={{ color: exp.isCurrent ? "blue" : "grey" }}
            >
              {exp.label}
              {exp.isCurrent && "(Actual)"}
            </Typography>
          </div>
          {exp.location}
        </section>
      </ListItem>
    );
  });
  return (
    <React.Fragment>
      <section id="welcome-section">
        {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
      </section>
      <Segment style={{ padding: "2em 0em" }}>
        <Grid container>
          <Grid>
            <Grid item>
              <Typography variant="h1" style={{ fontSize: "2em" }}>
                Experiences
              </Typography>
              <h3>Job Experience</h3>
              <List>
                {experienceList}
              </List>
              {" "}
            </Grid>
            <Grid item>
              <Typography variant="h2" style={{ fontSize: "2em" }}>
                Skills
              </Typography>
              <List>
                {educationList}
              </List>
            </Grid>
          </Grid>
          <Grid>
            {summary}
            <Grid item className="text-center">
              <Button>
                <Link to="/projects">Demo Projects</Link>
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em" }}>
        <Container id="projects">
          <Project
            url="https://vapemusic.club"
            name="Vape Music"
            title="Vape Music - Latin Music Listen & Download"
            imageSrc={vapemusicImg}
          >
            <div style={{ fontSize: "1.33em" }}>{vapeMusicDescription}</div>
          </Project>

          <Project
            url="https://wilfredexpensemanager.netlify.app"
            name="Expenses Manager"
            title="Expenses Manager - Manage your personal finances"
            imageSrc={expenseManagerImg}
          >
            <div style={{ fontSize: "1.33em" }}>
              {expenseManagerDescription}
            </div>
          </Project>

          <Project
            url="#"
            name="RetalMeNow"
            title="RetalMeNow - Shop Online"
            imageSrc={retailmenowImg}
          >
            <div style={{ fontSize: "1.33em" }}>{retailmeNowDescription}</div>
          </Project>

          {/* <Project
            url="https://wilnotes.herokuapp.com"
            name="EasyTodos"
            title="EasyTodos - Save your todo list"
          >
            <div style={{ fontSize: "1.33em" }}>{easyTodosDescription}</div>
          </Project> */}
        </Container>
      </Segment>

      <SocialMediaEmbeds mobile={mobile} />
    </React.Fragment>
  );
};
export default HomepageLayout;
