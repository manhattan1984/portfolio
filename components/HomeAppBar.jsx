import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";

function MenuDrawer({ children, open, toggleMenu }) {
  return (
    <React.Fragment>
      <Drawer anchor="right" open={open} onClose={toggleMenu}>
        {children}
      </Drawer>
    </React.Fragment>
  );
}

const HomeAppBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            <Grid container>
              <Grid item xs={6}>
                <Link href="/">
                  <Typography variant="h6">Michael</Typography>
                </Link>
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <IconButton onClick={toggleMenu}>
                  <MenuIcon sx={{
                    color: "#fafafa"
                  }} />
                </IconButton>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <MenuDrawer open={menuOpen} toggleMenu={toggleMenu}>
        <Menu toggleMenu={toggleMenu} />
      </MenuDrawer>
    </>
  );
};

export default HomeAppBar;
