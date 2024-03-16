import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full">
            <section className="mb-2">
                <Image
                    src={"/profile.png"}
                    loading="lazy"
                    alt="hero"
                    height={60}
                    width={60}
                    className="hover:-rotate-12  transition-transform"
                />
            </section>
            <section className="flex flex-col gap-2 ">
                <h2 className="font-semibold text-lg">
                    Hi there, I&apos;m Shabel
                </h2>
                <p className="font-light">
                    a software engineer based in Ghana.
                </p>
                <p className="font-light">
                    I also create content about football through articles.
                </p>
                <Link
                    href="/blog"
                    className="flex items-center gap-1 text-xs mt-2 text-primary/90 dark:text-gold/90"
                >
                    <span className="underline">Take me to the magic land</span>
                    <span>
                        <MoveUpRight className="h-2 w-2" />
                    </span>
                </Link>
            </section>
        </section>
    );
}
