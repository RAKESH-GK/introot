import React from "react";

const images: string[] = [
  "src/assets/projects/graphic1.png",
  "src/assets/projects/graphic2.png",
  "src/assets/projects/lms.png",
  "src/assets/projects/mobile.png",
  "src/assets/projects/property.png",
];

const OurWorks: React.FC = () => {
  return (
    <section id="Works" className="relative bg-gray-900 py-16 overflow-hidden">
      {/* Section Heading */}
      <div className="max-w-6xl mx-auto px-4 text-center mb-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Our Works</h2>
        <p className="text-gray-400 mt-3 text-lg">
          Explore the digital magic we’ve crafted for brands just like yours.
        </p>
      </div>

      {/* Side Gradients */}
      <div className="hidden sm:block absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-gray-900 to-transparent z-10 pointer-events-none" />
      <div className="hidden sm:block absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-gray-900 to-transparent z-10 pointer-events-none" />

      {/* Continuous Marquee Container */}
      <div className="relative w-full overflow-hidden">
        {/* First Track */}
        <div className="flex w-max animate-marquee-slow">
          {[...images, ...images].map((src, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[500px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gray-100 rounded-xl overflow-hidden shadow-md mx-1 sm:mx-2 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`project-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Second Track (offset for continuous effect) */}
        <div className="flex w-max animate-marquee-slow2 absolute top-0">
          {[...images, ...images].map((src, index) => (
            <div
              key={`dup-${index}`}
              className="flex-shrink-0 w-[500px] sm:w-[600px] h-[350px] sm:h-[450px] bg-gray-100 rounded-xl overflow-hidden shadow-md mx-1 sm:mx-2 flex items-center justify-center"
            >
              <img
                src={src}
                alt={`project-duplicate-${index}`}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWorks;
