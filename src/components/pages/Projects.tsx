import { usePagesContext } from "@root/context/PagesContext";
import React, { useEffect } from "react";
import AllProjects from "./partials/AllProjects";

const Projects = () => {
  const { changePage } = usePagesContext();
  useEffect(() => {
    changePage("Showcase");
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
      <div style={{ marginTop: "5rem" }} />
      {/* <Typography variant="h4" component="h1">Showcase Projects</Typography> */}
      <AllProjects showSliderControls={true} />
    </React.Fragment>
  );
};

export default Projects;
