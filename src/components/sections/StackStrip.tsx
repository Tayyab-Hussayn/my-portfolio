import { stack } from "@/lib/data";
import { Marquee } from "../ui";

export default function StackStrip() {
  return (
    <section aria-label="Tech stack" className="border-y border-line bg-bg-2 py-6">
      <Marquee
        speed={45}
        items={stack.map((s) => (
          <span key={s} className="flex items-center gap-8 pr-8 font-display text-lg font-medium text-muted sm:text-xl">
            {s}
            <span className="text-sm text-volt-ink">✦</span>
          </span>
        ))}
      />
    </section>
  );
}
