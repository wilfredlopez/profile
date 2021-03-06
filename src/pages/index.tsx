import Head from 'next/head'
import { Paper } from '@material-ui/core'
import HomepageLayout from '@components/home/HomepageLayout'
import PageWrapper from '@components/PageWrapper'
// const isBrowser = typeof window !== "undefined"
import NpmPackages from '@components/npm-package/NpmPackages'

const index = () => {

  return (
    <>
      <Head>
        <title key='title'>Home | Wilfred Lopez</title>
        <meta name='description' content='Wilfred Lopez Home Page'></meta>
        <link rel='canonical' href='https://wilfredlopez.net/' />
        {/* <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
          >
        </script> */}
      </Head>

      <PageWrapper>
        <Paper style={{
          overflow: 'hidden'

        }} square>
          <HomepageLayout />
          <br />
          <br />
          <NpmPackages dark limit={6} omitDivider />
          <br />
          <br />
        </Paper>
      </PageWrapper>
    </>
  )
}

export default index
