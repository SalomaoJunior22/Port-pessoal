import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { HobbiesSection } from "@/components/sections/hobbies-section";
import { JourneySection } from "@/components/sections/journey-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main id="conteudo">
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <JourneySection />
        <HobbiesSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
