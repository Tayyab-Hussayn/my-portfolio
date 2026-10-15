"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import ProjectMedia, { tintInk, tintVar } from "../ProjectMedia";

/** Big editorial list; on desktop the hovered row shows its own preview on the right. */
export default function ProjectList({ items }: { items: Project[] }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <ul onPointerLeave={() => setActive(null)}>
      {items.map((p, i) => (
        <li key={p.slug} className="relative" onPointerEnter={() => setActive(i)}>
          <Link
            href={`/projects/${p.slug}`}
            className="group grid grid-cols-[1fr_auto] items-center gap-6 border-b border-line py-7 first:border-t sm:py-9"
          >
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]" style={{ color: tintInk[p.tint] }}>
                {p.category} · {p.year}
              </p>
              <h3 className="mt-2 font-display text-[clamp(1.9rem,4.6vw,3.8rem)] font-semibold leading-none transition-all duration-500 group-hover:translate-x-3 lg:text-muted lg:group-hover:text-text">
                {p.title}
              </h3>
              <p className="mt-2 text-sm text-muted">{p.tagline}</p>
            </div>
            <span className="grid h-12 w-12 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-volt group-hover:text-ink">
              <ArrowUpRight size={18} />
            </span>
          </Link>

          <AnimatePresence>
            {active === i && (
              <motion.div
                aria-hidden
                initial={{ opacity: 0, x: 24, rotate: 0, scale: 0.92 }}
                animate={{ opacity: 1, x: 0, rotate: -2, scale: 1 }}
                exit={{ opacity: 0, x: 16, scale: 0.95, transition: { duration: 0.2 } }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute right-20 top-1/2 z-10 -mt-[85px] hidden rounded-[18px] p-1.5 shadow-[0_24px_60px_-20px_rgba(13,15,10,0.35)] lg:block xl:right-24 xl:-mt-[95px]"
                style={{ background: tintVar[p.tint] }}
              >
                <ProjectMedia
                  project={p}
                  className="h-[158px] w-[230px] rounded-[13px] xl:h-[178px] xl:w-[270px]"
                  sizes="270px"
                />
              </motion.div>
            )}
          </AnimatePresence>
        </li>
      ))}
    </ul>
  );
}
