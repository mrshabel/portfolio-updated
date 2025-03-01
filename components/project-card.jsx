import { MoveUpRight, Github } from "lucide-react";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";

export default function ProjectCard({ project }) {
    return (
        <Card className="w-full bg-card text-card-foreground border-border transform hover:-translate-x-1 hover:-translate-y-1 transition-transform duration-200">
            <CardHeader className="p-4">
                <CardTitle className="flex justify-between items-center">
                    <div className="">
                        <h1 className="font-mono text-2xl font-extrabold uppercase tracking-tight">
                            {project.name}
                        </h1>
                        <p className="font-mono text-xs opacity-80">
                            {project.duration}
                        </p>
                    </div>
                    <div className="">
                        {project.githubLink && (
                            <Button asChild size="icon">
                                <a
                                    href={project.githubLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2"
                                >
                                    <Github className="h-4 w-4" />
                                    <span className="sr-only">GitHub</span>
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
                    <Button asChild>
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
    );
}
