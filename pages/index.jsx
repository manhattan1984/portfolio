import { Button, Typography } from "@mui/material";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home Page | Michael Greatness</title>
        <meta
          name="description"
          content="Check out my projects, contact me and get the best book recommendations"
        />
      </Head>
      <Typography variant="h3" my={4}>
        Web Developer, Programmer <br /> & Ethical Hacker
      </Typography>
      <Link href="/projects" passHref>
        <Button>See My Projects</Button>
      </Link>{" "}
    </>
  );
}
