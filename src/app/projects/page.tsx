import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ProjectsGrid from "@/components/ProjectsGrid";
import Cta from "@/components/sections/Cta";

export const metadata: Metadata = {
  title: "Projects",
  description: "Selected products, tools, automations and experiments by Tayyab Hussain.",
};

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        label="Projects"
        big="work"
        title={"Ideas in motion.\nProducts with purpose."}
        sub="Database tooling, SaaS products, AI automations and UI experiments, each designed, engineered and shipped by me."
      />
      <ProjectsGrid />
      <Cta />
    </>
  );
}
