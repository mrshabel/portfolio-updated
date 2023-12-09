import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function ProjectCard({ project }) {
  return (
    <section className="w-full flex flex-col space-y-8 md:gap-12 ">
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
      <Image
        src={project.image}
        alt={project.name}
        className="object-center rounded-xl h-[250px] border-4 mx-auto sm:w-[80%] md:h-[400px]"
      />
    </section>
  );
}
