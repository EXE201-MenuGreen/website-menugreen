import HeroSection from "@/components/home/HeroSection";
import AppDownloadSection from "@/components/home/AppDownloadSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import InteractiveMetric from "@/components/home/InteractiveMetric";
import UserStoriesSection from "@/components/home/UserStoriesSection";
import MenuExplorer from "@/components/home/MenuExplorer";
import PricingSection from "@/components/home/PricingSection";
import SectionReveal from "@/components/home/SectionReveal";

export default function Home() {
  return (
    <div className="landing-page flex flex-col w-full">
      {/* Step 1: Hero Intro (The Seed) */}
      <SectionReveal>
        <HeroSection />
      </SectionReveal>

      {/* Step 1.5: Mobile App Availability */}
      <SectionReveal>
        <AppDownloadSection />
      </SectionReveal>

      {/* Step 2: Sourcing & Origin Story (The Growth) */}
      <SectionReveal>
        <PhilosophySection />
      </SectionReveal>

      {/* Step 3: Interactive Wellness Measurement (The Balance) */}
      <SectionReveal>
        <InteractiveMetric />
      </SectionReveal>

      {/* Step 3.5: User Stories & Scenarios */}
      <SectionReveal>
        <UserStoriesSection />
      </SectionReveal>

      {/* Step 4: Weekly Menu Planner & Action Form (The Harvest) */}
      <SectionReveal>
        <MenuExplorer />
      </SectionReveal>

      {/* Step 5: Pricing Plans (The Partnership) */}
      <SectionReveal>
        <PricingSection />
      </SectionReveal>
    </div>
  );
}
