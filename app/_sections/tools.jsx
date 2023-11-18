import { Progress } from "@/components/ui/progress";
import { tools } from "@/db/tools";
import Marquee from "react-fast-marquee";

export default function DeveloperTools() {
  return (
    <section className="w-full">
      <h1 className="font-semibold mb-6 text-xl">Skills and Developer Tools</h1>
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-content-center gap-12">
        {tools.map((tool, index) => (
          <div key={index} className="text-[12px] font-semibold uppercase">
            <div className="flex justify-between w-full items-center mb-1">
              <p>{tool.name}</p>
              <p>{tool.value}%</p>
            </div>
            <Progress className="w-full" value={tool.value} />
          </div>
        ))}
      </section>
    </section>
  );
}
