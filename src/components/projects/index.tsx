// import NpmPackages from "@components/npm-package/NpmPackages";
import { usePagesContext } from '@root/context/PagesContext'
import React, { useEffect } from 'react'
import ProjectsArray from './ProjectsArray'
import Project from './Project'
import { Paper, Typography } from '@material-ui/core'

interface Props {
  loop?: boolean
  showSliderControls?: boolean
  limitTo?: number
  addMarginTop?: boolean
}

const Projects = ({
  loop = false,
  showSliderControls = true,
  limitTo,
  addMarginTop = true,
}: Props) => {
  const { changePage } = usePagesContext()
  useEffect(() => {
    changePage('Featured')
  }, [changePage])
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
  }, [])
  return (
    <React.Fragment>
      <Paper>
        <Typography
          className="caption-text"
          style={{
            textTransform: "uppercase", fontSize: '1.7rem',
            // marginTop: "2.6rem",
            paddingTop: '2rem',
          }}
          variant="h5" component="h1"
          gutterBottom
          align="center">Featured Projects</Typography>
        {/* {addMarginTop && <div style={{ marginTop: '5rem' }} />} */}
        {limitTo
          ? ProjectsArray.slice(0, limitTo).map(proj => (
            <Project
              key={proj.title}
              loop={loop}
              showSliderControls={showSliderControls}
              classKey={proj.classKey}
              images={proj.images}
              url={proj.url}
              name={proj.name}
              title={proj.title}
              description={proj.description}
            ></Project>
          ))
          : ProjectsArray.map(proj => (
            <Project
              key={proj.title}
              loop={loop}
              showSliderControls={showSliderControls}
              classKey={proj.classKey}
              images={proj.images}
              url={proj.url}
              name={proj.name}
              title={proj.title}
              description={proj.description}
            ></Project>
          ))}
      </Paper>
    </React.Fragment>
  )
}

export default Projects
