"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import { profile, projects, type Project } from "@/lib/data";
import ProjectMedia, { tintInk, tintVar } from "./ProjectMedia";

const filters = ["All", "AI & Automation", "Web Apps", "Tools", "UI & 3D"] as const;

export default function ProjectsGrid() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = f === "All" ? projects : projects.filter((p) => p.filter === f);

  return (
    <section className="pb-24 sm:pb-32">
      <div className="wrap">
        <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-2 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0">
          {filters.map((x) => (
            <button
              key={x}
              onClick={() => setF(x)}
              className={`relative isolate shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${
                f === x ? "border-volt text-ink" : "border-line-2 text-muted hover:text-text"
              }`}
            >
              {f === x && <motion.span layoutId="filter" className="absolute inset-0 -z-10 rounded-full bg-volt" />}
              {x}
              <span className="ml-2 font-mono text-[10px] opacity-60">
                {x === "All" ? projects.length : projects.filter((p) => p.filter === x).length}
              </span>
            </button>
          ))}
        </div>

        <motion.div layout className="mt-10 grid gap-x-6 gap-y-14 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <Card key={p.slug} p={p} i={i} />
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-20 flex flex-col items-start justify-between gap-6 rounded-[24px] border border-line bg-surface/60 p-8 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-2xl font-semibold">There&apos;s more on GitHub.</p>
            <p className="mt-1 text-muted">Experiments, utilities and components across 26 public repositories.</p>
          </div>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-text px-5 py-3 text-sm font-medium text-bg transition-colors hover:bg-volt"
          >
            <Github size={16} /> Visit GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.08 }}
    >
      <Link href={`/projects/${p.slug}`} className="group block">
        <div
          className="flow-border rounded-[26px] p-2.5 shadow-[0_24px_50px_-28px_rgba(13,15,10,0.45)] transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] group-hover:-translate-y-1.5"
          style={{ ["--tint" as string]: tintVar[p.tint], animationDelay: `${i * -1.3}s` }}
        >
          <ProjectMedia project={p} className="aspect-[16/10] rounded-[18px]" sizes="(min-width: 768px) 50vw, 100vw" />
        </div>
        <div className="mt-5 flex items-start justify-between gap-4 px-1">
          <div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.16em]" style={{ color: tintInk[p.tint] }}>
              {p.category} · {p.year}
            </p>
            <h2 className="mt-1.5 font-display text-[28px] font-semibold leading-tight">{p.title}</h2>
            <p className="mt-1.5 text-[15px] text-muted">{p.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.stack.slice(0, 4).map((s) => (
                <span key={s} className="rounded-full border border-line-2 px-2.5 py-0.5 text-[11.5px] text-text/75">
                  {s}
                </span>
              ))}
            </div>
          </div>
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-line-2 transition-all duration-500 group-hover:rotate-45 group-hover:border-transparent group-hover:bg-volt group-hover:text-ink">
            <ArrowUpRight size={18} />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
