import Hero from "./Hero";
import ExpertVets from "./ExpertVets";
import ExtraSection from "./ExtraSection";
import WinterTips from "./WinterTips";
import Crops from "./Crops"
import HomeCrops from "../../components/HomeCrops";

export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Hero />
      <Crops />
      <HomeCrops />

      <WinterTips />
      <ExpertVets />
      <ExtraSection />
    </div>
  );
}
