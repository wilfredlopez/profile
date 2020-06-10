import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import Project from "../Utils/Project";
import {
  retailmeNowDescription,
  vapeMusicDescription,
  expenseManagerDescription,
  // easyTodosDescription
} from "./constants";
// import vapemusicImg from "../../img/vapemusic.jpeg";
import vapemusicImg from "../../img/vapemusic-example.jpg";
import retailmenowImg from "../../img/retailmenow.jpeg";
import expenseManagerImg from "../../img/expense-manager-example.jpg";
import { Segment } from "components/shared";

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <React.Fragment>
      <Segment style={{ padding: "2em 0em" }}>
        <Container>
          <Project
            url="https://vapemusic.club"
            name="Vape Music"
            title="Vape Music - Latin Music Listen & Download"
            imageSrc={vapemusicImg}
          >
            {vapeMusicDescription}
          </Project>
          <Project
            url="#"
            name="RetalMeNow"
            title="RetalMeNow - Shop Online"
            imageSrc={retailmenowImg}
          >
            {retailmeNowDescription}
          </Project>
          <Project
            url="https://wilfredexpensemanager.netlify.app"
            name="Expenses Manager"
            title="Expenses Manager - Manage your personal finances"
            imageSrc={expenseManagerImg}
          >
            {expenseManagerDescription}
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
