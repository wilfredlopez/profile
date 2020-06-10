import React from "react";
import {
  Container,
  Avatar,
  Typography,
  IconButton,
} from "@material-ui/core";
import wilfredImg from "../../../img/wilfred-profile.png";
import { Responsive } from "../../shared";
import Segment from "../../shared/Segment";
import WorkIcon from "@material-ui/icons/Work";
import RoomIcon from "@material-ui/icons/Room";
import HomeIcon from "@material-ui/icons/Home";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
interface Props {
  mobile?: boolean;
}
const HomepageHeading: React.FC<Props> = ({ mobile }) => (
  <Responsive>
    <Segment>
      <Container>
        <Avatar
          src={wilfredImg}
          // src="https://res.cloudinary.com/wlopez/image/upload/v1561207949/wilfredZoomed.png"
          // size="medium"
          style={{
            width: "100%",
            height: "100%",
            maxWidth: 500,
            maxHeight: 500,
          }}
          // circular
          alt="wilfred"
          className="m-auto border-full with-shadow"
        />

        <Typography
          component="h1"
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "0.5em" : "0.2em",
          }}
        >
          WILFRED LOPEZ
        </Typography>
        <p>
          <WorkIcon />
          Quality Assurance/Web Development
          {""}
          <br />
          <small>React, Nodejs, Express, MongoDB, Web Accessibility</small>
        </p>
        <div className="row justify-content-between pb-3 m-auto">
          <p className="col-md-6 pb-0 mb-0">
            <RoomIcon />
            <span>Lives in</span>Garfield, NJ, USA
          </p>
          <p className="col-md-6">
            <HomeIcon />
            <span>From</span>Cabrera, Dominican Republic
          </p>
        </div>
        <IconButton>
          <MailOutlineIcon />
          <a href="mailto:cubamc@gmail.com">Contact Me</a>
        </IconButton>
      </Container>
    </Segment>
  </Responsive>
);

export default HomepageHeading;
