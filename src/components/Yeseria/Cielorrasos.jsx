// src/components/yeseria/Cielorrasos.jsx
import React from "react";
import StickyButtons from "../StickyButtons";

export default function Cielorrasos() {
  const images = [
    "/yesoImg/armado-trapecio.jpg",
    "/yesoImg/armado-trapecio-term.jpg",
    "/yesoImg/armado1.jpg",
    "/yesoImg/armado2.jpg",
    "/yesoImg/armTechito.jpg",
    "/yesoImg/armTechitoTerm.jpg"
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center">
        Cielorrasos Armados
      </h2>

      {/* Descripción */}
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto">
        Nos especializamos en el <strong>armado y aplicación de cielorrasos</strong> de yeso, incluyendo buñas y molduras. 
        También realizamos <strong>refacciones de cielorrasos existentes</strong>, asegurando un acabado profesional y duradero. 
        Más de 15 años de experiencia en remodelaciones y trabajos de interiorismo en Buenos Aires y el AMBA.
      </p>

      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Cielorraso ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <StickyButtons />
    </section>
  );
}
