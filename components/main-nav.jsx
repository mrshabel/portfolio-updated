import Link from "next/link";
import ThemeToggler from "./theme-toggler";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <header className="fixed h-[8vh] w-screen z-50 backdrop-blur-sm  px-4 py-4">
      <nav className="mx-auto h-full max-w-[700px] flex justify-between items-center">
        <section className="">
          <Link href="/">
            <span className="font-bold text-lg ">SG</span>
          </Link>
        </section>
        <section className="flex gap-2">
          <ThemeToggler />

          <Button
            asChild
            variant="outline"
            className="rounded-full outline-violet-500 "
          >
            <a href="mailto:shabel500@gmail.com" target="_blank">
              contact
            </a>
          </Button>
        </section>
      </nav>
    </header>
  );
}
