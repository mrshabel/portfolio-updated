import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="fixed h-[8vh] w-screen z-50 backdrop-blur-sm  px-4 py-4 animate-fade-in-down">
      <nav className="mx-auto h-full w-full px-6 max-w-5xl ">
        <section className="flex justify-between items-center">
          <section className="">
            <Link href="/">
              <span className="font-bold text-lg dark:text-gold">Sha.Bel</span>
            </Link>
          </section>
          <section className="flex gap-2 items-center">
            <ThemeToggler />

            <Button
              asChild
              variant="outline"
              className="rounded-full dark:border-gold "
            >
              <a href="mailto:shabel500@gmail.com" target="_blank">
                contact
              </a>
            </Button>
          </section>
        </section>
      </nav>
    </header>
  );
}
