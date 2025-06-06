import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

const BLOGS_PATH = path.join(process.cwd(), "blogs");

export async function generateStaticParams() {
    const files = fs.readdirSync(BLOGS_PATH);
    return files
        .filter((f) => f.endsWith(".md"))
        .map((file) => ({ slug: file.replace(/\.md$/, "") }));
}

async function getBlog(slug) {
    const filePath = path.join(BLOGS_PATH, `${slug}.md`);
    if (!fs.existsSync(filePath)) return null;
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data, content } = matter(fileContents);
    return { ...data, slug, content };
}

export default async function Page({ params: { slug } }) {
    const blog = await getBlog(slug);
    if (!blog) return notFound();
    return (
        <section className="w-full bg-card dark:bg-secondaryBlack">
            <div className="flex flex-col gap-2 my-5 mb-2">
                <h1 className="text-4xl">{blog.title}</h1>
                <p className="text-main">Written by: {blog.author}</p>
            </div>
            <article className="prose prose-lg dark:prose-invert max-w-none">
                <ReactMarkdown
                    components={{
                        h1: ({ node, ...props }) => (
                            <h1
                                className="text-4xl font-bold mt-8 mb-4"
                                {...props}
                            />
                        ),
                        h2: ({ node, ...props }) => (
                            <h2
                                className="text-3xl font-bold mt-8 mb-4"
                                {...props}
                            />
                        ),
                        h3: ({ node, ...props }) => (
                            <h3
                                className="text-2xl font-bold mt-6 mb-3"
                                {...props}
                            />
                        ),
                        p: ({ node, ...props }) => (
                            <p className="my-4 leading-7" {...props} />
                        ),
                        ul: ({ node, ...props }) => (
                            <ul className="list-disc pl-6 my-4" {...props} />
                        ),
                        ol: ({ node, ...props }) => (
                            <ol className="list-decimal pl-6 my-4" {...props} />
                        ),
                        li: ({ node, ...props }) => (
                            <li className="my-2" {...props} />
                        ),
                        blockquote: ({ node, ...props }) => (
                            <blockquote
                                className="border-l-4 border-gray-300 dark:border-gray-700 pl-4 my-4 italic"
                                {...props}
                            />
                        ),
                        code({ node, inline, className, children, ...props }) {
                            const match = /language-(\w+)/.exec(
                                className || ""
                            );
                            return !inline && match ? (
                                <div className="my-4">
                                    <SyntaxHighlighter
                                        // style={vscDarkPlus}
                                        language={match[1]}
                                        PreTag="div"
                                        className="rounded-lg"
                                        {...props}
                                    >
                                        {String(children).replace(/\n$/, "")}
                                    </SyntaxHighlighter>
                                </div>
                            ) : (
                                <code
                                    className="bg-gray-100 dark:bg-gray-800 rounded px-1.5 py-0.5 text-sm"
                                    {...props}
                                >
                                    {children}
                                </code>
                            );
                        },
                        a: ({ node, ...props }) => (
                            <a
                                className="text-blue-600 dark:text-blue-400 hover:underline"
                                {...props}
                            />
                        ),
                    }}
                >
                    {blog.content}
                </ReactMarkdown>
            </article>
        </section>
    );
}
