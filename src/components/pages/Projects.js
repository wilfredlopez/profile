import React, { useEffect } from "react"
import { Segment, Container } from "semantic-ui-react"
import Project from "../Utils/Project"
import {
  retailmeNowDescription,
  vapeMusicDescription,
  expenseManagerDescription,
  // easyTodosDescription
} from "./constants"
// import vapemusicImg from "../../img/vapemusic.jpeg";
import vapemusicImg from "../../img/vapemusic2mobile.jpg"
import retailmenowImg from "../../img/retailmenow.jpeg"
import expenseManagerImg from "../../img/expense-manager-example-4.jpg"

const Projects = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    })
  }, [])
  return (
    <React.Fragment>
      <Segment style={{ padding: "2em 0em" }} vertical>
        <Container text>
          <Project
            url="https://vapemusic.club"
            name="Vape Music"
            title="Vape Music - Latin Music Listen & Download"
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
          <Project
            url="https://wilfredexpensemanager.netlify.com"
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
  )
}

export default Projects
