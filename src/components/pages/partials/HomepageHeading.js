import PropTypes from "prop-types"
import React from "react"
import {
  Button,
  Container,
  Header,
  Icon,
  Responsive,
  Sidebar,
  Segment,
  Image,
} from "semantic-ui-react"
import wilfredImg from "../../../img/wilfred.jpg"

import getWidth from "../containers/getWidth"

const HomepageHeading = ({ mobile }) => (
  <Responsive
    as={Sidebar.Pushable}
    getWidth={getWidth}
    maxWidth={mobile && Responsive.onlyMobile.maxWidth}
    minWidth={!mobile ? Responsive.onlyTablet.minWidth : ""}
  >
    <Segment
      inverted
      textAlign="center"
      style={{ minHeight: 500, padding: "1em 0em" }}
      vertical
    >
      <Container text>
        <Image
          src={wilfredImg}
          // src="https://res.cloudinary.com/wlopez/image/upload/v1561207949/wilfredZoomed.png"
          size="medium"
          // circular
          alt="wilfred"
          className="m-auto border-full"
        />
        <Header
          as="h1"
          content="WILFRED LOPEZ"
          inverted
          style={{
            fontSize: mobile ? "2em" : "4em",
            fontWeight: "normal",
            marginBottom: 0,
            marginTop: mobile ? "0.5em" : "0.2em",
          }}
        />
        <p>
          <Icon name="briefcase" />
          Quality Assurance/Web Development
          {""}
          <br />
          <small>React, Nodejs, Express, MongoDB, Web Accessibility</small>
        </p>
        <div className="row justify-content-between pb-3 m-auto">
          <p className="col-md-6 pb-0 mb-0">
            <Icon name="map marker alternate" />
            <span>Lives in </span>Garfield, NJ, USA
          </p>
          <p className="col-md-6">
            <Icon name="home" /> <span>From </span>Cabrera, Dominican Republic
          </p>
        </div>
        <Button primary size="huge">
          <Icon name="mail" />
          <a href="mailto:cubamc@gmail.com">Contact Me</a>
        </Button>
      </Container>
    </Segment>
  </Responsive>
)

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

export default HomepageHeading
