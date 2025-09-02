// src/components/albañileria/Microcemento.jsx
import React from "react";
import { Helmet } from "react-helmet";
import FondoLogo from "../FondoLogo";

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

      {/* SEO */}
      <Helmet>
        <title>Microcemento Profesional | Emanuel Gauna</title>
        <meta
          name="description"
          content="Aplicación profesional de microcemento en pisos, paredes y superficies. Ideal para remodelaciones y revestimientos decorativos en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="microcemento, revestimientos, pisos, paredes, baños, cocinas, interiores, exteriores, Buenos Aires, AMBA" />
        <meta property="og:title" content="Microcemento Profesional | Emanuel Gauna" />
        <meta property="og:description" content="Aplicación de microcemento resistente y decorativo para interiores y exteriores en Buenos Aires y AMBA." />
        <meta property="og:image" content="/albaImg/microcemento1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/microcemento" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Microcemento Profesional | Emanuel Gauna" />
        <meta name="twitter:description" content="Aplicación de microcemento resistente y decorativo para interiores y exteriores en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/albaImg/microcemento1.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Microcemento Profesional
      </h2>
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto relative z-10">
        Realizamos la <strong>aplicación profesional de microcemento</strong> en pisos, paredes y distintas superficies, tanto interiores como exteriores. 
        Este material permite <strong>acabados modernos, decorativos y resistentes al uso diario</strong>. 
        Ideal para remodelaciones, revestimientos de baños, cocinas, locales comerciales y proyectos residenciales en Buenos Aires y AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <div className="relative w-full aspect-[4/3]">
            <img
              src={src}
              alt={`Proyecto de microcemento ${idx + 1}`}
              className="w-full h-64 object-cover transform hover:scale-105 transition-transform duration-300"
              loading="lazy"
              width="1200"
              height="900"
            />
            </div>
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
