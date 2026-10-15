import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Check, Github, Globe } from "lucide-react";
import { projects } from "@/lib/data";
import ProjectMedia, { tintInk, tintVar } from "@/components/ProjectMedia";
import { Label, Reveal, Words } from "@/components/ui";
import Cta from "@/components/sections/Cta";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  return p ? { title: p.title, description: p.tagline } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const idx = projects.findIndex((x) => x.slug === slug);
  if (idx < 0) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];
  const tint = tintVar[p.tint];

  return (
    <article style={{ ["--tint" as string]: tint }}>
      <section className="relative overflow-hidden pb-12 pt-32 sm:pt-40">
        <div
          aria-hidden
          className="pointer-events-none absolute -top-48 left-1/2 h-[600px] w-[min(1100px,150vw)] -translate-x-1/2 rounded-[50%] opacity-30"
          style={{ background: `radial-gradient(closest-side, ${tint}, transparent)` }}
        />
        <div className="wrap relative">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-volt-ink">
            <ArrowLeft size={15} /> All projects
          </Link>
          <p className="mt-10 font-mono text-[11px] uppercase tracking-[0.18em]" style={{ color: tintInk[p.tint] }}>
            {p.category} · {p.year}
          </p>
          <Words as="h1" text={p.title} className="mt-4 font-display text-[clamp(3rem,9vw,8rem)] font-semibold leading-[0.9]" />
          <Reveal delay={0.2}>
            <p className="mt-6 max-w-2xl font-display text-2xl leading-snug text-text/85 sm:text-3xl">{p.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="group inline-flex items-center gap-2 rounded-full bg-volt px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-volt-2">
                  <Globe size={16} /> Visit live site <ArrowUpRight size={15} className="transition-transform group-hover:rotate-45" />
                </a>
              )}
              {p.repo && (
                <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line-2 px-5 py-3 text-sm transition-colors hover:border-volt hover:text-volt-ink">
                  <Github size={16} /> View on GitHub
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="wrap">
        <Reveal>
          <div className="rounded-[28px] p-2.5 sm:p-3" style={{ background: tint }}>
            {p.video ? (
              <video
                src={p.video}
                poster={p.cover}
                autoPlay
                muted
                loop
                playsInline
                controls
                className="aspect-video w-full rounded-[20px] bg-black object-cover"
              />
            ) : (
              <ProjectMedia project={p} priority className="aspect-[16/9] rounded-[20px]" sizes="100vw" />
            )}
          </div>
        </Reveal>
      </section>

      <section className="py-20 sm:py-28">
        <div className="wrap grid gap-14 lg:grid-cols-12">
          <aside className="space-y-8 lg:col-span-4">
            <Meta k="Role" v="Design & full-stack development" />
            <Meta k="Year" v={p.year} />
            <Meta k="Category" v={p.category} />
            <div>
              <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-dim">Stack</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-line-2 px-3 py-1 text-[12.5px] text-text/85">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </aside>
          <div className="lg:col-span-8">
            <Label>Overview</Label>
            <Reveal>
              <p className="mt-6 text-xl leading-relaxed text-text/90 sm:text-2xl sm:leading-relaxed">{p.summary}</p>
            </Reveal>
            <h2 className="mt-16 font-display text-3xl font-semibold">Key features</h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {p.features.map((f, i) => (
                <Reveal key={f} delay={i * 0.05}>
                  <li className="flex h-full gap-3 rounded-2xl border border-line bg-surface/60 p-4 text-[15px] leading-relaxed text-text/85">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full" style={{ background: tint, color: "#0a0b08" }}>
                      <Check size={13} strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {p.gallery && p.gallery.length > 1 && (
        <section className="pb-20 sm:pb-28">
          <div className="wrap">
            <Label>Gallery</Label>
            <div className="mt-8 grid gap-5 md:grid-cols-2">
              {p.gallery.map((g, i) => (
                <Reveal key={g} delay={(i % 2) * 0.1} className={i === 0 && p.gallery!.length % 2 === 1 ? "md:col-span-2" : ""}>
                  <div className="relative aspect-[16/9] overflow-hidden rounded-[22px] border border-line bg-surface">
                    <Image src={g} alt={`${p.title} screen ${i + 1}`} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover object-top" />
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="border-t border-line">
        <Link href={`/projects/${next.slug}`} className="group wrap flex items-center justify-between gap-6 py-14 sm:py-20">
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-dim">Next project</p>
            <p className="mt-3 font-display text-[clamp(2.4rem,6vw,5.5rem)] font-semibold leading-none transition-colors group-hover:text-volt-ink">
              {next.title}
            </p>
          </div>
          <span className="grid h-16 w-16 shrink-0 place-items-center rounded-full bg-volt text-ink transition-transform duration-500 group-hover:rotate-45 sm:h-24 sm:w-24">
            <ArrowUpRight className="h-7 w-7 sm:h-9 sm:w-9" />
          </span>
        </Link>
      </section>
      <Cta />
    </article>
  );
}

function Meta({ k, v }: { k: string; v: string }) {
  return (
    <div className="border-b border-line pb-5">
      <p className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-dim">{k}</p>
      <p className="mt-2 text-lg">{v}</p>
    </div>
  );
}
