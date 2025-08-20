// src/components/albañileria/Mamposteria.jsx
import React from "react";
import StickyButtons from "../StickyButtons";

export default function Mamposteria() {
  const images = [
    "/albaImg/mamposteria1.jpg",
    "/albaImg/mamposteria2.jpg",
    "/albaImg/mamposteria3.jpg"
  ];

  return (
    <section className="py-12 px-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-700 mb-4 text-center">
        Mampostería
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Construcción y refacción de muros, tabiques, paredes estructurales o divisorias.
        Trabajos con ladrillos y bloques de manera profesional y segura.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
    </section>
  );
}
