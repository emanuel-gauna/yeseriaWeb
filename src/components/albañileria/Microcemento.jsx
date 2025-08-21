// src/components/albañileria/Microcemento.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";

export default function Microcemento() {
  const images = [
    "/albaImg/microcemento1.jpg",
    "/albaImg/microcemento2.jpg",
    "/albaImg/microcemento3.jpg",
    "/albaImg/microcemento4.jpg",
    "/albaImg/microcemento5.jpg",
    "/albaImg/microcemento6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás de las imágenes */}
      <FondoLogo opacity={10} size="180px" />

      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center relative z-10">
        Microcemento
      </h2>
      <p className="text-gray-700 text-center mb-8 relative z-10">
        Aplicación profesional de microcemento en pisos, paredes y superficies diversas.
        Ideal para acabados modernos, resistentes y decorativos.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Microcemento ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
    </section>
  );
}
