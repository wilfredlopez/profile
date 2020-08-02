import { StyledHtmlLink } from "@components/shared";
import SliderCard, { ImageToSlider } from "@components/shared/SliderCard";
import {
  Container,
  Grid,
  Typography,
} from "@material-ui/core";
import { BrandButton, ImageButton } from "@root/styles/Custom";
import useSharedStyles from "@root/styles/useSharedStyles";
import React from "react";
import styled from "styled-components";
import { DividerElement } from "@components/shared";

interface Props {
  url: string;
  images: ImageToSlider[];
  name: string;
  classKey: "vape" | "expense" | "shop";
  title: string;
  showSliderControls?: boolean;
  loop?: boolean;
  description: JSX.Element;
}

export const TitleLink = styled(StyledHtmlLink)`
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.secondary};
  font-weight: 500;
`;

const Project: React.FC<Props> = (
  { showSliderControls = true, url, name, title, loop, ...props },
) => {
  const classes = useSharedStyles();
  return (
    <>
      <DividerElement
        className="header project-tile"
        style={{ textTransform: "uppercase", marginTop: "1rem" }}
      >
        <TitleLink
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          title={name}
        >
          {name}
        </TitleLink>
      </DividerElement>

      <Container
        maxWidth="md"
        style={{
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          display: "flex",
          flexDirection: "column",
        }}
        classes={{
          root: classes.minPaddingX,
        }}
      >
        <Typography variant="body1" component="div">
          {props.description}
          {props.images.length > 1 &&
            <SliderCard
              showControls={showSliderControls}
              imageData={props.images}
              height={750}
              loop={loop}
              showTitle
            />}
        </Typography>
      </Container>
      {props.images.length === 1 &&
        <div>
          <StyledHtmlLink
            className={classes.minPaddingX.concat(" " + classes.flexCenter)}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              marginBottom: "1rem",
            }}
          >
            <ImageButton
              title={title}
              url={props.images[0].imgPath}
              width={520}
              minHeight={500}
              buttomProps={{}}
            />
          </StyledHtmlLink>
        </div>}

      <div style={{ marginBottom: "1rem" }} />
      <Grid
        container
        alignItems="center"
        justify="center"
        style={{ paddingBottom: "1rem" }}
      >
        <Grid item>
          <BrandButton color={props.classKey} size="medium" variant="contained">
            <StyledHtmlLink href={url} className="text-white" title={name}>
              {name.toUpperCase()}
            </StyledHtmlLink>
          </BrandButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Project;
