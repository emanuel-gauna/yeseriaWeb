import React from "react";
import { Helmet } from "react-helmet";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";

export default function Molduras() {
  const images = [
    "/yesoImg/moldura1.jpg",
    "/yesoImg/moldura7.jpg",
    "/yesoImg/moldura3.jpg",
    "/yesoImg/moldura9.jpg",
    "/yesoImg/moldura5.jpg",
    "/yesoImg/moldura6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      
      {/* SEO */}
      <Helmet>
        <title>Buñas y Molduras | Yesería Profesional - Emanuel Gauna</title>
        
        <meta
          name="description"
          content="Instalación profesional de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA. Contacto: 11 6437-1277."
        />
        <meta name="keywords" content="molduras, buñas, yesería, interiores, decoración, refacciones, Buenos Aires, AMBA" />
        <meta property="og:title" content="Buñas y Molduras Profesionales | Emanuel Gauna" />
        <meta property="og:description" content="Instalación de buñas y molduras en yeso. Servicio de yesería en Buenos Aires y AMBA." />
        <meta property="og:image" content="/yesoImg/moldura1.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yeseria-web.vercel.app/molduras" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* Fondo */}
      <FondoLogo opacity={10} size="180px" />

      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center relative z-10">
        Buñas y Molduras
      </h2>
      <p className="text-center text-gray-700 mb-8 max-w-3xl mx-auto relative z-10">
  Nos especializamos en la <strong>realización de buñas y molduras de yeso</strong>, tanto para interiores como exteriores. Ofrecemos acabados detallados, precisos y duraderos, adaptados a cada proyecto, asegurando un trabajo profesional que realza la estética de hogares, oficinas y espacios comerciales en Buenos Aires y el AMBA.
</p>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Moldura ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>

      <StickyButtons />
      <Footer />
    </section>
  );
}
