import React from "react";
import {
  Container,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import wilfredImg from "@root/img/wilfred-profile.png";
import { Responsive } from "../../shared";
import Segment from "../../shared/Segment";
import WorkIcon from "@material-ui/icons/Work";
import RoomIcon from "@material-ui/icons/Room";
// import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import styled from "styled-components";
import { BrandButton } from "@root/styles/Custom";
interface Props {
}

const StyledAnker = styled.a`
  color: inherit;
  text-decoration:none;
`;
const Item = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
`;

// const PlacesGrid = styled.div`
//     display: grid;
//     grid-template-columns: repeat(2, 1fr);
//     grid-gap: 1rem;
//     margin-bottom: 1rem;
//     & div{
//       display: flex;
//     }
// `;
const HomepageHeading: React.FC<Props> = () => (
  <Responsive>
    <Segment>
      <Container id="welcome-section" style={{ height: "100vh" }}>
        <Avatar
          src={wilfredImg}
          // src="https://res.cloudinary.com/wlopez/image/upload/v1561207949/wilfredZoomed.png"
          // size="medium"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: 400,
            maxHeight: 400,
            borderRadius: "2rem",
            margin: "auto",
          }}
          // circular
          alt="wilfred"
          className="m-auto border-full with-shadow"
        />

        <Typography
          component="h1"
          variant="h3"
          style={{
            // fontSize: "2em",
            fontWeight: "normal",
            marginBottom: 5,
            marginTop: "0.5em",
          }}
        >
          WILFRED LOPEZ
        </Typography>
        <Item>
          <WorkIcon />

          <Typography>
            Quality Assurance/Web Development
          </Typography>
          <small>
            React, Nodejs, Express, MongoDB, Web Accessibility
          </small>
        </Item>
        <Item>
          <RoomIcon />
          <div>
            <span>Garfield, NJ, USA.</span>
          </div>
        </Item>
        {/* <PlacesGrid>
          <div>
            <RoomIcon />
            <span>Garfield, NJ, USA.</span>
          </div>
          <div>
            <HomeIcon />
            <span>From Cabrera, Dominican Republic.</span>
          </div>
        </PlacesGrid> */}

        <Button
          endIcon={<MailOutlineIcon />}
          color="secondary"
          variant="contained"
        >
          {/* <MailOutlineIcon /> */}

          <StyledAnker href="mailto:cubamc@gmail.com" title="contact me">
            Contact Me
          </StyledAnker>
        </Button>
      </Container>
    </Segment>
  </Responsive>
);

export default HomepageHeading;
