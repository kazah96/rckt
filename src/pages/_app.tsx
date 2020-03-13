import { AppProps } from "next/app";
import React from "react";
import Helmet from "react-helmet";

import { BaseContextProvider } from "../contexts/baseContextProvider";
import Header from "../components/header";

import "./global.style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rocket app</title>
        <link rel="canonical" href="https://krmngz-rckt.herokuapp.com" />
      </Helmet>
      <Header />
      <BaseContextProvider>
        <Component {...pageProps} />
      </BaseContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
