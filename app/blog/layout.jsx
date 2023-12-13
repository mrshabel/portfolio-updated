import Link from "next/link";
import GoBack from "@/components/go-back";

export default function layout({ children }) {
  return (
    <main className="w-full">
      <GoBack />
      {children}
    </main>
  );
}
