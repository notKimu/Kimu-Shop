import Head from 'next/head';

import '../styles/globals.css';
import '../styles/items.css';

export default function App({ Component, pageProps }) {
  <Head>
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
  </Head>
  return <Component {...pageProps} />;
}
