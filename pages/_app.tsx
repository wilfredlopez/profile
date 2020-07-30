import React from "react";
import Head from "next/head";
import RootProvider from "@root/RootProvider";
import Navigation from "@components/Layout/Navigation";
import { Fab, Toolbar } from "@material-ui/core";
import SiteFooter from "@components/pages/partials/SiteFooter";
import { ScrollTop } from "@components/Layout/BackToTop";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { AnimatePresence } from "framer-motion";
import "@root/index.css";

import { useRouter } from "next/router";

function handleExitComplete() {
  if (typeof window !== "undefined") {
    window.scrollTo({ top: 0 });
  }
}

export default function MyApp(props: any) {
  const { Component, pageProps } = props;
  const router = useRouter();
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
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="manifest" href="./manifest.json" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={"#263238"} />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Wilfred Lopez Quality Assurance and Web Development curriculum"
        />
        <meta
          property="og:description"
          content="Wilfred Lopez Quality Assurance and Web Development curriculum"
        />
        <meta
          name="keywords"
          content="react, typescript, wilfred lopez, Wilfred, Lopez, Developer, GraphQL, profile, NodeJS, MongoDB, Web Accessibility, Javascript, css, html"
        />

        <meta name="author" content="Wilfred Lopez" />
        <meta property="og:type" content="developer" />
        <meta property="og:title" content="Wilfred Lopez - Web Development" />
        <meta property="og:site_name" content="wilfredlopez" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff"
          httpEquiv="Content-Type"
        />
      </Head>
      <AnimatePresence exitBeforeEnter onExitComplete={handleExitComplete}>
        <RootProvider>
          <>
            <Navigation />
            {/* //Needed for the scroll top to work. also margin to account for the fixed position of the Navigation.  */}
            <Toolbar
              id="back-to-top-anchor"
              style={{ minHeight: 0, marginBottom: "3rem" }}
            />
            <main>
              <Component {...pageProps} />
            </main>
            <footer>
              <SiteFooter />
            </footer>
            <ScrollTop {...props}>
              <Fab
                color="secondary"
                size="small"
                aria-label="scroll back to top"
              >
                <KeyboardArrowUpIcon />
              </Fab>
            </ScrollTop>
          </>
        </RootProvider>
      </AnimatePresence>
    </React.Fragment>
  );
}
