import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { Image } from "react-datocms";
import { request } from "../lib/datocms";
import { responsiveImageFragment } from "../lib/fragments";

export async function getServerSideProps() {
  const query = `
    {
        allBooks {
          name
          summary
          author
          cover {
            responsiveImage(imgixParams: {fit: crop, w: 150, h: 200, auto: format}){
                ...responsiveImageFragment
            }
          }
        }
      }

      ${responsiveImageFragment}
    `;

  const data = await request({
    query,
  });

  return {
    props: {
      data,
    },
  };
}

const Book = ({ name, cover, summary }) => {
  return (
    <Grid item>
      <Grid container spacing={4}>
        <Grid item>
          <Image data={cover.responsiveImage} alt="A Book"/>{" "}
        </Grid>
        <Grid item>
          <Typography variant="h6" my={2}>{name}</Typography>
          <Typography variant="subtitle1">{summary}</Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

const Books = ({ data }) => {
  const { allBooks } = data;

  return (
    <>
      <Typography variant="h3" my={4}>
        Books That Influenced Me Most
      </Typography>
      <Grid container spacing={4}>
        {allBooks.map(({ name, cover, summary }, index) => (
          <Book name={name} cover={cover} summary={summary} key={index} />
        ))}
      </Grid>
    </>
  );
};

export default Books;
