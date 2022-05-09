import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import { Image } from "react-datocms";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";

export async function getServerSideProps() {
  const query = `
    {
        allBooks {
          name
          summary
          author
          category {
            id
            name
          }
          cover {
            responsiveImage(imgixParams: {fit: crop, w: 150, h: 200, auto: format}){
                ...responsiveImageFragment
            }
          }
        }

        allCategories {
          id
          name
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
            {category.id ? (
              <Link href={`books/${category.id}`} passHref>
                <Button color="secondary">{category.name}</Button>
              </Link>
            ) : null}
          </Box>
          <Image data={cover.responsiveImage} alt="A Book" />{" "}
          <Typography variant="subtitle1" sx={{ width: "100%" }}>
            {summary}
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  );
};

export const Books = ({ data, title }) => {
  const { allBooks } = data;

  return (
    <>
      <Typography variant="h3" my={4}>
        {title}
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

const Index = ({ data }) => {
  const { allCategories } = data;
  return (
    <Grid container spacing={8}>
      <Grid item>
        <Typography variant="h5" my={4}>These Are The Books That Have Inspired Me Most</Typography>
        <Books
          data={data}
        />
      </Grid>

      <Grid item justifyContent="flex-end">
        <Typography variant="h6">Categories</Typography>
        <Grid container>
          {allCategories.map(({ name, id, index }) => (
            <Grid item xs={12}>
              <Link href={`books/${id}`} passHref>
                <Button color="secondary">{name}</Button>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Index;
