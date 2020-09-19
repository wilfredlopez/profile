import React from "react";
import HomepageLayout from "@components/home/HomepageLayout";
import Head from "next/head";
import { Paper } from "@material-ui/core";
import PageWrapper from "@components/PageWrapper";
// const isBrowser = typeof window !== "undefined";
import NpmPackages from "@components/npm-package/NpmPackages";

const index = () => {
  return (
    <>
      <Head>
        <title key="title">Home | Wilfred Lopez</title>
        <meta
          name="description"
          content="Home | Wilfred Lopez"
        >
        </meta>
        <link rel="canonical" href="https://wilfredlopez.net/" />
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
          >
        </script> */}
      </Head>

      <PageWrapper>
        <Paper style={{ overflow: "hidden" }} square>
          <HomepageLayout />
          <NpmPackages dark />
        </Paper>
      </PageWrapper>
    </>
  );
};

export default index;
