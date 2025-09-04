import React from "react";
import FondoLogo from "../FondoLogo";

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
      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título y descripción */}
      <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Interior Profesional
      </h1>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Ejecutamos <strong>pintura interior de paredes, cielorrasos y detalles decorativos</strong> con acabados de alta calidad y durabilidad.
        Utilizamos técnicas profesionales que aseguran superficies lisas, uniformes y estéticamente impecables.
        Ideal para casas, departamentos y oficinas en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
              <img
                src={src}
                alt={`Proyecto de pintura interior ${idx + 1}`}
                className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                loading="lazy"
                width="1200"
                height="900"
              />
            </div>
          </div>
        ))}
      </div>

      {/* CTA para contacto */}
      <div className="text-center mt-8 relative z-10">
        <a
          href="#contact-section"
          className="bg-blue-700 text-white px-6 py-3 rounded-lg shadow hover:bg-blue-800 transition"
        >
          Solicitar Presupuesto
        </a>
      </div>
    </section>
  );
}