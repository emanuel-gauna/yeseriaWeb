// src/components/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";
import FondoLogo from "./FondoLogo";
import BigProjectsBanner from "./BigProyectBanner";

export default function Home() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">

      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* SEO */}
      <Helmet>
        <title>Yesería, Albañilería y Remodelaciones | Emanuel Gauna - Buenos Aires</title>
        <meta
          name="description"
          content="Servicios de yesería, albañilería, revoques, pisos, colocación de cerámicas, pintura interior y exterior, refacciones y remodelaciones generales en Buenos Aires y AMBA. Contacto: Emanuel Gauna."
        />
        <meta
          name="keywords"
          content="yesería, albañilería, remodelaciones, refacciones, cielorrasos, buñas, molduras, revoques, pintura, pisos, cerámicas, microcemento, revestimientos plásticos, presupuestos, obras grandes, casas, barrios privados, Buenos Aires, AMBA"
        />
      </Helmet>

      {/* Header principal */}
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Yesería e Interiores Gauna Hnos
        </h1>
        <p className="text-gray-700 text-lg md:text-xl">
          Enlucidos, enduido, pintura profesional y remodelaciones en Buenos Aires y AMBA
        </p>
      </header>

      {/* Mensaje llamativo de presupuesto */}
      <BigProjectsBanner
        message="Más de 15 años transformando hogares y grandes proyectos en Buenos Aires y AMBA. Solicitá tu presupuesto para obras grandes, refacciones de casas y barrios privados, y trabajemos juntos en tu proyecto."
        fontSize="text-lg md:text-xl font-semibold"
        bgColor="bg-yellow-100"
        textColor="text-gray-800"
        shadow="shadow-md"
      />

      {/* Servicios destacados */}
      <section className="text-center max-w-3xl relative z-10 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">Nuestros Servicios</h2>
        <p className="text-gray-700 mb-4">
          <strong>Yesería:</strong> Aplicado de yeso en paredes y techos, armado de cielorrasos, buñas, molduras y refacciones en general.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Albañilería:</strong> Revoques, colocación de puertas y ventanas, mampostería, pisos de carpeta y contrapisos, colocación de cerámicas y revoques exteriores.
        </p>
        <p className="text-gray-700 mb-4">
          <strong>Pintura y Revestimientos:</strong> Pintura interior y exterior, refacciones de pinturas viejas, pisos de microcemento y revestimientos plásticos texturados.
        </p>
        <p className="text-gray-700">
          Atendemos en la Ciudad de Buenos Aires y el AMBA. Contacto: <a href="tel:+541164371277" className="text-blue-600 underline">11 6437-1277</a>
        </p>
      </section>

    </section>
  );
}
