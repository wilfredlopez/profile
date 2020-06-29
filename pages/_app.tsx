import React from "react";
import Head from "next/head";
import RootProvider from "../src/RootProvider";
import Navigation from "../src/components/Layout/Navigation";
import { Fab, Toolbar } from "@material-ui/core";
import SiteFooter from "../src/components/pages/partials/SiteFooter";
import { ScrollTop } from "../src/components/Layout/BackToTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "../src/index.css";

export default function MyApp(props: any) {
  const { Component, pageProps } = props;

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side") as
      | HTMLDivElement
      | null;
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>Web Development | Wilfred Lopez</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <RootProvider>
        <>
          <Navigation />
          {/* //Needed for the scroll top to work. also margin to account for the fixed position of the Navigation.  */}
          <Toolbar
            id="back-to-top-anchor"
            style={{ minHeight: 0, marginBottom: "3.3rem" }}
          />
          <main>
            <Component {...pageProps} />
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
      </RootProvider>
    </React.Fragment>
  );
}
