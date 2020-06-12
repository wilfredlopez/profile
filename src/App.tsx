import React from "react";
import Routes from "./Routes";
import SiteFooter from "./components/pages/partials/SiteFooter";
import Navigation from "components/Layout/Navigation";
import { ScrollTop } from "components/Layout/BackToTop";
import { Fab, Toolbar } from "@material-ui/core";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
function App(props: any) {
  return (
    <>
      <Navigation />
      {/* //Needed for the scroll top to work. also margin to account for the fixed position of the Navigation.  */}
      <Toolbar
        id="back-to-top-anchor"
        style={{ minHeight: 0, marginBottom: "3.3rem" }}
      />
      <main>
        <Routes />
      </main>
      <footer>
        <SiteFooter />
      </footer>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

export default App;
