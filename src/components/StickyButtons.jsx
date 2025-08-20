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
        className="fixed bottom-6 left-6 flex items-center gap-3 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:bg-green-600 transition-colors z-50"
      >
        <FaWhatsapp className="text-2xl" />
        <span className="font-semibold">¡Ponete en contacto por WhatsApp!</span>
      </a>

      {/* Sticky Mercado Libre */}
      <a
        href="https://servicio.mercadolibre.com.ar/MLA-1476452521-yesero-profesional-drywall-y-pintura-_JM#origin%3Dshare%26sid%3Dshare"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 left-6 flex items-center gap-3 bg-yellow-400 text-white px-4 py-3 rounded-full shadow-lg hover:bg-yellow-500 transition-colors z-50"
      >
        <FaStore className="text-2xl" />
        <span className="font-semibold">¡Estamos en MERCADO LIBRE!</span>
      </a>
    </>
  );
}
