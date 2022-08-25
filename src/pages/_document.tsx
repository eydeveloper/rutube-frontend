import { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='icon' href='/public/favicon.ico' type='image/svg+xml' />
        <meta name='theme-color' content='#ff7652' />
        <meta name='msapplication-navbutton-color' content='#ff7652' />
        <meta name='apple-mobile-web-app-status-bar-styles' content='#ff7652' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
