import Document, { Head, Html, Main, NextScript } from 'next/document'
import { theme } from 'src/styles/theme'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="manifest" href="pwa/manifest.json" />
          <link rel="apple-touch-icon" href="pwa/icon-192x192.png" />
          <meta name="theme-color" content={theme.colors.primary[500]} />
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
