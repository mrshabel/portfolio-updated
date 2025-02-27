import GoBack from "@/components/go-back";
import { Separator } from "@/components/ui/separator";
import { projects } from "@/db/projects";
import { MoveUpRight, Github } from "lucide-react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Page() {
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
                        <Card className="w-full bg-card text-card-foreground border-border transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200">
                            <CardHeader className="p-4">
                                <CardTitle className="flex justify-between items-center">
                                    <div>
                                        <h1 className="font-mono text-2xl font-extrabold uppercase tracking-tight">
                                            {project.name}
                                        </h1>
                                        <p className="font-mono text-xs opacity-80">
                                            {project.duration}
                                        </p>
                                    </div>
                                    <div>
                                        {project.githubLink && (
                                            <Button asChild size="icon">
                                                <a
                                                    href={project.githubLink}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="flex items-center gap-2"
                                                >
                                                    <Github className="h-4 w-4" />
                                                    <span className="sr-only">
                                                        GitHub
                                                    </span>
                                                </a>
                                            </Button>
                                        )}
                                    </div>
                                </CardTitle>
                                <CardDescription>
                                    <p className="font-mono text-sm leading-relaxed text-text">
                                        {project.about}
                                    </p>
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-mono text-sm font-bold uppercase mb-2 text-main">
                                    Stack
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack?.map((tech, index) => (
                                        <span key={index} className="tag-neo">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                            {/* display link to project only if a ui exist */}
                            {project.link && (
                                <CardFooter className="p-4 pt-0 flex gap-3">
                                    <Button asChild variant="secondary">
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="btn-neo flex items-center gap-2"
                                        >
                                            <span>View Project</span>
                                            <MoveUpRight className="h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            )}
                        </Card>
                        {/* <Image
              src={project.image}
              alt={project.name}
              className="object-center rounded-xl h-full h-sm:[350px] border-4 mx-auto w-full md:h-[450px] xl:h-[500px]"
            /> */}
                        <Separator className="my-8 w-5 mx-auto" />
                    </section>
                ))}
            </section>
        </section>
    );
}
