import React from "react";
import SponsorBanner from "./SponsorBanner";

export default function Footer() {
  return (
    <>
      <SponsorBanner />
      <footer className="bg-blue-700 text-white py-6 px-4 shadow-lg">
        <div className="max-w-6xl mx-auto flex flex-col items-center">
          
          {/* Teléfono */}
          <p className="text-sm md:text-base mb-2">
            📞{" "}
            <a href="tel:+5491164371277" className="underline hover:text-gray-300">
              +54 9 11 6437-1277
            </a>
          </p>

          {/* Mensaje breve de auspicios */}
          <div className="mt-4 text-center text-sm md:text-base bg-blue-800 py-3 px-4 rounded-lg shadow-inner">
            🚀 Proyecto abierto a <span className="font-semibold">auspicios</span>. ¡Contactame para sumarte! 💪
          </div>
        </div>
      </footer>
    </>
  );
}
