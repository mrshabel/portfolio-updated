import Image from "next/image";
import Hero from "./sections/hero";
import { Separator } from "@/components/ui/separator";
import Projects from "./sections/projects";
import DeveloperTools from "./sections/tools";

export default function Home() {
    return (
        <main className="flex  flex-col items-center">
            <Hero />
            <Separator className="my-8 sm:my-12 w-5" />
            <Projects />
            <Separator className="my-8 sm:my-12 w-5" />
            <DeveloperTools />
            <Separator className="mt-8 w-5" />
        </main>
    );
}
