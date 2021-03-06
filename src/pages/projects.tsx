import NpmPackages from "@components/npm-package/NpmPackages"
import PageWrapper from "@components/PageWrapper"
// import Projects from "@components/pages/Projects";
import Projects from "@components/projects/index"
import { fadeInUp } from "@root/animation"
import { motion } from "framer-motion"
import Head from "next/head"

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

      <motion.div initial="initial" animate="animate">
        <Head>
          <title key="title">Featured Projects | Wilfred Lopez</title>
          <link rel="canonical" href="https://wilfredlopez.net/projects" />
        </Head>
        <motion.div
          variants={{
            animate: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          <PageWrapper>

            <motion.div variants={fadeInUp}>


              <Projects />
              <NpmPackages />
            </motion.div>
            {/* <SliderCard
          imageData={allImages}
          showControls={false}
          loop
        /> */}
          </PageWrapper>
        </motion.div>
      </motion.div>
    </>
  )
}

export default projects
