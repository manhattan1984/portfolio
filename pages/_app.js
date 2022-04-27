import { CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React from "react";
import HomeAppBar from "../components/HomeAppBar";
import "../styles/globals.css";
import { theme } from "../styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      
    </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <HomeAppBar />

        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
