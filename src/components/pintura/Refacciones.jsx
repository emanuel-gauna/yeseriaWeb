// src/components/pintura/Refacciones.jsx
import React from "react";
import { Helmet } from "react-helmet";
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

      {/* SEO */}
      <Helmet>
        <title>Refacciones y Restauraciones de Pintura | Emanuel Gauna</title>
        <meta
          name="description"
          content="Refacciones y restauraciones de pintura interior y exterior. Retocamos y renovamos superficies desgastadas con acabados duraderos y uniformes en Buenos Aires y AMBA."
        />
        <meta name="keywords" content="refacciones pintura, restauraciones pintura, retoques, pintura interior, pintura exterior, Buenos Aires, AMBA" />
        <meta property="og:title" content="Refacciones y Restauraciones de Pintura | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación profesional de refacciones y restauraciones de pintura interior y exterior en viviendas, oficinas y locales comerciales en Buenos Aires y AMBA." />
        <meta property="og:image" content="/pinturaImg/refaccion1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/pintura-refacciones" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Refacciones y Restauraciones de Pintura | Emanuel Gauna" />
        <meta name="twitter:description" content="Renovación profesional de pintura interior y exterior en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/pinturaImg/refaccion1.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Refacciones y Restauraciones de Pintura
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Nos especializamos en <strong>refacciones de pintura interior y exterior</strong>, retocando y renovando superficies desgastadas o dañadas. 
        Aplicamos técnicas profesionales de reparación, sellado y pintura para lograr acabados duraderos, uniformes y estéticamente impecables. 
        Ideal para viviendas, departamentos, oficinas y locales comerciales en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[4/3]">
    <img
      src={src}
      alt={`Proyecto de refacciones ${idx + 1}`}
      className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      loading="lazy"
      width="1200"
      height="900"
    />
  </div>
          </div>
        ))}
      </div>

      {/* CTA */}
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
