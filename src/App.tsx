import Header from "./components/Header";
import Home from "./components/Home";
import IndustriesMarquee from "./components/IndustriesMarquee";
import OurWorks from "./components/OurWorks";
import TrustedBy from "./components/TrustedBy";
import VisionMission from "./components/VisionMission";

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <Home />
      <TrustedBy/>
      <OurWorks/>
      <VisionMission/>
      <IndustriesMarquee/>
    </div>
  );
}
