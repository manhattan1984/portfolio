import { Html, Head, Main, NextScript } from "next/document";
import React from "react";

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Raleway:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="logo.jpeg" />
      </Head>
      <body>
          <Main />
          <NextScript />
      </body>
    </Html>
  );
};

export default Document;
