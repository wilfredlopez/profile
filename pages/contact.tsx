import React from "react";
import Contact from "@components/pages/Contact";
import Head from "next/head";
import PageWrapper from "@components/PageWrapper";

const contact = () => {
  return (
    <>
      <Head>
        <title key="title">Contact | Wilfred Lopez</title>
        <meta
          name="keywords"
          content="web development, projects"
        />
        <link rel="canonical" href="https://wilfredlopez.net/contact" />
      </Head>
      <PageWrapper>
        <Contact />
      </PageWrapper>
    </>
  );
};

export default contact;
