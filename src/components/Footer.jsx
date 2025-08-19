import React from "react";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white py-6 px-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Contacto */}
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="text-sm md:text-base">
            📍 Calle Falsa 123, Ciudad, Argentina
          </p>
          <p className="text-sm md:text-base">
            📞 <a href="tel:+5491164371277" className="underline hover:text-gray-300">+54 9 11 6437-1277</a>
          </p>
        </div>

        {/* Redes Sociales */}
        <div className="flex flex-col sm:flex-row gap-4 text-2xl justify-center">
          <a href="https://www.facebook.com/emanuel.gauna" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/lemagauna/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-300">
            <FaInstagram />
          </a>
          <a href="https://wa.me/5491164371277" target="_blank" rel="noopener noreferrer" className="hover:text-green-300">
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
}
