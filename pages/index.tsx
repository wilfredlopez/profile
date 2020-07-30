import React from "react";
import HomepageLayout from "@components/pages/HomepageLayout";
import Head from "next/head";
import { Paper } from "@material-ui/core";
const index = () => {
  return (
    <>
      <Head>
        <title key="title">Web Development | Wilfred Lopez</title>
        <meta
          name="description"
          content="Web Development | Wilfred Lopez"
        >
        </meta>
        <link rel="canonical" href="https://wilfredlopez.net/" />
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        >
        </script>
      </Head>
      <Paper>
        <HomepageLayout />
      </Paper>
    </>
  );
};

export default index;
