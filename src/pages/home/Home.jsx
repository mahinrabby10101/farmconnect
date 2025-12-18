import Hero from "./Hero";
import WinterTips from "./WinterTips";
import Crops from "./Crops"
import HomeCrops from "../../components/HomeCrops";
import SeedsAndFertilizers from "../../components/SeedsAndFertilizers";
import AgroNews from "../../components/AgroNews";
import TeamSection from "../../components/TeamSection";



export default function Home() {
  return (
    <div className="px-4 md:px-10 lg:px-20">
      <Hero />
      <Crops />
      <HomeCrops />
      <SeedsAndFertilizers />
      <AgroNews />

      <WinterTips />
      <TeamSection />

    </div>
  );
}
