import React from "react";
import Marquee from "react-fast-marquee";
import {
  FaHospital,
  FaShoppingCart,
  FaUniversity,
  FaBrain,
  FaCouch,
  FaMusic,
  FaBicycle,
  FaCamera,
  FaCode,
  FaAppleAlt,
  FaShieldAlt,
} from "react-icons/fa";

interface Industry {
  name: string;
  icon: JSX.Element;
}

const industries: Industry[] = [
  { name: "Healthcare and Medical", icon: <FaHospital /> },
  { name: "E-commerce and Retail", icon: <FaShoppingCart /> },
  { name: "Finance and Banking", icon: <FaUniversity /> },
  { name: "Education and Training", icon: <FaBrain /> },
  { name: "Art and Design", icon: <FaCouch /> },
  { name: "Music and Entertainment", icon: <FaMusic /> },
  { name: "Sports and Fitness", icon: <FaBicycle /> },
  { name: "Film and Video Production", icon: <FaCamera /> },
  { name: "Technology and Software", icon: <FaCode /> },
  { name: "Food and Beverage", icon: <FaAppleAlt /> },
  { name: "Cybersecurity", icon: <FaShieldAlt /> },
];

// ✅ Utility function for infinite scrolling items
const getInfiniteItems = (direction: "normal" | "reverse" = "normal"): Industry[] => {
  const shuffled = [...industries].sort(() => Math.random() - 0.5);
  return direction === "reverse"
    ? [...shuffled, ...shuffled]
    : [...shuffled, ...shuffled];
};

// ✅ Props interface for MarqueeRow
interface MarqueeRowProps {
  direction?: "left" | "right";
}

const MarqueeRow: React.FC<MarqueeRowProps> = ({ direction = "left" }) => (
  <Marquee
    gradient={true}
    gradientColor="rgb(15, 23, 42)" // tailwind slate-900 color
    pauseOnHover={true}
    direction={direction}
    speed={30}
  >
    {getInfiniteItems(direction === "left" ? "normal" : "reverse").map((item, index) => (
      <div
        key={index}
        className="flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-full m-2 whitespace-nowrap border border-slate-600 shadow"
      >
        <span className="text-blue-400">{item.icon}</span>
        <span className="text-sm font-medium">{item.name}</span>
      </div>
    ))}
  </Marquee>
);

const IndustriesMarquee: React.FC = () => {
  return (
    <section className="bg-slate-900 text-white py-12 px-0 overflow-hidden w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6">
          We speak your business language.
        </h2>
        <p className="text-center text-gray-300 mb-10 text-lg">
          No matter your field, we get the job done!
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="space-y-4">
        <MarqueeRow direction="left" />
        <MarqueeRow direction="right" />
        <MarqueeRow direction="left" />
      </div>
    </section>
  );
};

export default IndustriesMarquee;
