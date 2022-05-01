import { Button, Grid, Link, Typography } from "@mui/material";
import React from "react";
import { request } from "../lib/datocms";

export async function getStaticProps() {
  const query = `{
    allServices {
      name
    }
    allHobbies {
      name
    }
  }`;

  const data = await request({
    query,
  });

  return {
    props: { data },
  };
}

const About = ({ data }) => {
  const { allServices, allHobbies } = data;
  return (
    <>
      <Typography variant="h3" my={4}>
        Hello, I&apos;m Michael
      </Typography>
      <Typography variant="subtitle1" my={4}>
        But you can call me &ldquo;Greatness&ldquo;
      </Typography>

      <Typography variant="h4" my={4}>
        I Can ...
      </Typography>
      <Grid container spacing={4}>
        {allServices.map(({ name }, index) => (
          <Service name={name} key={index} />
        ))}
      </Grid>

      <Typography variant="h4" my={4}>
        I Love To ...
      </Typography>
      <Grid container spacing={4}>
        {allHobbies.map(({ name }, index) => (
          <Service name={name} key={index} />
        ))}
      </Grid>
    </>
  );
};

const Service = ({ name }) => {
  return (
    <Grid item xs={12}>
      <Typography variant="subtitle1">{name}</Typography>
    </Grid>
  );
};

export default About;
