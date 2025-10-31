import React from "react";
import { FaHandsHelping, FaStoreAlt, FaLaptopCode } from "react-icons/fa";

const VocalForLocalSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-yellow-50 via-orange-50 to-rose-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 py-16 px-4 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">
            We Support Local Businesses 🌿
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-3 max-w-2xl mx-auto">
            Our heart lies in the community. We’re proudly vocal for local — empowering shops,
            enabling learning, and giving back to our roots.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 text-left">
          {/* Card 1 - Local Shops */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-yellow-100 dark:border-gray-700">
            <FaStoreAlt className="text-yellow-500 dark:text-yellow-300 text-3xl mb-3" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Empowering Local Shops
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Helping small businesses expand online with tools, visibility, and support they deserve.
            </p>
          </div>

          {/* Card 2 - Learning */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-blue-100 dark:border-gray-700">
            <FaLaptopCode className="text-blue-500 dark:text-blue-300 text-3xl mb-3" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Digital Learning Access
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Bridging the digital gap by supporting learning initiatives for rural youth and businesses.
            </p>
          </div>

          {/* Card 3 - Community */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md border border-green-100 dark:border-gray-700">
            <FaHandsHelping className="text-green-500 dark:text-green-300 text-3xl mb-3" />
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white">
              Community First
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              We organize local drives, mentorships, and awareness campaigns to uplift entrepreneurs.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VocalForLocalSection;
