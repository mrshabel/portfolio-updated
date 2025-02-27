import { Fuggles } from "next/font/google";
import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";
import { Mail } from "lucide-react";

const fuggles = Fuggles({
    weight: "400",
    subsets: ["latin"],
});

export default function Navbar() {
    return (
        <header className="fixed h-[8vh] w-screen z-50 backdrop-blur-sm  px-4 py-4 animate-fade-in-down">
            <nav className="mx-auto h-full w-full px-6 max-w-5xl ">
                <section className="flex justify-between items-center">
                    <section className="">
                        <Link href="/">
                            <span
                                className={`${fuggles.className} font-bold text-3xl dark:text-gold`}
                            >
                                Sha.Bel
                            </span>
                        </Link>
                    </section>
                    <section className="flex gap-3 items-center">
                        <ThemeToggler />

                        <Button asChild size="icon">
                            <a
                                href="mailto:shabel500@gmail.com"
                                target="_blank"
                            >
                                <Mail />
                                <span className="sr-only">
                                    Contact Me via Email
                                </span>
                            </a>
                        </Button>
                    </section>
                </section>
            </nav>
        </header>
    );
}
