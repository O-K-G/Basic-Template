import Head from "next/head";
import '../styles/globals.css';
import type { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return <><Head>
    <title>Basic Web App Template</title>
    <meta charSet="UTF-8" />
    <meta
      name="description"
      content="A quick guide for a Docker \ webapp development environment with a basic web app template using Next.js, Express.js, Mongo, and Docker."
    />
    <meta
      name="keywords"
      content="React, Reatc.js, Next, Next.js, Express, Express.js, quick, guide, template, docker, frontend, backend, fullstack"
    />
    <meta name="author" content="Omri Geda" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/images/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/images/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/images/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/images/favicon/site.webmanifest" />
  </Head><Component {...pageProps} /></>
}

export default MyApp
