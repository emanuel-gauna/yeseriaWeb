// src/components/pintura/Refacciones.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";

export default function Refacciones() {
  const images = [
    "/pinturaImg/refaccion1.jpg",
    "/pinturaImg/refaccion2.jpg",
    "/pinturaImg/refaccion3.jpg",
    "/pinturaImg/refaccion4.jpg",
    "/pinturaImg/refaccion5.jpg",
    "/pinturaImg/refaccion6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Refacciones y Restauraciones
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Retocamos y renovamos pinturas viejas, realizamos reparación de superficies y aplicamos sellado profesional antes de pintar.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Refacción ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
    </section>
  );
}
