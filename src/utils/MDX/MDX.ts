import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { getData, MDXData } from "./Data";

import * as fs from "fs";
import * as path from "path";

import { serialize } from "next-mdx-remote/serialize";

export interface MDXFull {
  data: MDXData;
  source: MDXRemoteSerializeResult<any>;
}

/**
 * Read a specific MDX
 * @param folder The folder to read the files from
 * @param slug The slug of the file to read
 * @returns The content of the file
 */
export const getMDX = async (
  folder: string,
  slug: string
): Promise<MDXFull> => {
  const data = getData(folder, slug);
  const source = await serialize(data.content);

  return { data, source };
};

/**
 * Check if a MDX exists
 * @param folder The folder to read the .mdx from
 * @param slug The slug of the file to read
 * @returns If the file exists
 */
export const MDXExists = (folder: string, slug: string) => {
  return fs.existsSync(path.join("data", folder, `${slug}.mdx`));
};
