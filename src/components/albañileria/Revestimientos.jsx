// src/components/albañileria/Revestimientos.jsx
import React from "react";
import { Helmet } from "react-helmet";
import FondoLogo from "../FondoLogo";

export default function Revestimientos() {
  const images = [
    "/albaImg/revestimientos1.jpg",
    "/albaImg/revestimientos2.jpg",
    "/albaImg/revestimientos3.jpg",
    "/albaImg/revestimientos4.jpg",
    "/albaImg/revestimientos5.jpg",
    "/albaImg/revestimientos6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">

      {/* SEO */}
      <Helmet>
        <title>Revestimientos y Pisos Profesionales | Emanuel Gauna</title>
        <meta
          name="description"
          content="Colocación profesional de cerámicas, pisos de microcemento, revoques y revestimientos exteriores. Acabados duraderos y estéticamente impecables en Buenos Aires y AMBA."
        />
        <meta name="keywords" content="revestimientos, pisos, cerámicas, microcemento, revoques, albañilería, Buenos Aires, AMBA" />
        <meta property="og:title" content="Revestimientos Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación profesional de revestimientos y pisos en interiores y exteriores en Buenos Aires y AMBA." />
        <meta property="og:image" content="/albaImg/revestimientos1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/revestimientos" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Revestimientos Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación profesional de revestimientos y pisos en interiores y exteriores en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/albaImg/revestimientos1.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Revestimientos y Pisos Profesionales
      </h2>
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto relative z-10">
        Ofrecemos <strong>colocación de cerámicas, pisos de microcemento, revoques y revestimientos exteriores</strong> para todo tipo de espacios. 
        Garantizamos <strong>terminaciones duraderas y estéticamente impecables</strong>, adaptadas a proyectos residenciales, comerciales e industriales en Buenos Aires y AMBA. 
        Incluye preparación de superficies, nivelación y acabado profesional para cada ambiente.
      </p>

      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
           <div className="relative w-full aspect-[16/9] sm:aspect-[4/3]">
    <img
      src={src}
      alt={`Proyecto de revestimientos ${idx + 1}`}
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
