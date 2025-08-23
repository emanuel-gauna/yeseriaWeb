// src/components/pintura/Interior.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";
import Footer from "../Footer";

export default function Interior() {
  const images = [
    "/pinturaImg/interior1.jpg",
    "/pinturaImg/interior2.jpg",
    "/pinturaImg/interior3.jpg",
    "/pinturaImg/interior4.jpg",
    "/pinturaImg/interior5.jpg",
    "/pinturaImg/interior6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Interior Profesional
      </h2>

      {/* Descripción detallada */}
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Ejecutamos <strong>pintura interior de paredes, cielorrasos y detalles decorativos</strong> con acabados de alta calidad y durabilidad. 
        Utilizamos técnicas profesionales que aseguran superficies lisas, uniformes y estéticamente impecables. 
        Ideal para casas, departamentos y oficinas en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Pintura interior ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
      <Footer />
    </section>
  );
}
