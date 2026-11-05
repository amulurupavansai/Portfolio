import Link from "next/link";
import { site, subnav } from "@/data/content";

export default function SubHeader() {
  return (
    <header className="pad flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border-b border-line py-4 print:hidden">
      <Link href="/" className="label inline-flex min-h-[44px] items-center">{site.name}</Link>
      <nav aria-label="Primary" className="flex flex-wrap gap-x-5">
        {subnav.map((n) => (
          <Link key={n.href} href={n.href} className="label inline-flex min-h-[44px] items-center opacity-80 hover:opacity-100">{n.label}</Link>
        ))}
      </nav>
    </header>
  );
}
