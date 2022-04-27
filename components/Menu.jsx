import { Grid, Container, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import React from "react";
import { MenuLink, MenuText } from "../styles/styles";

const Menu = ({ toggleMenu }) => {
  return (
    <Container sx={{ width: "100vw" }}>
      <Grid container m={2}>
        <Grid container justifyContent="space-between">
          <Typography variant="h6">Michael</Typography>

          <IconButton onClick={toggleMenu} sx={{
              mr: 5
          }}>
            <CloseIcon color="primary"/>
          </IconButton>
        </Grid>

        <Grid
          container
          direction="column"
          justifyContent="space-around"
          alignItems="flex-start"
          my={4}
        >
          <Link href="/" passHref>
            <MenuLink onClick={toggleMenu}>HOME</MenuLink>
          </Link>
          <Link href="/projects" passHref>
            <MenuLink onClick={toggleMenu}>PROJECTS</MenuLink>
          </Link>
          <Link href="/about" passHref>
            <MenuLink onClick={toggleMenu}>ABOUT</MenuLink>
          </Link>
          <Link href="/contact" passHref>
            <MenuLink onClick={toggleMenu}>CONTACT</MenuLink>
          </Link>
        </Grid>

        <Grid container direction="column" mt={1}>
          <MenuText color="secondary" variant="subtitle1">Currently Freelancer</MenuText>
          <MenuText color="secondary" variant="subtitle1">Based In Port Harcourt</MenuText>
          <MenuText color="secondary" variant="subtitle1">Nigeria</MenuText>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Menu;
