// src/components/pintura/Interior.jsx
import React from "react";
import StickyButtons from "../StickyButtons";

export default function Interior() {
  const images = [
    "/pinturaImg/interior1.jpg",
    "/pinturaImg/interior2.jpg",
    "/pinturaImg/interior3.jpg",
    "/pinturaImg/interior4.jpg",
    "/pinturaImg/interior5.jpg",
    "/pinturaImg/interior6.jpg",
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Pintura Interior
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
        Realizamos pintura de paredes, cielorrasos y detalles internos de tu hogar con acabado profesional y duradero.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Interior ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
      <StickyButtons />
    </section>
  );
}
