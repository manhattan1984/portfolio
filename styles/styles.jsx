import { createTheme, Link, styled, Typography } from "@mui/material";

const themeOptions = (mode = "light") => ({
  palette: {
    mode,
    primary: {
      main: "#ef018a",
    },
    secondary: {
      main: "#37a988",
    },
  },
  typography: {
    fontFamily: "Raleway",
    h1: {
      fontFamily: "Lobster",
    },
    h2: {
      fontFamily: "Lobster",
    },
    h3: {
      fontFamily: "Lobster",
    },
    h4: {
      fontFamily: "Lobster",
    },
    h5: {
      fontFamily: "Lobster",
    },
    h6: {
      fontFamily: "Lobster",
    },
  },
});

export const theme = createTheme(themeOptions());
export const darkTheme = createTheme(themeOptions("dark"));

export const MenuLink = styled(Link)(({ theme }) => ({
  textDecoration: "none",
  fontSize: "4rem",
}));

export const MenuText = styled(Typography)(({ theme }) => ({
  fontWeight: "bolder",
}));
