import { CssBaseline } from "@mui/material";
import React from "react";
import HomeAppBar from "../components/HomeAppBar";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <HomeAppBar />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
