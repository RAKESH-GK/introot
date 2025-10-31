import React from "react";
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

const TrustedBy: React.FC = () => {
  return (
    <section className="bg-white dark:bg-gray-900 pt-12 px-4 sm:px-8 lg:px-16 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-sm uppercase tracking-widest text-blue-600 font-semibold mb-2">
          Trusted by 20+ happy customers
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
          Our Partners & Clients
        </h2>
      </div>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden ">
        {/* Side Gradients */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white dark:from-gray-900 to-transparent z-10 pointer-events-none" />

        {/* First Track */}
        <div className="flex w-max animate-marquee-slow">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-20 sm:h-28 w-[140px] sm:w-[200px] mx-4 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Track (offset for smooth loop) */}
        <div className="flex w-max animate-marquee-slow2 absolute top-0 left-full">
          {brands.map((brand, index) => (
            <div
              key={`dup-${index}`}
              className="flex items-center justify-center h-20 sm:h-28 w-[140px] sm:w-[200px] mx-4 flex-shrink-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-full w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;
