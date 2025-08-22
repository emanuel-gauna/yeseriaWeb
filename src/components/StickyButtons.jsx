// src/components/StickyButtons.jsx
import React from "react";
import { FaWhatsapp, FaStore } from "react-icons/fa";

export default function StickyButtons() {
  return (
    <>
      {/* Sticky WhatsApp */}
      <a
        href="https://wa.me/5491164371277"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contactarme por WhatsApp"
        className="fixed bottom-6 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-green-500 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-green-600 transition-all transform hover:scale-105 animate-bounce-slow z-50 text-sm sm:text-base"
      >
        <FaWhatsapp className="text-xl sm:text-2xl" />
        <span className="font-semibold">¡Ponete en contacto por WhatsApp!</span>
      </a>

      {/* Sticky Mercado Libre */}
      <a
        href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Ver nuestra tienda en Mercado Libre"
        className="fixed bottom-20 left-4 sm:left-6 flex items-center gap-2 sm:gap-3 bg-yellow-400 text-white px-3 py-2 sm:px-4 sm:py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-105 z-50 text-sm sm:text-base"
      >
        <FaStore className="text-xl sm:text-2xl" />
        <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
      </a>
    </>
  );
}
