// src/components/albañileria/Microcemento.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";
import Footer from "../Footer";

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

      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center relative z-10">
        Microcemento Profesional
      </h2>

      {/* Descripción mejorada */}
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto relative z-10">
        Realizamos la <strong>aplicación profesional de microcemento</strong> en pisos, paredes y distintas superficies, tanto interiores como exteriores. 
        Este material es ideal para lograr <strong>acabados modernos, decorativos y resistentes al uso diario</strong>. 
        Perfecto para remodelaciones, revestimientos de baños, cocinas, locales comerciales y proyectos residenciales en Buenos Aires y AMBA.
      </p>

      {/* Grilla de imágenes */}
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
      <Footer />
    </section>
  );
}
