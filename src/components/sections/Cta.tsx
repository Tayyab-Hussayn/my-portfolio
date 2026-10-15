import { Button, Reveal, Words } from "../ui";
import { profile } from "@/lib/data";

export default function Cta() {
  return (
    <section className="relative overflow-hidden py-28 sm:py-40">
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[560px] w-[min(1100px,140vw)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(closest-side,rgba(212,255,63,0.45),transparent)]"
      />
      <div className="wrap relative text-center">
        <Reveal>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-volt-ink">Have an idea? Let&apos;s talk</p>
        </Reveal>
        <Words
          text={"Let's make your\nnext move matter."}
          className="mx-auto mt-6 font-display text-[clamp(2.8rem,7.4vw,7rem)] font-semibold leading-[0.95]"
        />
        <Reveal delay={0.2}>
          <p className="mx-auto mt-6 max-w-md text-muted">
            Tell me what you&apos;re building. I&apos;ll come back with a clear plan, a timeline and an honest quote.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Button href="/contact">Book a discovery call</Button>
            <Button href={`mailto:${profile.email}`} variant="ghost">
              {profile.email}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
