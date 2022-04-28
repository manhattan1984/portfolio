import { Grid, Container, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React from "react";
import { MenuLink, MenuText } from "../styles/styles";

export const LINKS = [
  {
    name: "HOME",
    link: "/",
  },
  {
    name: "PROJECTS",
    link: "/projects",
  },
  {
    name: "ABOUT",
    link: "/about",
  },
  {
    name: "BOOKS",
    link: "/books",
  },
];
const Menu = ({ toggleMenu }) => {
  return (
    <Container sx={{ width: "100vw" }}>
      <Grid container my={4}>
        <Grid container justifyContent="space-between">
          <Typography variant="h6">Michael</Typography>

          <IconButton onClick={toggleMenu}>
            <CloseIcon />
          </IconButton>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          my={4}
        >
          {LINKS.map(({ name, link }, index) => (
            <Grid item>
              <Link href={link} passHref key={index}>
                <MenuLink onClick={toggleMenu}>{name}</MenuLink>
              </Link>
            </Grid>
          ))}
        </Grid>

        <Grid container direction="column" mt={1}>
          <MenuText color="secondary" variant="subtitle1">
            Currently Freelancer
          </MenuText>
          <MenuText color="secondary" variant="subtitle1">
            Based In Port Harcourt
          </MenuText>
          <MenuText color="secondary" variant="subtitle1">
            Nigeria
          </MenuText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
