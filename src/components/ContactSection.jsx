import React from "react";
import ContactForm from "./ContactForm";

export default function ContactSection() {
  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">

        {/* Formulario */}
        <div className="md:w-2/3">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">
            ¡Contáctame!
          </h2>
          <p className="mb-6 text-gray-700">
            Completa el formulario y te responderé lo antes posible.
          </p>
          <ContactForm />
        </div>

        {/* Redes Sociales */}
        <div className="md:w-1/3 flex flex-col items-center md:items-start">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">
            Redes Sociales
          </h3>
          <p className="mb-2 text-gray-700">Sígueme o envíame un mensaje:</p>
          <ul className="flex flex-col gap-3 text-gray-800">
            <li>
              <a href="https://www.facebook.com/emanuel.gauna" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">
                Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/lemagauna/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
                Instagram
              </a>
            </li>
            <li>
              <a href="https://wa.me/5491164371277" target="_blank" rel="noopener noreferrer" className="hover:text-green-500">
                WhatsApp
              </a>
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}
