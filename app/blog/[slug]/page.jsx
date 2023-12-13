import { blogs } from "@/db/blogs";
import { MoveLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export const generateStaticParams = async () =>
  blogs.map((blog) => ({ slug: blog.slug }));

export default function page({ params: { slug } }) {
  const blog = blogs.find((blog) => blog.slug === slug);

  if (!blog) return notFound();
  return (
    <section className="w-full">
      <h1 className="text-4xl my-5">Page is currently under construction🚧</h1>
    </section>
  );
}
