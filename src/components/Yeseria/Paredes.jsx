// src/components/Yeseria/Paredes.jsx
import React from "react";
import { Helmet } from "react-helmet";
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

      {/* SEO */}
      <Helmet>
        <title>Aplicado y Refacción de Paredes | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Aplicación profesional de yeso en paredes y refacción de muros existentes. Servicios de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="paredes, yesería, refacción, yeso, interiores, exteriores, remodelaciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Aplicado y Refacción de Paredes | Emanuel Gauna" />
        <meta property="og:description" content="Servicios profesionales de yesería en paredes, refacciones y reparaciones en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/bañoConYeso.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/paredes" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Aplicado y Refacción de Paredes | Emanuel Gauna" />
        <meta name="twitter:description" content="Servicios profesionales de yesería en paredes, refacciones y reparaciones en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/bañoConYeso.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Aplicado y Refacción de Paredes
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto relative z-10">
        Realizamos <strong>aplicado de yeso en paredes</strong> de todo tipo de ambientes, interiores y exteriores, asegurando un acabado liso, uniforme y profesional. 
        También ofrecemos <strong>refacciones y reparación de paredes existentes</strong>, corrigiendo imperfecciones, grietas y daños estructurales, con resultados duraderos y estéticamente impecables. 
        Más de 15 años de experiencia en remodelaciones y trabajos de interiorismo en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Aplicado o refacción de pared proyecto ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* CTA para presupuesto */}
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
