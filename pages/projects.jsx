import { request } from "../lib/datocms";
import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { LanguageOutlined } from "@mui/icons-material";
import Link from "next/link";
import { Image } from "react-datocms";
import { responsiveImageFragment } from "../lib/fragments";
import Head from "next/head";

const PROJECTS_QUERY = `query Project {
    allProjects {
      id
      name
      about
      slug
      link
      preview {
        responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format}){
          ...responsiveImageFragment
        }
      }
    }
  } 
${responsiveImageFragment}
`;

export async function getStaticProps() {
  const data = await request({
    query: PROJECTS_QUERY,
  });

  return {
    props: {
      data,
    },
  };
}

const Projects = ({ data }) => {
  const { allProjects } = data;
  return (
    <>
      <Head>
        <title>Projects | Michael Greatness</title>
        <meta
          name="description"
          content="Check Out The Projects I'm Most Proud Of. Contact Me For Beautiful Designs Like These"
        />
      </Head>
      <Grid container my={4} spacing={4}>
        {allProjects.map(({ name, about, preview, slug, link }, index) => (
          <ProjectItem
            name={name}
            about={about}
            preview={preview}
            slug={slug}
            key={index}
            link={link}
          />
        ))}
      </Grid>
    </>
  );
};

const ProjectItem = ({ name, about, preview, link }) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 345 }}>
        <CardContent>
          <CardMedia>
            <Image data={preview.responsiveImage} alt="project image" />
          </CardMedia>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{about}</Typography>
        </CardContent>
        <CardActions>
          <Link href={link} passHref>
            <IconButton>
              <LanguageOutlined color="secondary" />
            </IconButton>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Projects;
