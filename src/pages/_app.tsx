import { AppProps } from "next/app";
import React from "react";
import Helmet from "react-helmet";

import { BaseContextProvider } from "../contexts/baseContextProvider";
import Header from "../components/header";

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'
import "./global.style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Rocket app</title>
        <link rel="canonical" href="https://krmngz-rckt.herokuapp.com" />
      </Helmet>
      <div className="base-container">
        <Header />
        <BaseContextProvider>
          <Component {...pageProps} />
        </BaseContextProvider>
      </div>
    </React.Fragment>
  );
}

export default MyApp;
