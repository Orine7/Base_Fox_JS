import type { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Base Fox</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" href="/fox.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
