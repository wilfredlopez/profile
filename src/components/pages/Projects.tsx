import React, { useEffect } from "react";
import { Container } from "@material-ui/core";
import { Segment } from "@components/shared";
import AllProjects from "./partials/AllProjects";
import { usePagesContext } from "@root/context/PagesContext";

const Projects = () => {
  const { changePage } = usePagesContext();
  useEffect(() => {
    changePage("Showcase Projects");
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
      <Segment style={{ padding: "2em 0em" }}>
        <Container>
          {/* <Typography variant="h4" component="h1">Showcase Projects</Typography> */}
          <AllProjects />
        </Container>
      </Segment>
    </React.Fragment>
  );
};

export default Projects;
