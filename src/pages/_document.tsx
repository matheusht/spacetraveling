/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="pt-br">
        <Head />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Oooh+Baby&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="Portfolio do Caio Theodoro" />
        <link rel="icon" href="/favicon.ico" />
        <title> a </title>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
