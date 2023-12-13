import GoBack from "@/components/go-back";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/db/projects";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export default function page() {
  return (
    <section className="w-full">
      <GoBack />
      <h1 className="text-4xl my-8">Projects</h1>
      <section className="flex flex-col gap-12 sm:gap-16 ">
        {projects.map((project, index) => (
          <section
            key={index}
            className="w-full flex flex-col space-y-6 md:gap-8 "
          >
            <div className="flex flex-col gap-1 w-full mx-auto">
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
                  <MoveRight className="h-2 w-2" />
                </span>
              </a>
            </div>
            <Image
              src={project.image}
              alt={project.name}
              className="object-center rounded-xl h-full h-sm:[350px] border-4 mx-auto w-full md:h-[450px] xl:h-[500px]"
            />
            <Separator className="my-8 w-5 mx-auto" />
          </section>
        ))}
      </section>
    </section>
  );
}
