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
const Menu = ({ toggleMenu, setActive, active }) => {
  return (
    <Container sx={{ width: "100vw" }}>
      <Grid container my={4}>
        <Grid container justifyContent="space-between">
          <Grid item>
            <Link href="/" passHref>
              <Typography
                sx={{
                  cursor: "pointer",
                }}
                variant="h6"
                onClick={toggleMenu}
              >
                Michael
              </Typography>
            </Link>
          </Grid>

          <Grid item>
            <IconButton onClick={toggleMenu}>
              <CloseIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          my={4}
        >
          {LINKS.map(({ name, link }, index) => (
            <Grid item key={index}>
              <Link href={link} passHref>
                <MenuLink
                  sx={{
                    ...(name === active && {
                      borderBottom: 1,
                    }),
                  }}
                  onClick={() => {
                    toggleMenu();
                    setActive(name);
                  }}
                >
                  {name}
                </MenuLink>
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
