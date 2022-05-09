import React from "react";
import { request } from "../../lib/datocms";

export async function getServerSideProps({ params }) {
  const CATEGORIES_QUERY = ``;

  const data = await request({
    query: CATEGORIES_QUERY,
  });

  return {
    props: { data },
  };
}

const Category = ({ data }) => {
  return <div>{console.log(data)}</div>;
};

export default Category;
