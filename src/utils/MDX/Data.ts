import * as fs from "fs";
import matter from "gray-matter";
import * as path from "path";

export interface MDXData {
  title: string;
  description: string;
  tags?: string[];
  banner?: string;

  slug: string;

  /** The MDX content (without the data) */
  content: string;
}

/**
 * Get all data from a folder
 * @param folder The folder to read the files from
 * @returns The data of all files in the folder
 */
export const getAllDatas = (folder: string): MDXData[] => {
  const files = fs.readdirSync(path.join("data", folder));
  return files.map((file) => getData(folder, file));
};

/**
 * Gets the data of a single file
 * @param folder The folder to read the file from
 * @param slug The slug of the file to read
 * @returns The data of the file
 */
export const getData = (folder: string, slug: string): MDXData => {
  const raw = fs.readFileSync(path.join("data", folder, slug), "utf-8");
  const { data, content } = matter(raw);

  const formatedData = {
    description: data.description,
    tags: data.tags.split(", "),
    title: data.title,
    banner: data.banner,
    content,
    slug,
  } as MDXData;

  return formatedData;
};
