import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { ChevronDown } from "lucide-react";

const Home: React.FC = () => {
  return (
    <section
      id="Home"
      className="flex flex-col justify-between items-center px-4 sm:px-6 lg:px-16 bg-gradient-to-r from-white to-blue-50 dark:from-gray-900 dark:to-gray-800 pt-10 sm:pt-14 pb-6 relative overflow-hidden text-center"
    >
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

      {/* Centered Content */}
      <div className="relative z-10 flex-grow flex flex-col items-center justify-center space-y-5 max-w-3xl">
        <motion.p
          className="text-xs sm:text-sm uppercase tracking-wide text-blue-600 dark:text-blue-400 font-semibold"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Innovating since 2024, kinda
        </motion.p>

        <motion.h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="block">Geeks who care</span>
          <span className="block mt-2">
            about your{" "}
            <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent animate-pulse">
              <Typewriter
                words={[
                  "business",
                  "apps",
                  "brand",
                  "technology",
                  "marketing",
                  "ideas",
                  "dreams",
                  "success",
                ]}
                loop
                typeSpeed={90}
                deleteSpeed={60}
                delaySpeed={1500}
              />
            </span>
          </span>
        </motion.h1>

        <motion.p
          className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-md"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          We turn huh? into aha!, building solutions that are simpler than your aunt's recipe for chai.
        </motion.p>

        <motion.a
          href="#Contact"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-7 py-3 rounded-full text-base font-medium shadow-md transition"
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

      {/* Scroll Down Icon */}
      <div className="flex justify-center mt-10 mb-1 relative z-10">
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
