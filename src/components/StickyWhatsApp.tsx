import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const StickyWhatsApp: React.FC = () => {
  return (
    <a
      href="https://wa.me/918861092749" // ✅ Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 bg-[#25D366] hover:bg-[#1EBE5C] text-white p-3 rounded-full shadow-lg z-50 flex items-center justify-center transition-all duration-300 hover:scale-110 animate-bounce"
    >
      <FaWhatsapp className="text-2xl sm:text-3xl" />
    </a>
  );
};

export default StickyWhatsApp;
