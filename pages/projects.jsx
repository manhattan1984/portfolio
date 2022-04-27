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

const PROJECTS_QUERY = `query Project {
  allProjects {
    id
    name
    _status
    _firstPublishedAt
    about
    slug
    preview {
      responsiveImage(imgixParams: {fit: crop, w: 300, h: 300, auto: format}) {
        srcSet
        webpSrcSet
        sizes
        src
        width
        height
        aspectRatio
        alt
        title
        base64
      }
    }
  }
}`;

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
    <Grid container>
      {allProjects.map(({ name, about, preview, slug }, index) => (
        <ProjectItem
          name={name}
          about={about}
          preview={preview}
          slug={slug}
          key={index}
        />
      ))}
    </Grid>
  );
};

const ProjectItem = ({ name, about, preview, slug }) => {
  return (
    <Grid item>
      <Card>
        <CardContent>
          <CardMedia>
            <Image data={preview.responsiveImage} />
          </CardMedia>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="body1">{about}</Typography>
        </CardContent>
        <CardActions>
          <Link href="https://skycryptotrades.com/" passHref>
            <IconButton>
              <LanguageOutlined color="secondary" />
            </IconButton>
          </Link>
          {console.log(slug)}
          <Link href={`/project/${slug}`} passHref>
            <Button variant="secondary">See More</Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default Projects;
