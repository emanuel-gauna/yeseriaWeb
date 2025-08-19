// src/components/ContactForm.jsx
import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xblkenrg");

  if (state.succeeded) {
    return (
      <p className="text-green-600 font-semibold">
        ¡Gracias por tu mensaje! Te responderé lo antes posible.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label htmlFor="name" className="font-semibold">
        Nombre
      </label>
      <input
        id="name"
        type="text"
        name="name"
        required
        placeholder="Tu nombre"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Name" field="name" errors={state.errors} />

      <label htmlFor="email" className="font-semibold">
        Email
      </label>
      <input
        id="email"
        type="email"
        name="email"
        required
        placeholder="Tu email"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <label htmlFor="phone" className="font-semibold">
        Teléfono (opcional)
      </label>
      <input
        id="phone"
        type="text"
        name="phone"
        placeholder="Ej: 11 1234-5678"
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <label htmlFor="message" className="font-semibold">
        Mensaje
      </label>
      <textarea
        id="message"
        name="message"
        required
        placeholder="Contanos sobre tu proyecto, necesidades o consultas..."
        className="border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <button
        type="submit"
        disabled={state.submitting}
        className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
      >
        Enviar
      </button>
    </form>
  );
}
