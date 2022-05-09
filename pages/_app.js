import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import Head from "next/head";
import { Router } from "next/router";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import HomeAppBar from "../components/HomeAppBar";
import Loading from "../components/Loading";
import "../styles/globals.css";
import { darkTheme, theme } from "../styles/styles";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => setLoading(true));
    Router.events.on("routeChangeComplete", () => setLoading(false));
    Router.events.on("routeChangeError", () => setLoading(false));
    return () => {
      Router.events.off("routeChangeStart", () => setLoading(true));
      Router.events.off("routeChangeComplete", () => setLoading(false));
      Router.events.off("routeChangeError", () => setLoading(false));
    };
  }, [Router.events]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {loading ? (
          <Loading />
        ) : (
          <>
            <HomeAppBar />
            <Container>
              <Component {...pageProps} />
              <Footer />
            </Container>
          </>
        )}
      </ThemeProvider>
    </>
  );
}

export default MyApp;
