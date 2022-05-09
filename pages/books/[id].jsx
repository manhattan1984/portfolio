import { Typography } from "@mui/material";
import React from "react";
import { Books } from ".";
import { request } from "../../lib/datocms";
import { responsiveImageFragment } from "../../lib/fragments";

export async function getServerSideProps({ params }) {
  const CATEGORIES_QUERY = `query Books($id: ItemId) {
    allBooks(filter: {category: {eq: $id}}) {
      name
      summary
      category {
        name
        title
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
    query: CATEGORIES_QUERY,
    variables: { id: params.id },
  });

  return {
    props: { data },
  };
}

const Category = ({ data }) => {
  const title = data.allBooks[0].category.title;
  return (
    <>
      <Typography variant="h6" my={4}>{title}</Typography>
      <Books data={data} />
    </>
  );
};

export default Category;
