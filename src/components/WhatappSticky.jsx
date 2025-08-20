// src/components/WhatsAppSticky.jsx
import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppSticky() {
  return (
    <a
      href="https://wa.me/5491164371277"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
    >
      <FaWhatsapp className="text-2xl" />
      <span className="font-semibold">¡Consultá por tu trabajo!</span>
    </a>
  );
}
