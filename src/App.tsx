import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import IndustriesMarquee from "./components/IndustriesMarquee";
import OurWorks from "./components/OurWorks";
import ProcessSection from "./components/ProcessSection";
import Superpowers from "./components/Superpowers";
import TrustedBy from "./components/TrustedBy";
import VisionMission from "./components/VisionMission";
import VocalForLocalSection from "./components/VocalForLocalSection";
import Contact from "./components/Contact";
import StickyWhatsApp from "./components/StickyWhatsApp";

export default function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <Home />
      <TrustedBy/>
      <OurWorks/>
      <VisionMission/>
      <VocalForLocalSection/>
      <Superpowers/>
      <IndustriesMarquee/>
      <ProcessSection/>
      <Contact/>
      <Footer/>
      <StickyWhatsApp />
    </div>
  );
}
