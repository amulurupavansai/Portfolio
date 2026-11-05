import Link from "next/link";
import { footer } from "@/data/content";

export default function SubFooter() {
  return (
    <footer className="pad flex flex-wrap items-center justify-between gap-2 border-t border-line py-6 print:hidden">
      <p className="label">{footer}</p>
      <Link href="/" className="label inline-flex min-h-[44px] items-center">Home ↑</Link>
    </footer>
  );
}
