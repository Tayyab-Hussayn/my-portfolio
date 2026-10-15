import { Label, Reveal, Words } from "./ui";

export default function PageHero({
  label,
  title,
  sub,
  big,
}: {
  label: string;
  title: string;
  sub?: string;
  big?: string;
}) {
  return (
    <section className="relative overflow-hidden pb-16 pt-36 sm:pb-24 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[620px] w-[min(1200px,160vw)] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(212,255,63,0.5),rgba(212,255,63,0.12)_60%,transparent)]"
      />
      {big && (
        <p
          aria-hidden
          className="pointer-events-none absolute inset-x-0 top-20 select-none text-center font-display text-[26vw] font-semibold leading-none tracking-[-0.06em] text-ink/[0.04]"
        >
          {big}
        </p>
      )}
      <div className="wrap relative">
        <Label>{label}</Label>
        <Words
          as="h1"
          text={title}
          className="mt-6 max-w-5xl font-display text-[clamp(2.8rem,7.4vw,6.8rem)] font-semibold leading-[0.95]"
        />
        {sub && (
          <Reveal delay={0.25}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted">{sub}</p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
