import Image from "next/image";
import type { Project } from "@/lib/data";

export const tintVar: Record<Project["tint"], string> = {
  volt: "var(--volt)",
  iris: "var(--iris)",
  coral: "var(--coral)",
  aqua: "var(--aqua)",
};

/** Darker shades of each tint for text on white. */
export const tintInk: Record<Project["tint"], string> = {
  volt: "#4a6900",
  iris: "#5b45d6",
  coral: "#c9481f",
  aqua: "#0b7f6f",
};

/** A project's cover: a real screenshot (shown whole, never cropped) when we have one, otherwise a designed mini-UI. */
export default function ProjectMedia({
  project,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority,
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const c = tintVar[project.tint];
  return (
    <div
      className={`relative overflow-hidden ${className}`}
      style={{ ["--tint" as string]: c, background: "color-mix(in oklab, var(--tint) 16%, #fff)" }}
    >
      {project.cover ? (
        <Image
          src={project.cover}
          alt={`${project.title} screenshot`}
          fill
          sizes={sizes}
          priority={priority}
          className="object-contain transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
        />
      ) : (
        <Mock kind={project.mock ?? "terminal"} title={project.title} />
      )}
    </div>
  );
}

function Mock({ kind, title }: { kind: NonNullable<Project["mock"]>; title: string }) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center p-6 transition-transform duration-[1.2s] ease-[cubic-bezier(.22,1,.36,1)] group-hover:scale-[1.04]"
      style={{ background: "radial-gradient(120% 90% at 50% 0%, color-mix(in oklab, var(--tint) 22%, transparent), transparent 60%), var(--surface)" }}
    >
      <div className="w-full max-w-[420px] rounded-xl border border-white/10 bg-[#0d0f0b]/90 shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/5 px-3 py-2.5">
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="h-2 w-2 rounded-full bg-white/15" />
          <span className="ml-3 font-mono text-[10px] text-white/40">{title.toLowerCase().replace(/\s+/g, "-")}</span>
        </div>
        <div className="p-4">{bodies[kind]}</div>
      </div>
    </div>
  );
}

const bar = (w: string, o = 0.12) => <span className="block h-2 rounded-full" style={{ width: w, background: `rgba(255,255,255,${o})` }} />;

const bodies: Record<NonNullable<Project["mock"]>, React.ReactNode> = {
  terminal: (
    <div className="space-y-2 font-mono text-[11px] text-white/60">
      <p>
        <span style={{ color: "var(--tint)" }}>➜</span> npm run build
      </p>
      <p>✓ Compiled successfully</p>
    </div>
  ),
  pipeline: (
    <div className="space-y-3">
      {["Reddit", "YouTube", "GitHub", "Hacker News"].map((s, i) => (
        <div key={s} className="flex items-center gap-3">
          <span className="w-24 rounded-md border border-white/10 px-2 py-1.5 font-mono text-[10px] text-white/70">{s}</span>
          <span className="h-px flex-1" style={{ background: `linear-gradient(90deg, rgba(255,255,255,.15), var(--tint))`, opacity: 1 - i * 0.12 }} />
          {i === 1 && <span className="rounded-md px-2 py-1.5 font-mono text-[10px] text-black" style={{ background: "var(--tint)" }}>Claude</span>}
          {i !== 1 && <span className="h-2 w-2 rounded-full" style={{ background: "var(--tint)" }} />}
        </div>
      ))}
      <div className="mt-2 flex items-center justify-between rounded-lg border border-white/10 px-3 py-2">
        <span className="font-mono text-[10px] text-white/60">→ WhatsApp · Issue #42 delivered</span>
        <span className="h-2 w-2 rounded-full bg-[#25d366]" />
      </div>
    </div>
  ),
  orders: (
    <div className="grid grid-cols-3 gap-2">
      {["New", "Cooking", "On the way"].map((s, i) => (
        <div key={s} className="space-y-2 rounded-lg border border-white/10 p-2">
          <p className="font-mono text-[9px] uppercase tracking-wider text-white/50">{s}</p>
          {Array.from({ length: 3 - i }).map((_, k) => (
            <div key={k} className="space-y-1.5 rounded-md bg-white/5 p-2">
              {bar("80%", 0.2)}
              {bar("50%")}
            </div>
          ))}
          {i === 2 && <div className="h-10 rounded-md" style={{ background: "color-mix(in oklab, var(--tint) 35%, transparent)" }} />}
        </div>
      ))}
    </div>
  ),
  voice: (
    <div className="space-y-4">
      <div className="space-y-1.5 rounded-lg border border-white/10 p-3">
        {bar("90%", 0.18)}
        {bar("70%")}
      </div>
      <div className="flex h-12 items-center justify-center gap-[3px]">
        {Array.from({ length: 38 }).map((_, i) => (
          <span
            key={i}
            className="w-[3px] rounded-full"
            style={{ height: `${18 + Math.abs(Math.sin(i * 0.7) * 30) + (i % 5) * 3}px`, background: "var(--tint)", opacity: 0.35 + (i % 4) * 0.15 }}
          />
        ))}
      </div>
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] text-white/50">en-US · Aria · 1.0×</span>
        <span className="rounded-full px-3 py-1 text-[10px] font-medium text-black" style={{ background: "var(--tint)" }}>Generate</span>
      </div>
    </div>
  ),
  chat: (
    <div className="space-y-2.5">
      <div className="ml-auto w-3/5 space-y-1.5 rounded-xl rounded-br-sm p-2.5" style={{ background: "color-mix(in oklab, var(--tint) 30%, transparent)" }}>
        {bar("90%", 0.35)}
      </div>
      <div className="w-4/5 space-y-1.5 rounded-xl rounded-bl-sm bg-white/5 p-2.5">
        {bar("95%", 0.2)}
        {bar("70%")}
        {bar("40%")}
      </div>
      <div className="ml-auto w-2/5 rounded-xl rounded-br-sm p-2.5" style={{ background: "color-mix(in oklab, var(--tint) 30%, transparent)" }}>
        {bar("80%", 0.35)}
      </div>
      <div className="flex gap-1 pl-1">
        {[0, 1, 2].map((i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-white/40" />
        ))}
      </div>
    </div>
  ),
  ring: (
    <div className="relative mx-auto h-40 w-40">
      {Array.from({ length: 64 }).map((_, i) => {
        const a = (i / 64) * Math.PI * 2;
        const r = 62 + (i % 3) * 6;
        return (
          <span
            key={i}
            className="absolute h-1.5 w-1.5 rounded-full"
            style={{ left: 80 + Math.cos(a) * r - 3, top: 80 + Math.sin(a) * r * 0.55 - 3, background: "var(--tint)", opacity: 0.3 + ((i * 7) % 10) / 14 }}
          />
        );
      })}
      <span className="absolute inset-0 m-auto h-16 w-16 rounded-full blur-2xl" style={{ background: "var(--tint)", opacity: 0.35 }} />
    </div>
  ),
  nav: (
    <div className="space-y-6 py-4">
      <div className="mx-auto flex w-fit items-center gap-1 rounded-full border border-white/10 bg-white/5 p-1">
        {["Home", "Work", "About", "Contact"].map((l, i) => (
          <span
            key={l}
            className={`rounded-full px-3 py-1.5 text-[10px] ${i === 1 ? "text-black" : "text-white/60"}`}
            style={i === 1 ? { background: "var(--tint)" } : undefined}
          >
            {l}
          </span>
        ))}
      </div>
      <div className="mx-auto flex w-fit items-center gap-2 rounded-full border border-white/10 p-1">
        <span className="h-5 w-5 rounded-full bg-white/80" />
        <span className="h-5 w-5 rounded-full" style={{ background: "var(--tint)" }} />
      </div>
    </div>
  ),
};
