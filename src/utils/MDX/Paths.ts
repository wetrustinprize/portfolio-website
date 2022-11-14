import * as fs from "fs";
import * as path from "path";

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
