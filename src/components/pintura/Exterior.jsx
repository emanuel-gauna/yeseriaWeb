// src/components/pintura/Exterior.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";
import Footer from "../Footer";

export default function Exterior() {
  const images = [
    "/pinturaImg/exterior1.jpg",
    "/pinturaImg/exterior2.jpg",
    "/pinturaImg/exterior3.jpg",
    "/pinturaImg/exterior4.jpg",
    "/pinturaImg/exterior5.jpg",
    "/pinturaImg/exterior6.jpg"
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Exterior Profesional
      </h2>

      {/* Descripción detallada */}
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Realizamos <strong>pintura profesional en fachadas, balcones y terrazas</strong>, utilizando materiales resistentes a la intemperie y técnicas de preparación de superficies que aseguran <strong>acabados duraderos, uniformes y estéticos</strong>. 
        Ideal para proyectos residenciales, comerciales o industriales en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Pintura exterior ${idx + 1}`}
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
