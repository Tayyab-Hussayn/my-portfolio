import Hero from "@/components/sections/Hero";
import StackStrip from "@/components/sections/StackStrip";
import Intro from "@/components/sections/Intro";
import FeaturedWork from "@/components/sections/FeaturedWork";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Milestones from "@/components/sections/Milestones";
import LatestProjects from "@/components/sections/LatestProjects";
import Principles from "@/components/sections/Principles";
import Faq from "@/components/sections/Faq";
import Cta from "@/components/sections/Cta";

export default function Home() {
  return (
    <>
      <Hero />
      <StackStrip />
      <Intro />
      <FeaturedWork />
      <Services />
      <Process />
      <Milestones />
      <LatestProjects />
      <Principles />
      <Faq />
      <Cta />
    </>
  );
}
