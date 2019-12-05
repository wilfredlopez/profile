import React from "react";
import {
  Button,
  Header,
  Divider,
  Image,
  Grid,
  GridColumn
} from "semantic-ui-react";

const Project = ({ url, name, title, imageSrc, ...props }) => {
  return (
    <>
      <Divider
        as="h4"
        className="header"
        horizontal
        style={{ margin: "1em 0em", textTransform: "uppercase" }}
      >
        <a href={url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </Divider>
      <Header as="h3" style={{ fontSize: "2em" }}>
        <div style={{ fontSize: "0.5em" }}>
          {props.children}
          {imageSrc && (
            <>
              {/* <br /> */}
              <Image
                src={imageSrc}
                alt={`${name} Homepage`}
                //   label="Retailme Now Homepage"
                size="medium"
                centered
                style={{
                  marginTop: 6
                }}
              />
            </>
          )}
        </div>
      </Header>
      <Grid textAlign="right">
        <GridColumn>
          <Button size="large">
            <a href={url}>{name}</a>
          </Button>
        </GridColumn>
      </Grid>
    </>
  );
};

export default Project;
