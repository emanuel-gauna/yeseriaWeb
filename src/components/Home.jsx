// src/components/Home.jsx
import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "react-router-dom";
import FondoLogo from "./FondoLogo";
import BigProjectsBanner from "./BigProyectBanner";
import VideosSection from "./videos/VideoSection";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Revisar si venimos con intención de scroll
    if (location.state && location.state.scrollTo === "contact-section") {
      const section = document.getElementById("contact-section");
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
      // Limpiar el state para que no haga scroll de nuevo al navegar
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center p-6 bg-gray-50">

      {/* Fondo detrás del contenido */}
      <FondoLogo opacity={10} size="180px" />

      {/* SEO */}
      <Helmet>
        <title>Yesero, Pintor, Albañil y Microcemento | Emanuel Gauna - Buenos Aires</title>
        <meta
          name="description"
          content="Ofrecemos servicios de yesería, pintura, albañilería y microcemento en Buenos Aires y AMBA. Refacciones, remodelaciones, pisos y  revestimientos. Contacto: 11 6437-1277."
        />
        <meta
          name="keywords"
          content="yesero, pintor, albañil, microcemento, yesería, albañilería, remodelaciones, refacciones, cielorrasos, buñas, molduras, revoques, pintura, pisos, cerámicas, revestimientos plásticos, Buenos Aires, AMBA"
        />

        {/* Open Graph para redes sociales */}
        <meta property="og:title" content="Yesero, Pintor y Albañil | Emanuel Gauna - Buenos Aires" />
        <meta property="og:description" content="Servicios de yesería, pintura, albañilería y microcemento. Refacciones y remodelaciones profesionales en Buenos Aires y AMBA. Contacto: 11 6437-1277." />
        <meta property="og:image" content="/logoyeso.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/" />
      </Helmet>

      {/* Header principal */}
      <header className="text-center mb-12 relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 mb-4">
          Yesería e Interiores Gauna Hnos.
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
        <h2 className="text-2xl md:text-3xl font-bold text-blue-700 mb-6">
          Servicios de Yesería, Albañilería y Pintura
        </h2>
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
      <VideosSection />

    </section>
  );
}
