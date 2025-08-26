import React from "react";
import { Helmet } from "react-helmet";

export default function Acerca() {
  return (
    <section className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center">
      <Helmet>
        <title>Acerca de Emanuel Gauna | Yesero, Pintor y Albañil Profesional</title>
        <meta
          name="description"
          content="Emanuel Gauna ofrece servicios profesionales de yesería, pintura y albañilería, especializado en microcemento y remodelaciones en Buenos Aires y AMBA. Garantía de calidad y atención personalizada."
        />
        <meta
          name="keywords"
          content="yesero, pintor, albañil, microcemento, remodelaciones, yesería, pintura, revestimientos, Buenos Aires, AMBA"
        />
      </Helmet>

      <h1 className="text-4xl font-bold text-blue-700 mb-6">
        Acerca de Emanuel Gauna
      </h1>

      <p className="text-gray-700 max-w-3xl text-center leading-relaxed mb-4">
        Soy <strong>yesero</strong>, <strong>pintor</strong> y <strong>albañil</strong> con más de 15 años de experiencia, especializado en
        <strong> remodelaciones</strong>, aplicaciones de <strong>microcemento</strong>, revestimientos y pintura de interiores y exteriores.
      </p>

      <p className="text-gray-700 max-w-3xl text-center leading-relaxed mb-6">
        Mi objetivo es ofrecer <strong>servicios profesionales de alta calidad</strong>, adaptados a cada proyecto, ya sea un hogar, oficina o un gran emprendimiento.
        Garantizo atención personalizada, resultados duraderos y acabados impecables que superen las expectativas de mis clientes en Buenos Aires y el AMBA.
      </p>

      {/* Foto al final */}
      <div className="mt-8 relative z-20">
        <img
          src="/acerca.jpg" // Cambiar por la ruta real de la foto
          alt="Emanuel Gauna - Yesero, Pintor y Albañil"
          className="w-48 h-48 rounded-full object-cover shadow-lg z-5"
        />
      </div>
    </section>
  );
}
