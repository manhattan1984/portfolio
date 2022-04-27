import { LanguageOutlined } from "@mui/icons-material";
import {
  Box,
  Container,
  Grid,
  IconButton,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { metaTagsFragment, responsiveImageFragment } from "../../lib/fragments";

export async function getStaticPaths() {
  const data = await request({
    query: `{ allProjects { slug } }`,
  });

  return {
    paths: data.allProjects.map((project) => `/project/${project.slug}`),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const GET_PROJECT_QUERY = `
   {
      allProjects(filter: {slug: {eq: "skycryptotrades"}}) {
        name
        about
        screenshots {
          responsiveImage(imgixParams: { fit: crop, w: 300, h: 300 }){
            ...responsiveImageFragment
          }
        }
      }
  }

  ${responsiveImageFragment}
  `;

  const data = await request({
    query: GET_PROJECT_QUERY,
  });

  console.log(data);

  return {
    props: { data },
  };
}

const ProjectInfo = ({ data }) => {
  const { name, about, screenshots } = data.allProjects[0];
  return data ? (
    <>
      <Grid container spacing={4} alignItems="center" my={4}>
        <Grid item>
          <Typography variant="h3" color="secondary">
            {name}
          </Typography>
        </Grid>

        <Grid item>
          <Link href="https://skycryptotrades.com" passHref>
            <IconButton>
              <LanguageOutlined color="secondary" />
            </IconButton>
          </Link>
        </Grid>
      </Grid>

      <Typography my={4}>{about}</Typography>
      <ImageList cols={1} gap={16} my={4}>
        {screenshots.map((image, index) => (
          <ImageListItem key={index}>
            <Image data={image.responsiveImage} />
          </ImageListItem>
        ))}
      </ImageList>
    </>
  ) : null;
};

export default ProjectInfo;
