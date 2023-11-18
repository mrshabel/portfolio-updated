import { MoveUpRight } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <section className="w-full flex flex-col space-y-8 sm:flex-row-reverse sm:justify-between sm:items-center sm:gap-8 md:gap-12 ">
      <div className="w-full h-[250px] sm:w-[250px] md:w-[300px] sm:h-[150px] rounded-md shadow-md bg-muted blur-[1px] ">
        {project.image}
      </div>
      <div className="flex flex-col gap-1 w-full">
        <h1 className="font-medium text-lg ">{project.name}</h1>
        <p className="font-extralight text-[12px]">{project.duration}</p>
        <p className="font-light">{project.about}</p>
        <a
          href={project.link}
          target="_blank"
          className="flex items-center gap-1 text-[12px] w-fit"
        >
          <span className="underline font-semibold">Check it out</span>
          <span>
            <MoveUpRight className="h-2 w-2" />
          </span>
        </a>
      </div>
    </section>
  );
}
