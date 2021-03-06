import 'styles/globals.css'
import 'styles/variables.css'

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Vinicius Rosa</title>
      <link rel="icon" href="/logo.png" type="image/x-icon" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
