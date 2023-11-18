import ProjectCard from "@/components/project-card";
import { projects } from "@/db/projects";
import { MoveRight } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  return (
    <section className="">
      <h1 className="font-semibold mb-4 text-xl">Selected Projects</h1>
      <section className="flex flex-col gap-8 sm:gap-12 ">
        {projects.map(
          (project, index) =>
            project.selected && <ProjectCard key={index} project={project} />
        )}
      </section>
      <Link href="/" className="flex items-center gap-1 text-[14px] my-10">
        <span className="underline font-semibold ">View all projects</span>
        <span>
          <MoveRight className="h-3 w-3" />
        </span>
      </Link>
    </section>
  );
}
