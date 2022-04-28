import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import HomeAppBar from "../components/HomeAppBar";
import "../styles/globals.css";
import { darkTheme, theme } from "../styles/styles";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container>
          <HomeAppBar />
          <Component {...pageProps} />
          <Footer />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
