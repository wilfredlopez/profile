import { Container, Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

const InstagramImage = styled.img`
    width: 100%;
    max-height: 200px;
    max-width: 225px;
    height: 100%;
    border-radius: 12px;
    display: flex;
    margin: auto;

`;

interface Props {
}

const Instagram = (props: Props) => {
  return (
    <Container maxWidth="md">
      <InstagramImage src="/INSTAGRAM_WILFRED_LOPEZ.jpg" />
      <Typography align="center" variant="subtitle1">
        Follow me on Instagram
      </Typography>
    </Container>
  );
};

export default Instagram;
