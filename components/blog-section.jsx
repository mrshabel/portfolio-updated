import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function BlogSection({ blog }) {
    return (
        <li className="py-2">
            <article>
                <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                        <dt className="sr-only">Published on</dt>
                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time dateTime={blog.date}>
                                {formatDate(blog.date)}
                            </time>
                        </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                        <div className="space-y-6">
                            <div>
                                <h2 className="text-2xl dark:text-gold/90 font-bold leading-8 tracking-tight">
                                    <Link href={`/blog/${blog.slug}`}>
                                        {blog.title}
                                    </Link>
                                </h2>
                            </div>
                            <div className="prose max-w-none text-lg leading-7 text-gray-500 dark:text-gray-400">
                                {blog.summary}
                            </div>
                        </div>
                        <div className="text-base font-medium leading-6">
                            <Link
                                href={`/blog/${blog.slug}`}
                                className="text-primary-500 text-sm hover:text-primary-600 dark:hover:text-gold"
                                aria-label={`Read more: "${blog.title}"`}
                            >
                                Read more &rarr;
                            </Link>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
}
