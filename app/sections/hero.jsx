import { Button } from "@/components/ui/button";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
    return (
        <section className="w-full">
            <section className="mb-4 mt-6">
                <div className="w-fit border-border shadow-[4px_4px_0_border]">
                    <Image
                        src="/profile.png"
                        alt="Shabel - Software Engineer"
                        height={80}
                        width={80}
                        className="grayscale"
                        priority
                    />
                </div>
            </section>
            <section className="flex flex-col gap-3 bg-card dark:bg-secondaryBlack w-fit">
                <h2 className="font-mono text-2xl font-bold uppercase">
                    Shabel
                </h2>
                <p className="font-mono text-base">Software Engineer, Ghana.</p>
                <p className="font-mono text-sm">
                    Distributed systems & football enthusiast.
                </p>
                <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-main animate-pulse"></div>
                    <code className="font-mono text-xs">Gopher</code>
                </div>
                <Button className="w-fit mt-4">
                    <Link
                        href="/blog"
                        className="font-mono text-sm flex items-center justify-center gap-1"
                    >
                        <span>Read my Blog</span>
                        <MoveUpRight className="h-4 w-4" />
                    </Link>
                </Button>
            </section>
        </section>
    );
}
