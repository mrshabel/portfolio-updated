import BlogSection from "@/components/blog-section";
import { Separator } from "@/components/ui/separator";
import { blogs } from "@/db/blogs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <section className="w-full">
      <section className="space-y-3 md:space-y-4 my-6 lg:my-8">
        <h1 className="text-3xl md:text-4xl font-bold">Blog</h1>
        <p className="text-lg leading-7">
          My opinions on football curated as articles.
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
