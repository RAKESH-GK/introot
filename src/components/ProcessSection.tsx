import React from "react";
import {
  FaComments,
  FaCalculator,
  FaPaintBrush,
  FaRocket,
} from "react-icons/fa";

interface ProcessStep {
  id: string;
  title: string;
  desc: string;
  gradient: string;
  icon: React.ReactNode;
}

const processSteps: ProcessStep[] = [
  {
    id: "01",
    title: "Discover",
    desc: "Let's discuss your project and goals to understand your vision.",
    gradient: "from-blue-100 to-blue-300",
    icon: <FaComments className="text-blue-700 text-4xl" />,
  },
  {
    id: "02",
    title: "Estimate",
    desc: "We'll provide a detailed estimate for your project.",
    gradient: "from-green-100 to-green-300",
    icon: <FaCalculator className="text-green-700 text-4xl" />,
  },
  {
    id: "03",
    title: "Design & Develop",
    desc: "Design and develop custom software solutions.",
    gradient: "from-purple-100 to-purple-300",
    icon: <FaPaintBrush className="text-purple-700 text-4xl" />,
  },
  {
    id: "04",
    title: "Launch & Support",
    desc: "Launch and maintain your software with ongoing support.",
    gradient: "from-pink-100 to-pink-300",
    icon: <FaRocket className="text-pink-700 text-4xl" />,
  },
];

const ProcessSection: React.FC = () => {
  return (
    <section className="pt-20 pb-12 px-4 sm:px-8 lg:px-16 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
          How we bring your ideas to life.
        </h2>
        <p className="text-gray-300 text-lg mb-10">
          See how we take your idea from start to finish, and make it a success!
        </p>

        {/* Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {processSteps.map((step) => (
            <div
              key={step.id}
              className={`rounded-xl p-6 shadow-lg text-left bg-gradient-to-br ${step.gradient} text-gray-800 hover:scale-105 transition-transform duration-300 group`}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-3xl font-bold opacity-80">{step.id}</div>
                <div>{step.icon}</div>
              </div>
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-sm opacity-90">{step.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12">
          <a
            href="tel:+91 8861092749"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition"
          >
            Let’s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
