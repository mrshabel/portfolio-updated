"use client";

import { useRouter } from "next/navigation";
import { MoveLeft } from "lucide-react";

export default function GoBack() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      className="flex items-center gap-2 text-[13px] my-2"
    >
      <span>
        <MoveLeft className="h-3 w-3" />
      </span>
      <span className="font-semibold">Go back</span>
    </button>
  );
}
