import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  // static async getInitialProps(ctx) {
  //   const initialProps = await Document.getInitialProps(ctx);
  //   const themeName = THEME;
  //   return { ...initialProps, themeName };
  // }

  render() {
    const rootProps = this.props;

    return (
      <html>
        <Head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, user-scalable=0, minimal-ui"
          ></meta>
          <meta name="apple-mobile-web-app-title" content="React-Voting" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="application-name" content="QR Scanner" />

          <link
            href="/static/vendor/fontawesome-free/css/all.min.css"
            rel="stylesheet"
            type="text/css"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
            rel="stylesheet"
          />

          <link href="/static/css/sb-admin-2.min.css" rel="stylesheet" />
        </Head>
        <body id="page-top">
          <Main {...rootProps} />
          <NextScript />

          <script src="/static/vendor/jquery/jquery.min.js"></script>
          <script src="/static/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
          <script src="/static/vendor/jquery-easing/jquery.easing.min.js"></script>
          <script src="/static/js/sb-admin-2.min.js"></script>
        </body>
      </html>
    );
  }
}
