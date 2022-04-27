import { ThemeProvider } from "@mui/material";
import React from "react";
import { darkTheme } from "../styles/styles";

const About = () => {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <div>About</div>
      </ThemeProvider>
    </>
  );
};

export default About;
