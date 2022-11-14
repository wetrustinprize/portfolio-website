import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@components/Layout";
import { MDXData } from "src/utils/MDX/Data";
import { getMDXPaths } from "src/utils/MDX/Paths";
import { getMDX, MDXExists } from "src/utils/MDX/MDX";

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
  if (!params || !params.slug || !MDXExists("projects", params.slug as string))
    return {
      notFound: true,
    };

  // Get information
  const { source, data } = await getMDX("projects", params.slug as string);

  return { props: { source, data } };
};

export default Project;