import BlogSection from "@/components/blog-section";
import { Separator } from "@/components/ui/separator";
import React from "react";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

const BLOGS_PATH = path.join(process.cwd(), "blogs");

function getAllBlogs() {
    const files = fs.readdirSync(BLOGS_PATH);
    return files
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
            const slug = file.replace(/\.md$/, "");
            const filePath = path.join(BLOGS_PATH, file);
            // retrieve the markdown contents
            const fileContents = fs.readFileSync(filePath, "utf8");
            const { data } = matter(fileContents);
            return {
                ...data,
                slug,
            };
        })
        .sort((a, b) => new Date(b.date) - new Date(a.date));
}

export default function page() {
    const blogs = getAllBlogs();
    return (
        <section className="w-full">
            <section className="space-y-3 md:space-y-4 my-6 lg:my-8">
                <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
                <p className="text-lg leading-7">
                    My opinions on football & systems curated as articles.
                </p>
            </section>
            <Separator
                orientation="horizontal"
                className="w-full mb-3 h-[0.5px] opacity-50 dark:opacity-20"
            />
            <section>
                <ul className="">
                    {blogs.map((blog) => (
                        <React.Fragment key={blog.slug}>
                            <BlogSection key={blog.slug} blog={blog} />
                            <Separator
                                orientation="horizontal"
                                className="w-full my-5 h-[0.5px] opacity-50 dark:opacity-20"
                            />
                        </React.Fragment>
                    ))}
                </ul>
            </section>
        </section>
    );
}
