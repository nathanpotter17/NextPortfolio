import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" href="/favicon.svg" />
      </Head>
      <title>NSP Web Services</title>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
