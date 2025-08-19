// src/components/Home.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">
      {/* SEO */}
      <Helmet>
        <title>Yesería, Albañilería y Remodelaciones | Emanuel Gauna - Buenos Aires</title>
        <meta
          name="description"
          content="Servicios de yesería, albañilería, revoques, pisos, colocación de cerámicas, pintura interior y exterior, refacciones y remodelaciones generales en Buenos Aires y AMBA. Contacto: Emanuel Gauna."
        />
        <meta
          name="keywords"
          content="yesería, albañilería, remodelaciones, refacciones, cielorrasos, buñas, molduras, revoques, pintura, pisos, cerámicas, microcemento, revestimientos plásticos, Buenos Aires, AMBA"
        />
      </Helmet>

      {/* Header principal */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">
          Yesería e Interiores Gauna Hnos
        </h1>
        <p className="text-gray-700">
          Enlucidos, enduido, pintura profesional y remodelaciones en Buenos Aires y AMBA
        </p>
      </header>

      {/* Mensaje llamativo */}
      <section className="text-center mb-6 max-w-xl">
        <p className="text-lg text-gray-800 font-semibold bg-yellow-100 p-4 rounded-lg shadow-md">
          Más de 15 años transformando hogares en Buenos Aires y AMBA. Solicitá tu presupuesto y trabajemos juntos en tu proyecto.
        </p>
      </section>

      {/* Botón de contacto */}
      <section className="text-center mb-12">
        <a
          href="https://wa.me/5491164371277"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Pedir presupuesto
        </a>
      </section>

      {/* Servicios destacados */}
      <section className="text-center max-w-3xl">
        <h2 className="text-2xl font-bold text-blue-700 mb-6">Nuestros Servicios</h2>
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
