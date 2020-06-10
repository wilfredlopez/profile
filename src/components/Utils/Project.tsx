import React from "react";
import {
  Button,
  Typography,

  Avatar,
  Grid,
} from "@material-ui/core";
import styled from "styled-components";
interface Props {
  url: string;
  name: string;
  title: string;
  imageSrc: string;
}

const DividerElement = styled.div``;

const Project: React.FC<Props> = ({ url, name, title, imageSrc, ...props }) => {
  return (
    <>
      <DividerElement
        className="header project-tile"
        style={{ margin: "1em 0em", textTransform: "uppercase" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </DividerElement>
      <Typography variant="h3" style={{ fontSize: "2em" }}>
        <div style={{ fontSize: "0.5em" }}>
          {props.children}
          {imageSrc && (
            <>
              {/* <br /> */}
              <Avatar
                src={imageSrc}
                alt={`${name} Homepage`}
                //   label="Retailme Now Homepage"
                // size="medium"
                style={{
                  marginTop: 6,
                  maxHeight: 600,
                }}
              />
            </>
          )}
        </div>
      </Typography>
      <Grid>
        <Grid item>
          <Button size="small">
            <a href={url} className="text-white">
              {name}
            </a>
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
