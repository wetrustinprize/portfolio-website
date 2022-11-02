import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@components/Layout";

import { getMDXPaths, getMDXSource, MDXData, MDXExits } from "src/utils/mdx";

interface IProject {
  source: any;
  data: MDXData;
}

const Project: NextPage<IProject> = ({ source, data }: IProject) => {
  return (
    <Layout useSmallerMargin>
      <h1>{data.title}</h1>
      <h2>{data.description}</h2>
      <MDXRemote {...source} components={{}} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: getMDXPaths("projects"),
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // Check if exists
  if (!params || !params.slug || !MDXExits("projects", params.slug as string))
    return {
      notFound: true,
    };

  // Get information
  const { source, data } = await getMDXSource(
    "projects",
    params.slug as string
  );

  return { props: { source, data } };
};

export default Project;
