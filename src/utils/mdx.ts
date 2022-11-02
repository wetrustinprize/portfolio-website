import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import * as fs from "fs";
import * as path from "path";

export interface MDXData {
  title: string;
  description: string;
  banner?: string;
}

/**
 * Read a specific MDX
 * @param folder The folder to read the files from
 * @param slug The slug of the file to read
 * @returns The content of the file
 */
export const getMDXSource = async (folder: string, slug: string) => {
  const raw = fs.readFileSync(
    path.join("data", folder, `${slug}.mdx`),
    "utf-8"
  );

  const { content, data } = matter(raw);
  const source = await serialize(content);

  return { data: data as MDXData, source, raw };
};

/**
 * Check if a MDX exists
 * @param folder The folder to read the .mdx from
 * @param slug The slug of the file to read
 * @returns If the file exists
 */
export const MDXExits = (folder: string, slug: string) => {
  return fs.existsSync(path.join("data", folder, `${slug}.mdx`));
};

/**
 * Generate paths from a mdx directory
 * @param folder The folder to read the .mdx files from (relative to the 'data' folder)
 * @returns The list with the paths to the .mdx files
 */
export const getMDXPaths = (folder: string) => {
  // Get all files in the `data/projects` directory
  const files = fs.readdirSync(path.join("data", folder));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return paths;
};
