import React from "react";
import HomepageLayout from "@components/pages/HomepageLayout";
import Head from "next/head";
const index = () => {
  return (
    <>
      <Head>
        <title key="title">Web Development | Wilfred Lopez</title>
      </Head>
      <HomepageLayout />
    </>
  );
};

export default index;
