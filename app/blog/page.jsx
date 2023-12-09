import { MoveLeft } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <section className="w-full">
      <Link href="/" className="flex items-center gap-2 text-[14px] my-8">
        <span>
          <MoveLeft className="h-3 w-3" />
        </span>
        <span className="font-semibold">Go back</span>
      </Link>
      <h1 className="text-4xl my-8">
        Blog page is currently under construction
      </h1>
    </section>
  );
}
