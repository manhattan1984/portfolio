import React from "react";
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
  const data = params.slug;

  return {
    props: {data},
  };
}

const ProjectInfo = ({ data }) => {
  return <div>{console.log(data)}</div>;
};

export default ProjectInfo;
