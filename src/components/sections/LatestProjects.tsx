import { projects } from "@/lib/data";
import { Button, Label, Reveal, Words } from "../ui";
import ProjectList from "./ProjectList";

export default function LatestProjects() {
  const items = projects.filter((p) => !["querylens", "qalam", "axon-lead-suite"].includes(p.slug)).slice(0, 5);
  return (
    <section className="py-24 sm:py-32">
      <div className="wrap">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <Label>More work</Label>
            <Words
              text={"Latest projects &\ntechnical explorations"}
              className="mt-6 font-display text-[clamp(2.4rem,5.6vw,5rem)] font-semibold leading-[0.98]"
            />
          </div>
          <Reveal className="lg:col-span-5" delay={0.15}>
            <p className="text-xl leading-snug text-text/90 sm:text-2xl">
              Interfaces, application architecture, automation and product experiments.
            </p>
          </Reveal>
        </div>
        <div className="mt-14">
          <ProjectList items={items} />
        </div>
        <div className="mt-12 flex justify-center">
          <Button href="/projects" variant="ghost">
            Explore all projects
          </Button>
        </div>
      </div>
    </section>
  );
}
