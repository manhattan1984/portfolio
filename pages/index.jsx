import { Button, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <>
      <Typography variant="h3" my={4}>
        Web Developer, Programmer <br /> & Ethical Hacker
      </Typography>
      <Link href="/projects" passHref>
        <Button>See My Projects</Button>
      </Link>{" "}
    </>
  );
}
