import {
  AppBar,
  Box,
  Button,
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
import Menu, { LINKS } from "./Menu";

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
  const [active, setActive] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    <>
      <Grid
        container
        position="sticky"
        sx={{
          top: 20,
          zIndex: "tooltip",
        }}
      >
        <Grid item xs={6} md={4}>
          <Link href="/" passHref>
            <Typography
              sx={{
                cursor: "pointer",
              }}
              variant="h6"
              color="primary"
            >
              Michael
            </Typography>
          </Link>
        </Grid>
        {/* Mobile */}
        <Grid
          item
          xs={6}
          display={{ xs: "flex", md: "none" }}
          justifyContent="flex-end"
        >
          <IconButton onClick={toggleMenu}>
            <MenuIcon color="primary" />
          </IconButton>
        </Grid>
        {/* Larger */}
        <Grid item md={8} display={{ xs: "none", md: "flex" }}>
          <Grid container justifyContent="flex-end">
            {LINKS.map(({ name, link }) => (
              <Link href={link} key={name} passHref>
                <Button
                  onClick={() => {
                    setActive(name);
                  }}
                  sx={{
                    ...(name === active && {
                      border: 1,
                      // borderColor: 'secondary.main'
                    }),
                  }}
                >
                  {name}
                </Button>
              </Link>
            ))}
          </Grid>
        </Grid>
      </Grid>

      <MenuDrawer open={menuOpen} toggleMenu={toggleMenu}>
        <Menu toggleMenu={toggleMenu} setActive={setActive} active={active} />
      </MenuDrawer>
    </>
  );
};

export default HomeAppBar;
