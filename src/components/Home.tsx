import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";
import HeroClip from "../assets/HeroClip.mp4"; // ✅ Import local video properly

const Home: React.FC = () => {
  return (
    <section className="flex flex-col justify-between px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-10 sm:pt-14 pb-6 relative overflow-hidden">

      {/* Background Blobs */}
      <motion.div
        className="absolute top-[-60px] left-[-40px] w-72 h-72 bg-blue-300 dark:bg-blue-800 rounded-full opacity-20 blur-3xl z-0"
        animate={{ x: [0, 10, -10, 0], y: [0, -20, 10, 0] }}
        transition={{ duration: 15, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-80px] right-[-40px] w-72 h-72 bg-pink-300 dark:bg-pink-800 rounded-full opacity-20 blur-3xl z-0"
        animate={{ x: [0, -15, 10, 0], y: [0, 15, -10, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />

      {/* Content Grid */}
      <div className="relative z-10 flex-grow flex items-center">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-6 items-center">
          
          {/* Left Content */}
          <div className="space-y-4">
            <motion.p
              className="text-xs sm:text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Innovating since 2024, kinda
            </motion.p>

            <motion.h1
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug"
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Geeks who{" "}
              <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
                <Typewriter
                  words={["care", "deliver", "design", "code", "scale"]}
                  loop
                  cursor
                  cursorStyle="_"
                  typeSpeed={90}
                  deleteSpeed={60}
                  delaySpeed={1500}
                />
              </span>
            </motion.h1>

            <motion.p
              className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed max-w-md"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              From idea to launch, we build intuitive solutions that transform complexity into clarity.
            </motion.p>

            <motion.a
              href="#Footer"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full text-sm sm:text-base font-medium shadow-md transition"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.span
                animate={{ y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: 1.2 }}
              >
                🚀
              </motion.span>
              Schedule a Meeting
            </motion.a>
          </div>

          {/* Right Video */}
          <motion.div
            className="w-full h-60 sm:h-72 md:h-[340px] rounded-xl shadow-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6 }}
          >
            <video
              src={HeroClip}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover rounded-xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll Down Icon */}
      <div className="flex justify-center mt-6 mb-1 relative z-10">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="w-6 h-6 text-gray-500 dark:text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
