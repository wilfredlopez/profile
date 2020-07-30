import React from "react";
import Projects from "@components/pages/Projects";
import Head from "next/head";

const projects = () => {
  return (
    <>
      <Head>
        <title key="title">Showcase Projects | Wilfred Lopez</title>
        <link rel="canonical" href="https://wilfredlopez.net/projects" />
      </Head>
      <Projects />
    </>
  );
};

export default projects;
