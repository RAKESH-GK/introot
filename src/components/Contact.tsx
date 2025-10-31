import React from "react";
import { FaWhatsapp, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";

const Contact: React.FC = () => {
  return (
    <section
      id="Contact"
      className="bg-[#0B0D13] text-gray-300 px-4 sm:px-8 py-16 text-center"
    >
      <div className="max-w-3xl mx-auto space-y-6">
        {/* Headline */}
        <h2 className="text-xl sm:text-2xl font-semibold text-gray-200">
          Got a quick question? <span className="text-white">WhatsApp us.</span>
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm sm:text-base">
          No need for formalities — just say “Hi” on{" "}
          <span className="font-medium text-white">WhatsApp</span> and watch the
          magic happen.
        </p>

        {/* WhatsApp Button */}
        <div className="mt-6">
          <a
            href="https://wa.me/+918861092749"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5C] text-white px-6 py-3 rounded-full text-base font-medium transition"
          >
            <FaWhatsapp className="text-2xl" />
            Chat on WhatsApp
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-6 mt-8 text-xl text-gray-400">
          <a
            href="https://instagram.com/introot.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://linkedin.com/company/introot"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://facebook.com/Introot.in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
