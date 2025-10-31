import React from "react";
import { motion } from "framer-motion";
import {
  Code,
  Smartphone,
  Image,
  LayoutDashboard,
  Search,
  Megaphone,
  Globe,
} from "lucide-react";

interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  hoverGradient: string;
}

const services: Service[] = [
  {
    title: "Web Development",
    description:
      "We create websites that are pretty, functional, and stress-free. Because who needs headaches online?",
    icon: (
      <Code className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-blue-600" />
    ),
    hoverGradient: "hover:from-blue-500 hover:to-purple-500",
  },
  {
    title: "Mobile App Development",
    description:
      "We build apps that won't make you want to throw your phone. Mostly because they just work.",
    icon: (
      <Smartphone className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-green-600" />
    ),
    hoverGradient: "hover:from-green-500 hover:to-teal-500",
  },
  {
    title: "Graphic Design",
    description:
      "We create visuals that capture attention and tell your story. Bringing your brand to life.",
    icon: (
      <Image className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-pink-500" />
    ),
    hoverGradient: "hover:from-pink-500 hover:to-rose-400",
  },
  {
    title: "UI/UX Design",
    description:
      "We design interfaces that users love. Because buttons that look like buttons are a good thing.",
    icon: (
      <LayoutDashboard className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-yellow-600" />
    ),
    hoverGradient: "hover:from-yellow-400 hover:to-orange-400",
  },
  {
    title: "SEO",
    description:
      "We help you rank higher on Google. Because nobody finds treasure on page 2.",
    icon: (
      <Search className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-purple-600" />
    ),
    hoverGradient: "hover:from-purple-500 hover:to-indigo-400",
  },
  {
    title: "Social Media Marketing",
    description:
      "We make your brand loud and clear online. Because whispers don't get likes.",
    icon: (
      <Megaphone className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-red-500" />
    ),
    hoverGradient: "hover:from-red-500 hover:to-pink-400",
  },
  {
    title: "Digital Marketing",
    description:
      "We help your business go digital. Because being invisible online doesn't pay the bills.",
    icon: (
      <Globe className="w-8 h-8 transition-colors duration-300 group-hover:text-white text-indigo-500" />
    ),
    hoverGradient: "hover:from-indigo-500 hover:to-blue-500",
  },
];

const Superpowers: React.FC = () => {
  return (
    <section
      id="Services"
      className="bg-white dark:bg-gray-900 py-20 px-6 md:px-16"
    >
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Our Superpowers.
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300 text-lg max-w-xl mx-auto">
          Making Your Business Shine Online (Seriously, We're Good at This)
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
              duration: 0.4,
              delay: index * 0.12,
              ease: "easeInOut",
            }}
            viewport={{ once: true }}
            className={`group p-6 rounded-xl bg-gray-50 dark:bg-gray-800 shadow-md transition-all duration-500 transform hover:scale-105 bg-gradient-to-br ${service.hoverGradient} hover:shadow-xl`}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Superpowers;
