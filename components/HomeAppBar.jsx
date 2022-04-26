import {
  AppBar,
  Box,
  Container,
  Drawer,
  Grid,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

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
                <Typography variant="h6">Michael</Typography>
              </Grid>
              <Grid
                item
                xs={6}
                display={{ xs: "flex", md: "none" }}
                justifyContent="flex-end"
              >
                <Typography variant="h6" onClick={toggleMenu}>
                  Menu
                </Typography>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      <MenuDrawer open={menuOpen} toggleMenu={toggleMenu}>
        <Container sx={{ width: "100vw" }}>
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h6">Michael</Typography>
            <Typography onClick={toggleMenu} variant="h6">
              Xlose
            </Typography>
          </Box>
        </Container>
      </MenuDrawer>
    </>
  );
};

export default HomeAppBar;
