import React from "react";
import HomepageLayout from "@components/pages/HomepageLayout";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title key="title">Web Development | Wilfred Lopez</title>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        >
        </script>
      </Head>
      <HomepageLayout />
    </>
  );
};

export default index;
