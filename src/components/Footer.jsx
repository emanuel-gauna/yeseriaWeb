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
        <div className="flex gap-6 text-3xl">
          <a
            href="https://www.facebook.com/emanuel.gauna"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-200 transition-colors"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/lemagauna/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-400 hover:text-pink-200 transition-colors"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/5491164371277"
            target="_blank"
            rel="noopener noreferrer"
            className="text-green-400 hover:text-green-200 transition-colors"
          >
            <FaWhatsapp />
          </a>
        </div>

      </div>
    </footer>
  );
}
