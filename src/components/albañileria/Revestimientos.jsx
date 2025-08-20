// src/components/albañileria/Revestimientos.jsx
import React from "react";
import StickyButtons from "../StickyButtons";

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
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Revestimientos y Pisos
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Colocación de cerámicas, pisos de microcemento, revoques y revestimientos exteriores.  
        Terminaciones profesionales y duraderas para cada espacio.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Revestimientos ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
      <StickyButtons />
    </section>
  );
}
