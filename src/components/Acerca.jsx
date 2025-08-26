// src/components/Acerca.jsx
import React from "react";
import { Helmet } from "react-helmet";
import { QRCodeCanvas } from "qrcode.react";

export default function Acerca() {
  return (
    <section className="relative min-h-screen p-6 bg-transparent flex flex-col items-center justify-center">

      {/* SEO */}
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

      {/* Título */}
      <h1 className="text-4xl font-bold text-blue-700 mb-6 text-center z-10 relative">
        Acerca de Emanuel Gauna
      </h1>

      {/* Descripción */}
      <p className="text-gray-700 max-w-3xl text-center leading-relaxed mb-4 z-10 relative">
        Soy <strong>yesero</strong>, <strong>pintor</strong> y <strong>albañil</strong> con más de 15 años de experiencia, especializado en
        <strong> remodelaciones</strong>, aplicaciones de <strong>microcemento</strong>, revestimientos y pintura de interiores y exteriores.
      </p>

      <p className="text-gray-700 max-w-3xl text-center leading-relaxed mb-6 z-10 relative">
        Mi objetivo es ofrecer <strong>servicios profesionales de alta calidad</strong>, adaptados a cada proyecto, ya sea un hogar, oficina o un gran emprendimiento.
        Garantizo atención personalizada, resultados duraderos y acabados impecables que superen las expectativas de mis clientes en Buenos Aires y el AMBA.
      </p>

      {/* Foto y QR en recuadro más pequeño */}
      <div className="relative mt-8 flex flex-col items-center z-10">

        {/* Contenedor del contenido más compacto */}
        <div className="relative z-20 flex flex-col items-center bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg text-center w-full max-w-md">

          {/* Foto */}
          <img
            src="/acerca.jpg"
            alt="Emanuel Gauna - Yesero, Pintor y Albañil"
            className="w-40 h-40 rounded-full object-cover shadow-md mb-4"
            loading="lazy"
          />

          {/* QR code */}
          <div className="p-3 bg-gray-100 rounded-xl mb-3">
            <QRCodeCanvas
              value="https://yeseria-web.vercel.app"
              size={160}
              bgColor="#ffffff"
              fgColor="#000000"
              level="H"
              includeMargin={true}
            />
          </div>

          <p className="text-gray-600 text-center max-w-xs text-sm">
            Escaneá este código QR con tu celular y accedé directamente a mi página web. ¡Compartilo con tus amigos!
          </p>
        </div>
      </div>
    </section>
  );
}
