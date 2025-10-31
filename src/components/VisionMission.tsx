import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import visionImage from "../assets/Vison-01.png"; // ✅ Proper import

const contents = [
  {
    title: "The Birth of Introot",
    text: "Introot started with a dream to bring IT services to Belthangady. As young tech enthusiasts, we saw a gap in local digital services and decided to fill it. Today, we're on a mission to help businesses grow digitally with innovative IT solutions.",
  },
  {
    title: "About Us",
    text: "Introot helps businesses grow with easy and affordable digital solutions. We build modern, responsive websites and user-friendly mobile apps tailored to your goals. Our digital marketing services include SEO, social media management, and targeted ad campaigns. We also offer graphic design and branding to help your business stand out visually. From strategy to execution, Introot is your all-in-one partner for online success.",
  },
  {
    title: "Our Mission",
    text: "At Introot, we help businesses grow, scale, and shine online with innovative IT solutions. We believe every brand deserves a strong and impactful digital presence. Our team creates websites, apps, and marketing strategies that connect with your audience. From design to deployment, we tailor every solution to your business goals.",
  },
  {
    title: "Our Vision",
    text: "We aim to empower young talents and turn local dreams into global realities. Our mission is to make technology accessible to businesses of all sizes. We strive to create meaningful opportunities and build long-term careers. By nurturing innovation, we drive sustainable digital transformation.",
  },
  {
    title: "Core Values",
    text: `• Integrity - We earn trust with transparency & honesty.\n• Innovation - We think, innovate & improve every day.\n• Customer First - Your success is our mission.\n• Quality - We deliver more than we promise.\n• Empowerment - We empower young talents and businesses to achieve their goals.\n• Sustainability - We create with responsibility and a future mindset.`,
  },
  {
    title: "Why Choose Introot",
    text: "Our unique approach focuses on cost-effective, practical solutions that solve real business problems. Whether you're a startup or an established enterprise, we tailor our services to your needs making tech work for you, not the other way around.",
  },
  {
    title: "Let’s Grow Together",
    text: "We're just getting started and we’d love for you to be part of our journey. Explore our services, get in touch, or follow us on social media to stay updated with the latest innovations from Introot.",
  },
];

const VisionMission: React.FC = () => {
  const [index, setIndex] = useState(0);
  const current = contents[index];

  const handlePrev = () =>
    setIndex((prev) => (prev > 0 ? prev - 1 : contents.length - 1));

  const handleNext = () =>
    setIndex((prev) => (prev < contents.length - 1 ? prev + 1 : 0));

  return (
    <section
      id="VisionMission"
      className="relative pt-10 pb-20 px-4 md:px-20 bg-white dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Image Section */}
        <div className="rounded-2xl overflow-hidden shadow-xl">
          <img
            src={visionImage}
            alt="About Introot"
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>

        {/* Text Section */}
        <div className="relative flex flex-col justify-between h-full">
          <div
            key={current.title}
            className="transition-all duration-700 ease-in-out"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              {current.title}
            </h3>
            <p className="whitespace-pre-line text-gray-700 dark:text-gray-300 leading-relaxed">
              {current.text}
            </p>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-start mt-6 gap-4">
            <button
              onClick={handlePrev}
              className="p-3 bg-gray-200 dark:bg-gray-800 rounded-full shadow transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-gray-800 dark:text-white" />
            </button>
            <button
              onClick={handleNext}
              className="p-3 bg-blue-600 text-white rounded-full shadow transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
