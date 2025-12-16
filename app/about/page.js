// app/about/page.js
import AboutHero from "@/components/about/AboutHero";
import OurStory from "@/components/about/OurStory";
import OurTeam from "@/components/about/OurTeam";
import StatsSection from "@/components/about/StatsSection";
import AboutCTA from "@/components/about/AboutCTA";

export default function AboutPage() {
  return (
    <div className="bg-[#120805] text-amber-50">
      <AboutHero />
      <OurStory />
      <OurTeam />
      <StatsSection />
      <AboutCTA />
    </div>
  );
}
