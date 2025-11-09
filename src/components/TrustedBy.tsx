import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";
import aadarsh from "../assets/partners/aadarsh.png";
import bhagathSing from "../assets/partners/bhagath-sing.png";
import cald from "../assets/partners/cald.png";
import djJagath from "../assets/partners/dj-jagath.png";
import indus from "../assets/partners/indus.png";
import jaiSriRam from "../assets/partners/jai-sri-ram.png";
import medha from "../assets/partners/medha.png";
import shreeDental from "../assets/partners/shree-dental-logo-01.png";
import storyByClick from "../assets/partners/story-by-click.png";
import swaagIceCreams from "../assets/partners/swaad-ice-creams.png";
import tradingKannada from "../assets/partners/trading-kannada-logo.png";
import Marquee from "react-fast-marquee";

const brands = [
  { name: "Aadarsh", logo: aadarsh },
  { name: "Bhagath Sing", logo: bhagathSing },
  { name: "CALD", logo: cald },
  { name: "DJ Jagath", logo: djJagath },
  { name: "Indus", logo: indus },
  { name: "Jai Sri Ram", logo: jaiSriRam },
  { name: "Medha", logo: medha },
  { name: "Shree Dental", logo: shreeDental },
  { name: "Story By Click", logo: storyByClick },
  { name: "Swaag Ice Creams", logo: swaagIceCreams },
  { name: "Trading Kannada", logo: tradingKannada },
];

const shuffleArray = (array: any[]) => [...array].sort(() => Math.random() - 0.5);

const TrustedBy: React.FC = () => {
  const shuffled1 = shuffleArray(brands);
  const shuffled2 = shuffleArray(brands);

  return (
    <section className="bg-white dark:bg-gray-900 px-4 pt-4 sm:px-8 lg:px-16 overflow-hidden font-sans">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center mb-10">
        <p className="text-sm uppercase tracking-widest text-indigo-500 font-semibold mb-2">
          Trusted by 20+ happy customers
        </p>
        <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 dark:text-white tracking-tight">
          Our Partners & Clients
        </h2>


      {/* ✅ Mobile: Two infinite marquee lines, opposite directions */}
      <div className="space sm:hidden">
        <Marquee gradient={false} speed={15} pauseOnHover>
          {shuffled1.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-[120px] flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>

        <Marquee gradient={false} speed={15} direction="right" pauseOnHover>
          {shuffled2.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 w-[120px] flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-12 w-auto object-contain"
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* ✅ Desktop: Smooth infinite marquee with transparent background */}
      <div className="hidden sm:block relative w-full overflow-hidden mt-8">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

        <div className="flex w-max animate-marquee-slow">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-24 w-[180px] flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>

        <div className="flex w-max animate-marquee-slow2 absolute top-0 left-full">
          {brands.map((brand, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center h-24 w-[180px] flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default TrustedBy;
