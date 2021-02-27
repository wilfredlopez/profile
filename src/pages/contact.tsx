import Contact from "@components/contact/Contact"
import Head from "next/head"
import PageWrapper from "@components/PageWrapper"
import Instagram from "@components/partials/Instagram"
import HomepageHeading from "@components/partials/HomepageHeading"

const contact = () => {
  return (
    <>
      <Head>
        <title key="title">Contact | Wilfred Lopez</title>
        <meta
          name="keywords"
          content="web development, profile, contact"
        />
        <meta
          name="description"
          content="Wilfred Lopez, Contact Page."
        />
        <meta
          name="keywords"
          content="Contact, Profile, Wilfred Donald Lopez, react, typescript, wilfred lopez, Wilfred, Lopez, Developer, GraphQL, profile, NodeJS, MongoDB, Web Accessibility, Javascript, css, html"
        />

        <link rel="canonical" href="https://wilfredlopez.net/contact" />
      </Head>
      <PageWrapper>
        <Contact />
        <br />
        <br />

        <Instagram />
        <br />
        <br />
        <br />
        <br />
        <HomepageHeading />
      </PageWrapper>
    </>
  )
}

export default contact
