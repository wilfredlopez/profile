import React from "react";
import Projects from "@components/pages/Projects";
import Head from "next/head";
import PageWrapper from "@components/PageWrapper";
// import SliderCard from "@components/shared/SliderCard";
// import { PROJECT_IMAGES } from "@components/pages/constants/projectImages";

// const allImages = [
//   ...PROJECT_IMAGES.ExpenseManger,
//   ...PROJECT_IMAGES.retailMeNow,
//   ...PROJECT_IMAGES.vapeMusic,
// ];
const projects = () => {
  return (
    <>
      <Head>
        <title key="title">Showcase Projects | Wilfred Lopez</title>
        <link rel="canonical" href="https://wilfredlopez.net/projects" />
      </Head>
      <PageWrapper>
        <Projects />
        {/* <SliderCard
          imageData={allImages}
          showControls={false}
          loop
        /> */}
      </PageWrapper>
    </>
  );
};

export default projects;
