import { DividerElement } from "@components/shared"
import { Box, Grid } from "@material-ui/core"
import { ImageButton } from "@root/theme/Custom"
import React from "react"
import ProjectsArray from "../projects/ProjectsArray"

interface Props {
  limit?: number
}

// const PArray = ProjectsArray.slice(0, 2);

const HomeProjectGrid = ({ limit }: Props) => {
  const PArray = limit ? ProjectsArray.slice(0, limit) : ProjectsArray
  return (
    <Box py={2}>
      <Grid

        container spacing={2} alignContent="center" justify="center">
        {PArray.map((proj, index) => {
          return <Grid
            key={`project-grid-${proj.name}-${index}`}
            item
            xs={12}
            sm="auto"
          >
            <DividerElement>
              {proj.name}
            </DividerElement>
            <Box mb={1} />
            <ImageButton
              linkUrl={proj.url}
              title={proj.title}
              backgroundUrl={proj.images[0].imgPath}
              width={500}
              minHeight={700}
            />
          </Grid>
        })}
      </Grid>
    </Box>
  )
}

export default HomeProjectGrid
