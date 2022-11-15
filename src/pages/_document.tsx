import Document, { Head, Html, Main, NextScript } from 'next/document'
import { theme } from 'src/styles/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content={theme.colors.primary[500]} />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
          />
          <meta name="description" content="description of your project" />
          <link rel="manifest" href="pwa/manifest.json" />
          <link rel="apple-touch-icon" href="pwa/icon-192x192.png" />
          <link rel="shortcut icon" href="/favicon-16x16.ico" />
          <title>BX Companion</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
