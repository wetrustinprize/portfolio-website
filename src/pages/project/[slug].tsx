import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import Layout from "@components/Layout";

interface IProject {
  source: any;
}

const Project: NextPage<IProject> = ({ source }: IProject) => {
  return (
    <Layout useSmallerMargin>
      <MDXRemote {...source} components={{}} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: true,
    paths: [{ params: { slug: "zork" } }],
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const source = "Some **mdx** text, with a component";
  const mdxSource = await serialize(source);
  return { props: { source: mdxSource } };
};

export default Project;
