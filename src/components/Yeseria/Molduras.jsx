// src/components/yeseria/Molduras.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";

export default function Molduras() {
  const images = [
    "/yesoImg/moldura1.jpg",
    "/yesoImg/moldura7.jpg",
    "/yesoImg/moldura3.jpg",
    "/yesoImg/moldura9.jpg",
    "/yesoImg/moldura5.jpg",
    "/yesoImg/moldura6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Buñas y Molduras
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Moldura ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
    </section>
  );
}
