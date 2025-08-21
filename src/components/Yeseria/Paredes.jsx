// src/components/yeseria/Paredes.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";

export default function Paredes() {
  const images = [
    "/yesoImg/bañoConYeso.jpg",
    "/yesoImg/bañoConYeso2.jpg",
    "/yesoImg/ladrilloCubierto.jpg",
    "/yesoImg/ladrilloCubierto2.jpg",
    "/yesoImg/monoambiente.jpg",
    "/yesoImg/monoambiente2.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center relative z-10">
        Aplicado y Refacción de Paredes
      </h2>

      {/* Descripción */}
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto relative z-10">
        Realizamos <strong>aplicado de yeso en paredes</strong> de todo tipo de ambientes, asegurando un acabado liso y profesional. 
        También ofrecemos <strong>refacciones de paredes existentes</strong> para reparar imperfecciones, grietas o daños, 
        garantizando resultados duraderos y estéticamente impecables. Más de 15 años de experiencia en Buenos Aires y AMBA.
      </p>

      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Pared ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
    </section>
  );
}
