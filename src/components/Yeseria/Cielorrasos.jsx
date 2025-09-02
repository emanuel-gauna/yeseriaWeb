// src/components/Yeseria/Cielorrasos.jsx
import React from "react";
import { Helmet } from "react-helmet";

import FondoLogo from "../FondoLogo";

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
    <section className="py-12 px-6 bg-gray-100 min-h-screen relative">

      {/* SEO mejorado */}
      <Helmet>
        <title>Cielorrasos y Molduras | Yesería Profesional - Emanuel Gauna</title>
        <meta
          name="description"
          content="Armado e instalación de cielorrasos, buñas y molduras. Servicio profesional de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="cielorrasos, molduras, buñas, yesería, interiores, refacciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/armado-trapecio.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/cielorrasos" />
        <meta name="robots" content="index, follow" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Cielorrasos Profesionales | Emanuel Gauna" />
        <meta name="twitter:description" content="Instalación de cielorrasos y molduras. Servicio de yesería en Buenos Aires y AMBA." />
        <meta name="twitter:image" content="/yesoImg/armado-trapecio.jpg" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo />

      {/* Título y descripción */}
      <h2 className="text-3xl font-bold text-blue-700 mb-2 text-center relative z-10">
        Cielorrasos Armados
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto relative z-10">
        Nos especializamos en el <strong>armado y aplicación de cielorrasos</strong> de yeso, incluyendo buñas y molduras. 
        También realizamos <strong>refacciones de cielorrasos existentes</strong>, asegurando un acabado profesional y duradero. 
        Más de 15 años de experiencia en remodelaciones y trabajos de interiorismo en Buenos Aires y el AMBA.
      </p>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg relative z-10">
           <div className="relative w-full aspect-[4/3]">
    <img
      src={src}
      alt={`Proyecto de Cielorrasos${idx + 1}`}
      className="absolute top-0 left-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
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
