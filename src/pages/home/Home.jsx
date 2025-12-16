import Hero from "./Hero";
import ServicesSection from "./Crops";
import ExpertVets from "./ExpertVets";
import ExtraSection from "./ExtraSection";
import WinterTips from "./WinterTips";

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Hero />
      <ServicesSection />
      <WinterTips />
      <ExpertVets />
      <ExtraSection />
    </div>
  );
}
