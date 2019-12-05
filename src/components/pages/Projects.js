import React, { useEffect } from "react";
import { Segment, Container } from "semantic-ui-react";
import Project from "../Utils/Project";
import {
  retailmeNowDescription,
  vapeMusicDescription
  // easyTodosDescription
} from "./constants";
// import vapemusicImg from "../../img/vapemusic.jpeg";
import vapemusicImg from "../../img/vapemusic2mobile.jpg";
import retailmenowImg from "../../img/retailmenow.jpeg";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <React.Fragment>
      <Segment style={{ padding: "2em 0em" }} vertical>
        <Container text>
          <Project
            url="https://vapemusic.club"
            name="Vape Music 2.0"
            title="Vape Music 2.0 - Latin Music Listen & Download"
            imageSrc={vapemusicImg}
          >
            {vapeMusicDescription}
          </Project>
          <Project
            url="https://shop-client.cubamc.now.sh"
            name="RetalMeNow"
            title="RetalMeNow - Shop Online"
            imageSrc={retailmenowImg}
          >
            {retailmeNowDescription}
          </Project>
          {/* <Project
            url="https://wilnotes.herokuapp.com"
            name="EasyTodos"
            title="EasyTodos - Save your todo list"
          >
            {easyTodosDescription}
          </Project> */}
        </Container>
      </Segment>
    </React.Fragment>
  );
};

export default Projects;
