import React from "react";
import Contact from "@components/pages/Contact";
import Head from "next/head";
import PageWrapper from "@components/PageWrapper";
import Instagram from "@components/shared/Instagram";
import HomepageHeading from "@components/pages/partials/HomepageHeading";

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
        <Instagram />
        <br />
        <br />
        <HomepageHeading />
      </PageWrapper>
    </>
  );
};

export default contact;
