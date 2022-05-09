import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";

export async function getStaticProps() {
  const query = `
    {
        allBooks {
          name
          summary
          author
          category {
            slug
            name
          }
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

const Book = ({ name, cover, summary, category }) => {
  return (
    <Grid item md={6}>
      <Grid container spacing={4}>
        <Grid item>
          <Box display="flex" justifyContent="space-between">
            <Typography
              variant="subtitle"
              my={2}
              sx={{
                fontWeight: "bolder",
              }}
            >
              {name}
            </Typography>
            {/* <Link href={`books/${category.slug}`} passHref> */}
              <Button color="secondary">{category.name}</Button>
            {/* </Link> */}
          </Box>
          <Image data={cover.responsiveImage} alt="A Book" />{" "}
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            {summary}
          </Typography>
        </Grid>
        <Grid item></Grid>
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
        {allBooks.map(({ name, cover, summary, category }, index) => (
          <Book
            name={name}
            cover={cover}
            summary={summary}
            category={category}
            key={index}
          />
        ))}
      </Grid>
    </>
  );
};

export default Books;
