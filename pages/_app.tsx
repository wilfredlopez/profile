import React from "react";
import Head from "next/head";
import RootProvider from "@root/RootProvider";
import Navigation from "@components/Layout/Navigation";
import { Fab, Toolbar } from "@material-ui/core";
import SiteFooter from "@components/pages/partials/SiteFooter";
import { ScrollTop } from "@components/Layout/BackToTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import "@root/index.css";

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
        <title key="title">Web Development | Wilfred Lopez</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Wilfred Lopez Quality Assurance and Web Development curriculum"
        />
        <meta
          name="keywords"
          content="react, typescript, GraphQL, NodeJS, MongoDB, Web Accessibility, Javascript, css, html"
        />
        <meta
          name="keywords"
          content="wilfred lopez, Wilfred, Lopez, Developer"
        />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff"
          httpEquiv="Content-Type"
        >
        </meta>
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
