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
        <h2 className="font-semibold text-lg">Hey there, I'm Shabel!</h2>
        <p className="font-light">
          I engineer custom software solutions, tailoring them precisely to your
          needs.
        </p>
        <p className="font-light">
          I also create content about football through articles.
        </p>
        <Link href="/blog" className="flex items-center gap-1 text-sm">
          <span className="underline font-semibold ">
            Take me to the magic land
          </span>
          <span>
            <MoveUpRight className="h-2 w-2" />
          </span>
        </Link>
      </section>
    </section>
  );
}
