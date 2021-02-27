import { useEffect } from "react"
import Head from "next/head"
import { AppProps } from "next/app"
import RootProvider from "@root/RootProvider"
import { AnimatePresence, motion } from "framer-motion"


const opacityAnimate = [
  .4,
  .6,
  0.4,
  0.6,
  0.7,
  .75,
  0.8,
  .85,
  0.9,
  .95,
  .96,
  .98,
  .99,
  1,
]

export default function MyApp(props: AppProps) {
  const { Component, pageProps, router } = props
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side") as
      | HTMLDivElement
      | null
    if (jssStyles && jssStyles.parentElement) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <>
      <Head>
        <title key="title">Web Development | Wilfred Lopez</title>
        <meta charSet="utf-8" />
        <link rel="shortcut icon" href="./favicon.ico" />
        <link rel="manifest" href="./manifest.json" />
        <link rel="search" href="./robots.txt" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content={"#263238"} />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;700&display=swap"
          rel="stylesheet" />
        {/* <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet" /> */}


        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="index.css"
        />

        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <meta
          name="description"
          content="Wilfred Donald Lopez, Quality Assurance and Web Development curriculum"
        />
        <meta
          property="og:description"
          content="Wilfred Donald Lopez, Quality Assurance and Web Development curriculum"
        />
        <meta
          name="keywords"
          content="Wilfred Donald Lopez, react, typescript, wilfred lopez, Wilfred, Lopez, Developer, GraphQL, profile, NodeJS, MongoDB, Web Accessibility, Javascript, css, html"
        />

        <meta name="author" content="Wilfred Lopez" />
        <meta property="og:type" content="developer" />
        <meta property="og:title" content="Wilfred Lopez - Web Development" />
        <meta property="og:site_name" content="wilfredlopez.net" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          content="text/html; charset=UTF-8; X-Content-Type-Options=nosniff"
          httpEquiv="Content-Type"
        />
      </Head>
      <RootProvider>
        <AnimatePresence>
          <motion.div
            key={router.route}
            initial="pageInitial"
            animate="pageAnimate"
            exit="pageExit"
            variants={{
              pageInitial: {
                opacity: [1, 0.5, 0.2, .5, 1],

                transition: {
                  duration: 0.2,
                  delay: 0,
                },
              },
              pageAnimate: {
                opacity: opacityAnimate,
                transition: {
                  duration: 0.8,
                  delay: 0,
                },
              },
              pageExit: {
                // backgroundColor: "white",
                // filter: `invert()`,
                // opacity: [0, 0.1, 0.2, 0.3, 0.5, 0.6, 0.7, 0.8, 0],
                opacity: [1, 0.5, 0.5],
                transition: {
                  duration: 0.4,
                  delay: 0.1,
                },
              },
            }}
          >
            <Component {...pageProps} />
          </motion.div>
        </AnimatePresence>
      </RootProvider>
    </>
  )
}
