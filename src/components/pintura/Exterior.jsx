// src/components/pintura/Exterior.jsx
import React from "react";
import StickyButtons from "../StickyButtons";

export default function Exterior() {
  const images = [
    "/pinturaImg/exterior1.jpg",
    "/pinturaImg/exterior2.jpg",
    "/pinturaImg/exterior3.jpg",
    "/pinturaImg/exterior4.jpg",
    "/pinturaImg/exterior5.jpg",
    "/pinturaImg/exterior6.jpg"
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-6 text-center">
        Pintura Exterior
      </h2>
      <p className="text-gray-700 mb-6 text-center max-w-2xl mx-auto">
        Pintamos fachadas, balcones y terrazas, protegiendo las superficies y logrando un acabado duradero y estético.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg">
            <img
              src={src}
              alt={`Exterior ${idx + 1}`}
              className="w-full h-64 object-cover hover:scale-105 transition-transform"
            />
          </div>
        ))}
      </div>
      <StickyButtons />
    </section>
  );
}
