import fs from "fs";
import path from "path";
import matter from "gray-matter";

const CONTENT_PATH = path.join(process.cwd(), "content", "writing");

export type ArticleMeta = {
  title: string;
  description?: string;
  date?: string;
  type?: string;
  category?: string;
  slug: string[];
};

function walkDirectory(dir: string, fileList: string[] = []): string[] {
  const entries = fs.readdirSync(dir);

  for (const entry of entries) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    if (stat.isDirectory()) {
      walkDirectory(fullPath, fileList);
    } else if (entry.endsWith(".mdx")) {
      fileList.push(fullPath);
    }
  }

  return fileList;
}

export function getAllArticles(): ArticleMeta[] {
  if (!fs.existsSync(CONTENT_PATH)) {
    return [];
  }

  const files = walkDirectory(CONTENT_PATH);

  return files.map((fullPath) => {
    const source = fs.readFileSync(fullPath, "utf-8");
    const { data } = matter(source);

    const slug = fullPath
      .replace(CONTENT_PATH, "")
      .replace(/\.mdx$/, "")
      .split(path.sep)
      .filter(Boolean);

    return {
      title: data.title ?? "Untitled Article",
      description: data.description ?? "",
      date: data.date ?? "",
      type: data.type ?? "",
      category: data.category ?? "",
      slug,
    };
  });
}

export function getArticlesByCategory(categorySlug: string): ArticleMeta[] {
  return getAllArticles().filter((article) =>
    article.slug.includes(categorySlug)
  );
}