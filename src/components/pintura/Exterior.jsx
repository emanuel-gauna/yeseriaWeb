// src/components/pintura/Exterior.jsx
import React from "react";
import { Helmet } from "react-helmet";

import FondoLogo from "../FondoLogo";

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

      {/* SEO */}
      <Helmet>
        <title>Pintura Exterior Profesional | Emanuel Gauna</title>
        <meta
          name="description"
          content="Servicios profesionales de pintura exterior para fachadas, balcones y terrazas en Buenos Aires y AMBA. Acabados duraderos y uniformes con técnicas profesionales."
        />
        <meta name="keywords" content="pintura exterior, fachadas, terrazas, balcones, pintura profesional, Buenos Aires, AMBA" />
        <meta property="og:title" content="Pintura Exterior Profesional | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación profesional de pintura exterior para proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA." />
        <meta property="og:image" content="/pinturaImg/exterior1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/pintura-exterior" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Pintura Exterior Profesional | Emanuel Gauna" />
        <meta name="twitter:description" content="Aplicación profesional de pintura exterior para proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/pinturaImg/exterior1.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Pintura Exterior Profesional
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto relative z-10">
        Realizamos <strong>pintura profesional en fachadas, balcones y terrazas</strong>, utilizando materiales resistentes a la intemperie y técnicas de preparación de superficies que aseguran <strong>acabados duraderos, uniformes y estéticos</strong>. 
        Ideal para proyectos residenciales, comerciales o industriales en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[4/3]">
    <img
      src={src}
      alt={`Proyecto de pintura exterior ${idx + 1}`}
      className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
      loading="lazy"
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
