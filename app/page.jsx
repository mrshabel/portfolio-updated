import Image from "next/image";
import Hero from "./_sections/hero";
import { Separator } from "@/components/ui/separator";
import Projects from "./_sections/projects";
import DeveloperTools from "./_sections/tools";

export default function Home() {
  return (
    <main className="flex  flex-col items-center mx-auto min-h-screen  p-24 px-6 max-w-4xl ">
      <Hero />
      <Separator className="my-8 sm:my-12 w-5" />
      <Projects />
      <Separator className="my-8 sm:my-12 w-5" />
      <DeveloperTools />
      <Separator className="mt-8 w-5" />
    </main>
  );
}
