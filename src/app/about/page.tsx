import type { Metadata } from "next";
import Image from "next/image";
import { Label, Reveal, Words } from "@/components/ui";
import Milestones from "@/components/sections/Milestones";
import Principles from "@/components/sections/Principles";
import Cta from "@/components/sections/Cta";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "About",
  description: "Tayyab Hussayn is an AI & Automation Developer based in Lahore, Pakistan.",
};

const toolkit = [
  { group: "Frontend", items: ["Next.js", "React", "Vue 3", "TypeScript", "Tailwind CSS", "Framer Motion", "Three.js / R3F"] },
  { group: "Backend", items: ["Node.js", "Express", "Python", "Flask", "FastAPI", "REST APIs", "Rust (learning)"] },
  { group: "AI & Automation", items: ["n8n", "Claude API", "OpenAI", "Gemini", "OpenRouter", "Agentic pipelines", "Playwright"] },
  { group: "Data & Infra", items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Supabase", "Firebase", "Docker", "Vercel", "Linux"] },
];

const stats = [
  { n: "26+", l: "Public repositories" },
  { n: "16", l: "Projects showcased here" },
  { n: "4", l: "Database engines in one tool" },
  { n: "24h", l: "Typical reply time" },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[72px]">
        <div className="relative isolate min-h-[88svh] overflow-hidden">
          <div className="absolute inset-0 -z-20 bg-[radial-gradient(70%_80%_at_70%_70%,#d4ff3f_0%,#cdf83a_26%,#ecfcbb_55%,#ffffff_82%)]" />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(13,15,10,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(13,15,10,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-40" />
          <div className="pointer-events-none absolute bottom-0 right-[-6%] -z-10 h-[86%] w-[min(100vw,640px)] sm:right-[6%]">
            <Image src="/me/hero.png" alt={profile.name} fill priority sizes="640px" className="object-contain object-bottom" />
          </div>
          <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-bg to-transparent" />
          <div className="wrap flex min-h-[88svh] flex-col justify-between pb-16 pt-16">
            <Words as="h1" text="About" className="font-display text-[clamp(5rem,20vw,17rem)] font-semibold leading-[0.8] tracking-[-0.06em]" />
            <Reveal delay={0.3} className="max-w-md">
              <Label>Who I am</Label>
              <p className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-semibold leading-[1.02]">
                Development with purpose and personality.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-32">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Label>My story</Label>
            <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.16em] text-dim">{profile.location}</p>
          </div>
          <div className="space-y-7 text-lg leading-relaxed text-text/85 sm:text-xl sm:leading-relaxed lg:col-span-8">
            <Reveal>
              <p className="font-display text-[clamp(1.7rem,3.2vw,2.6rem)] font-medium leading-[1.15] text-text">
                I&apos;m {profile.name}, a developer who blends design finesse with engineering rigor. I don&apos;t
                just write code; I build products people actually use.
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <p>
                My work spans the whole stack. On the frontend that means Next.js, React, Vue and Tailwind with
                cinematic motion. Under the hood it&apos;s Node, Python, Postgres and Docker. Lately most of my energy
                goes into AI: agentic pipelines, LLM-powered tools and n8n automations that quietly take hours of work
                off people&apos;s plates.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>
                I&apos;ve built a visual database manager that speaks four database engines, LeadsGen, which
                finds businesses without websites and reaches out on WhatsApp, and byQalam, a LinkedIn agent that
                drafts posts and publishes them. Each one started with a real problem, not a tech stack.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Since May 2026 I&apos;ve worked full-time as a Full Stack Developer at Gobind Trades Ltd, building
                construction management software. I&apos;m also studying for a Bachelor&apos;s in Computer Science
                (BSCS) at Superior University, 2025 – present.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p>
                Outside client work you&apos;ll find me deep in Linux, experimenting with Rust, building trading bots
                and exploring ethical hacking, always looking for the next thing worth automating.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="wrap mt-20 grid grid-cols-2 gap-px overflow-hidden rounded-[24px] border border-line bg-line lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.l} delay={i * 0.06} className="bg-bg p-6 sm:p-8">
              <p className="font-display text-5xl font-semibold text-volt-ink sm:text-6xl">{s.n}</p>
              <p className="mt-2 text-sm text-muted">{s.l}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-bg-2 py-24 sm:py-32">
        <div className="wrap">
          <Label>Toolkit</Label>
          <Words text={"The tools I reach for"} className="mt-6 font-display text-[clamp(2.4rem,5vw,4.6rem)] font-semibold leading-[0.98]" />
          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {toolkit.map((t, i) => (
              <Reveal key={t.group} delay={(i % 2) * 0.08}>
                <div className="h-full rounded-[22px] border border-line bg-surface/60 p-7">
                  <div className="flex items-center justify-between">
                    <h3 className="font-display text-2xl font-semibold">{t.group}</h3>
                    <span className="font-mono text-[11px] text-dim">0{i + 1}</span>
                  </div>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {t.items.map((x) => (
                      <span key={x} className="rounded-full border border-line-2 bg-bg/50 px-3.5 py-1.5 text-[13.5px] text-text/85 transition-colors hover:border-volt hover:text-volt-ink">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Principles />
      <Milestones />
      <Cta />
    </>
  );
}
