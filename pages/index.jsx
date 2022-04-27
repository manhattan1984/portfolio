import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Typography variant="h3" my={4}>
        Web Developer, Programmer <br /> & Ethical Hacker
      </Typography>
      <Link href="/projects">
        <Button>See My Projects</Button>
      </Link>
    </>
  );
}
