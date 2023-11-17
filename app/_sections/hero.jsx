import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="w-full">
      <section className="mb-2">
        <Image
          src={"/hero.png"}
          loading="lazy"
          alt="hero"
          height={60}
          width={60}
        />
      </section>
      <section className="flex flex-col gap-2 ">
        <h2 className="font-semibold text-lg">I craft interfaces</h2>
        <p className="font-light ">
          Here, I engineer custom solutions precisely tailored to meet your
          needs. With a fusion of creativity and technical prowess, I transform
          challenges into bespoke software solutions. From conceptualization to
          implementation, I ensure every aspect aligns seamlessly with your
          unique requirements.
        </p>
        <Link href="/" className="flex items-center gap-1">
          <span className="underline font-normal ">
            Take me to the magic land
          </span>
          <span>
            <MoveUpRight className="h-3 w-3" />
          </span>
        </Link>
      </section>
    </section>
  );
}
