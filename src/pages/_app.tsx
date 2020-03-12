import { AppProps } from "next/app";
import React from "react";

import { BaseContextProvider } from "../contexts/baseContextProvider";
import Header from "../components/header";

import "./global.style.css";
import { getAuthenticationUrl } from "../api/unsplash";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Header />
      {/* <a href={getAuthenticationUrl()}> LOGIN</a> */}
      <BaseContextProvider>
        <Component {...pageProps} />
      </BaseContextProvider>
    </div>
  );
}

export default MyApp;
