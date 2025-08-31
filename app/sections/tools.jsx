import { skills } from "@/db/skills";

export default function DeveloperTools() {
    return (
        <section className="w-full">
            <header className="mb-8">
                <h1 className="font-mono text-3xl font-extrabold tracking-tight text-foreground">
                    Technical Expertise
                </h1>
                <p className="font-mono text-sm text-muted-foreground mt-2">
                    Core competencies in modern development.
                </p>
            </header>

            <div className="space-y-6 bg-card border-border p-6 shadow-[6px_6px_0_border]">
                {skills.map(({ category, tools }, index) => (
                    <div key={index} className="flex flex-col gap-3">
                        <h2 className="font-mono text-lg font-bold uppercase text-card-foreground">
                            {category}
                        </h2>

                        <div className="flex flex-wrap gap-2">
                            {tools.map((tool, idx) => (
                                <span
                                    key={idx}
                                    className="tag-neo text-primary border-border shadow-[2px_2px_0_border] text-sm font-semibold"
                                >
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
