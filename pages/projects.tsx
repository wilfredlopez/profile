import React from "react";
import Projects from "@components/pages/Projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title key="title">Demo Projects | Wilfred Lopez</title>
      </Head>
      <Projects />
    </>
  );
};

export default projects;