import { AppProps } from "next/app";
import React from "react";

import { BaseContextProvider } from "../contexts/baseContextProvider";
import Header from "../components/header";

import "./global.style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <BaseContextProvider>
        <Component {...pageProps} />
      </BaseContextProvider>
    </React.Fragment>
  );
}

export default MyApp;
