import { Fragment } from 'react'
import NextDocument from "next/document"
import Document, { Html, Head, Main, NextScript } from "next/document"
import { ServerStyleSheets as MaterialUiServerStyleSheets } from "@material-ui/core/styles"
import { ServerStyleSheet as StyledComponentSheets } from "styled-components"
import type { AppType } from 'next/dist/next-server/lib/utils'

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// `getInitialProps` belongs to `_document` (instead of `_app`),
// it's compatible with server-side generation (SSG).
MyDocument.getInitialProps = async (ctx) => {
  const styledComponentSheet = new StyledComponentSheets()
  const materialUiSheets = new MaterialUiServerStyleSheets()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App: AppType) =>
          (props: React.ComponentProps<AppType>) =>
            // styledComponentSheet.collectStyles(
            //   materialUiSheets.collect(<App {...props} />
            materialUiSheets.collect(
              styledComponentSheet.collectStyles(<App {...props} />),
            ),
      })
    const initialProps = await NextDocument.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: [
        <Fragment key="styles">
          {initialProps.styles}
          {styledComponentSheet.getStyleElement()}
          {materialUiSheets.getStyleElement()}
        </Fragment>,
      ],
    }
  } finally {
    styledComponentSheet.seal()
  }
}
