import type { Metadata } from "next";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import { Label, Reveal, Words } from "@/components/ui";
import { profile } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a project with Tayyab Hussayn. Book a discovery call or send a message.",
};

const steps = [
  "We talk about your idea, goals and timeline",
  "I send a clear plan, an estimate and the next steps",
  "We kick off, with progress you can see every week",
];

export default function ContactPage() {
  const links = [
    { icon: Mail, label: profile.email, href: `mailto:${profile.email}` },
    { icon: Linkedin, label: "LinkedIn", href: profile.linkedin },
    { icon: Github, label: "GitHub", href: profile.github },
    { icon: Twitter, label: "X / Twitter", href: profile.twitter },
  ];
  return (
    <section className="relative overflow-hidden pb-24 pt-36 sm:pb-32 sm:pt-44">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-[20%] h-[600px] w-[900px] rounded-full bg-[radial-gradient(closest-side,rgba(212,255,63,0.4),transparent)]"
      />
      <div className="wrap relative grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <Label>Contact</Label>
          <Words
            as="h1"
            text={"Your idea.\nOur first\nconversation."}
            className="mt-6 font-display text-[clamp(2.8rem,6.4vw,5.6rem)] font-semibold leading-[0.95]"
          />
          <Reveal delay={0.2}>
            <p className="mt-8 max-w-md text-lg leading-relaxed text-muted">
              A focused 30-minute discovery call to understand what you want to build, your audience, your goals and
              the best way forward.
            </p>
            <ol className="mt-10 space-y-4">
              {steps.map((s, i) => (
                <li key={s} className="flex items-center gap-4">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-volt/40 font-mono text-xs text-volt-ink">
                    0{i + 1}
                  </span>
                  <span className="text-text/85">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-12 grid gap-2 sm:grid-cols-2">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl border border-line bg-surface/60 px-4 py-3 text-sm transition-colors hover:border-volt/50 hover:text-volt-ink"
                >
                  <Icon size={16} className="shrink-0" />
                  <span className="truncate">{label}</span>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
        <Reveal delay={0.1} className="lg:col-span-7">
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
