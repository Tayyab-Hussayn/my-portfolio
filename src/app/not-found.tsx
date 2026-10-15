import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="grid min-h-[80svh] place-items-center pt-24 text-center">
      <div className="wrap">
        <p className="font-display text-[clamp(6rem,22vw,16rem)] font-semibold leading-none tracking-[-0.06em] text-volt-ink">404</p>
        <p className="mt-4 text-xl text-muted">This page wandered off. Let&apos;s get you back.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back home</Button>
        </div>
      </div>
    </section>
  );
}
