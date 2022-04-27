import { Box, IconButton, Typography } from "@mui/material";
import { Instagram, GitHub } from "@mui/icons-material";
import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <>
      <Box my={4}>
        <Typography variant="h4">Contact Me!</Typography>
        <Typography variant="h2" color="secondary">
          mikki
          <br />
          manhattan
          <br />
          @gmail.com
        </Typography>
      </Box>
      <Box my={4}>
        <Typography>Michael Jackson</Typography>
        <Typography>Web Developer, Programmer<br/> & Ethical Hacker</Typography>
      </Box>
      <Box my={4}>
        <Link href="https://www.github.com/manhattan1984" passHref>
          <IconButton>
            <GitHub color="primary" />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/mikkimanhattan" passHref>
          <IconButton>
            <Instagram color="primary" />
          </IconButton>
        </Link>
      </Box>
    </>
  );
}
