import { Box, Button, Container, IconButton, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Link from "next/link";
import { Instagram } from "@mui/icons-material";

export default function Home() {
  return (
    <Container>
      <Typography variant="h3" my={4}>
        Web Developer, Programmer <br /> & Ethical Hacker
      </Typography>
      <Link href="/work">
        <Button>See My Works</Button>
      </Link>

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
        <Typography>Web Developer & Ethical Hacker</Typography>
      </Box>

      <Box my={4}>
        <Link href="https://www.github.com/manhattan1984">
          <IconButton>
            <GitHubIcon color="primary" />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/mikkimanhattan">
          <IconButton>
            <Instagram color="primary" />
          </IconButton>
        </Link>
      </Box>
    </Container>
  );
}
