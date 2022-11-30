import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta property="og:title" content="Date ideas with GPT-3" key="title"/>
        <meta property="og:description" content="Keep your dates fresh with new recs" key="description"/>
        <meta
          property="og:image"
          content="https://freeimage.host/i/HfYAQdN"
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
