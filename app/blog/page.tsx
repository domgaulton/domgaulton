
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BlogIndex = () => {
  const files = fs.readdirSync(path.join("data/blogs/content"));
  const posts = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(
      path.join("data/blogs/content", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return {
      slug: filename.replace(".md", ""),
      frontmatter,
    };
  });

  return (
    <div>
      <h1>Blog</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/blog/${post.slug}`}>
              <h2>{post.frontmatter.title}</h2>
              <p>{post.frontmatter.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogIndex;
