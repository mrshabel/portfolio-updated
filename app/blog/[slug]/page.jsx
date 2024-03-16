import { blogs } from "@/db/blogs";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
    blogs.map((blog) => ({ slug: blog.slug }));

export default function page({ params: { slug } }) {
    const blog = blogs.find((blog) => blog.slug === slug);

    if (!blog) return notFound();
    return (
        <section className="w-full">
            <div className="flex flex-col gap-2 my-5">
                <h1 className="text-4xl">{blog.title}</h1>
                <p className="text-primary/90 dark:text-gold/90">
                    Written by: {blog.author}
                </p>
            </div>
            <section className="text-primary/90 last:pb-0">
                {blog.content.split("\n").map((paragraph, index) => (
                    <p
                        className="px-2 py-2 text-sm leading-6 tracking-widest text-justify"
                        key={index}
                    >
                        {paragraph}
                    </p>
                ))}
            </section>
        </section>
    );
}
