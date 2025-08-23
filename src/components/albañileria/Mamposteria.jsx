// src/components/albañileria/Mamposteria.jsx
import React from "react";
import StickyButtons from "../StickyButtons";
import FondoLogo from "../FondoLogo";
import Footer from "../Footer";

export default function Mamposteria() {
  const images = [
    "/albaImg/mamposteria1.jpg",
    "/albaImg/mamposteria2.jpg",
    "/albaImg/mamposteria3.jpg",
    "/albaImg/mamposteria4.jpg",
    "/albaImg/mamposteria5.jpg",
    "/albaImg/mamposteria6.jpg",
  ];

  return (
    <section className="relative py-12 px-6 bg-gray-100 min-h-screen">
      {/* Fondo detrás de las imágenes */}
      <FondoLogo opacity={10} size="180px" />

      {/* Título principal */}
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center relative z-10">
        Mampostería Profesional
      </h2>

      {/* Descripción mejorada */}
      <p className="text-gray-700 text-center mb-8 max-w-3xl mx-auto relative z-10">
        Nos especializamos en la <strong>construcción y refacción de muros, tabiques y paredes</strong>, tanto estructurales como divisorias. 
        Realizamos trabajos con <strong>ladrillos, bloques y materiales mixtos</strong> garantizando seguridad, durabilidad y acabados de alta calidad. 
        Más de 15 años de experiencia en proyectos residenciales, comerciales y refacciones en Buenos Aires y AMBA.
      </p>

      {/* Grilla de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Mampostería ${idx + 1}`}
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
