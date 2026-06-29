import HeroSection from "@/components/home/HeroSection";
import PhilosophySection from "@/components/home/PhilosophySection";
import InteractiveMetric from "@/components/home/InteractiveMetric";
import MenuExplorer from "@/components/home/MenuExplorer";
import PricingSection from "@/components/home/PricingSection";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Step 1: Hero Intro (The Seed) */}
      <HeroSection />

      {/* Step 2: Sourcing & Origin Story (The Growth) */}
      <PhilosophySection />

      {/* Step 3: Interactive Wellness Measurement (The Balance) */}
      <InteractiveMetric />

      {/* Step 4: Weekly Menu Planner & Action Form (The Harvest) */}
      <MenuExplorer />

      {/* Step 5: Pricing Plans (The Partnership) */}
      <PricingSection />
    </div>
  );
}
