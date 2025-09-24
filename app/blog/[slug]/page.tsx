import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Markdown from "markdown-to-jsx";
import { CodeBlock } from "@/components/CodeBlock/CodeBlock";
import Image from "next/image";
import { InlineCode } from "@/components/InlineCode/InlineCode";

export const generateStaticParams = async () => {
  const files = fs.readdirSync(path.join("data/blogs/content"));
  const paths = files.map((filename) => ({
    slug: filename.replace(".md", ""),
  }));

  return paths;
};

const getPostContent = (slug: string) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("data/blogs/content", slug + ".md"),
    "utf-8"
  );
  return matter(markdownWithMeta);
};

const BlogPost = async ({
  params,
}: {
  params: Promise<{ slug: string }>
}) => {
  const { slug } = await params;
  const { data: frontmatter, content } = getPostContent(slug);

  return (
    <>
      <div className="px-8">
        <h1 className="text-3xl font-bold">{frontmatter.title}</h1>
        <p className="text-gray-600">{frontmatter.description}</p>
      </div>
      <div className="px-8 border-t border-gray-300 mt-4 pt-4 mb-8 max-w-4xl mx-auto dark:border-gray-600">
        <Markdown
          options={{
            overrides: {
              pre: {
                component: CodeBlock,
              },
              code: {
                component: InlineCode
              },
              img: {
                component: Image,
                props: {
                  width: 800,
                  height: 600,
                  alt: 'Blog image',
                  className: 'my-4 mx-auto',
                },
              },
              h1: {
                component: (props) => <h1 style={{ fontSize: '2rem' }}>{props.children}</h1>
              },
              p: {
                component: (props) => <p style={{ margin: '1rem 0' }} {...props} />
              },
              hr: {
                component: (props) => <hr style={{ border: '1px solid gray', borderWidth: '1px', margin: '1rem 0' }} {...props} />
              },
              ul: {
                component: (props) => (
                  <ul style={{
                    paddingLeft: '1.5em',
                    background: '#f9f9f9',
                    borderRadius: '8px',
                    margin: '1em 0'
                  }} {...props} />
                )
              },
              ol: {
                component: (props) => (
                  <ol style={{
                    paddingLeft: '1.5em',
                    background: '#eef6ff',
                    borderRadius: '8px',
                    margin: '1em 0'
                  }} {...props} />
                )
              },
              li: {
                component: (props) => (
                  <li style={{ marginBottom: '0.5em', fontSize: '1.05em', listStyleType: 'disc' }} {...props} />
                )
              }
            },
          }}
        >
          {content}
        </Markdown>
      </div>
    </>
  );
};

export default BlogPost;
