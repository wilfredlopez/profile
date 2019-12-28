import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Icon,
  List,
  Segment
} from "semantic-ui-react";
import Project from "../Utils/Project";
import {
  education,
  experiences,
  retailmeNowDescription,
  vapeMusicDescription
  // easyTodosDescription
} from "./constants";
import getWidth from "./containers/getWidth";
import HomepageHeading from "./partials/HomepageHeading";
import SocialMediaEmbeds from "./partials/SocialMediaEmbeds";

// import vapemusicImg from "../../img/vapemusic.jpeg"
import vapemusicImg from "../../img/vapemusic2mobile.jpg";
import retailmenowImg from "../../img/retailmenow.jpeg";

const HomepageLayout = () => {
  const [mobile, setMobile] = useState(null);
  let deviceWith = getWidth();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);

  useEffect(() => {
    if (deviceWith <= 767) {
      setMobile(true);
    } else {
      setMobile(false);
    }
  }, [deviceWith]);

  const summary = (
    <Grid.Column width={8}>
      <List size="large" as="ul" style={{ fontSize: "1.3em" }}>
        <List.Item as="li">
          Proficient knowledge of HTML 5, CSS 3, JavaScript.
        </List.Item>
        <List.Item as="li">Experieced with MS Excel.</List.Item>
        <List.Item as="li">
          Excellent communication skills, organization skills, and excellent
          attention to detail.
        </List.Item>
        <List.Item as="li">
          Proficient knowledge of accessibility standards (Section 508/WCAG 2.0
          Level A and AA).{" "}
        </List.Item>
        <List.Item as="li">
          Good understanding of assistive technologies (JAWS, NVDA, VoiceOver).
        </List.Item>
        <List.Item as="li">
          6 years of call center and Workforce Management experience.
        </List.Item>
        <List.Item as="li">
          Proficient experience in QA testing methodology.
        </List.Item>
        <List.Item as="li">
          Proven ability to document issues and bugs.
        </List.Item>
      </List>
    </Grid.Column>
  );

  const educationList = education.map(edu => {
    return (
      <List.Item key={edu.label}>
        <Icon name={edu.icon} />
        <List.Content>
          <List.Header as="p">{edu.label}</List.Header>
        </List.Content>
      </List.Item>
    );
  });

  const experienceList = experiences.map(exp => {
    return (
      <List.Item key={exp.label}>
        <Icon name={exp.icon} />
        <List.Content>
          <List.Header as="p">
            <Header as="span" color={exp.isCurrent ? "blue" : "grey"}>
              {exp.label} {exp.isCurrent && "(Actual)"}
            </Header>
          </List.Header>
          {exp.location}
        </List.Content>
      </List.Item>
    );
  });
  return (
    <React.Fragment>
      <section id="welcome-section">
        {mobile ? <HomepageHeading mobile /> : <HomepageHeading />}
      </section>
      <Segment style={{ padding: "2em 0em" }} vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h1" style={{ fontSize: "2em" }}>
                Experiences
              </Header>
              <h3>Job Experience</h3>
              <List verticalAlign="middle" animated size="small">
                {experienceList}
              </List>{" "}
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Header as="h2" style={{ fontSize: "2em" }}>
                Skills
              </Header>
              <List divided verticalAlign="middle" animated size="large">
                {educationList}
              </List>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            {summary}
            <Grid.Column floated="right" width={6} className="text-center">
              <Button size="huge">
                <Link to="/projects">Look at my Projects</Link>
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>

      <Segment style={{ padding: "2em 0em" }} vertical>
        <Container text id="projects">
          <Project
            url="https://shop-client.cubamc.now.sh"
            name="RetalMeNow"
            title="RetalMeNow - Shop Online"
            imageSrc={retailmenowImg}
          >
            <div style={{ fontSize: "1.33em" }}>{retailmeNowDescription}</div>
          </Project>
          <Project
            url="https://vapemusic.club"
            name="Vape Music 2.0"
            title="Vape Music 2.0- Latin Music Listen & Download"
            imageSrc={vapemusicImg}
          >
            <div style={{ fontSize: "1.33em" }}>{vapeMusicDescription}</div>
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
