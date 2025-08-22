import React from "react";

export default function SponsorBanner() {
  return (
    <div className="bg-gray-100 py-6 shadow-inner">
      <h3 className="text-center text-lg font-semibold text-gray-700 mb-4">
        Marcas Auspiciantes
      </h3>
      <p className="text-center text-gray-700 max-w-3xl mx-auto">
        🚀 Este proyecto está abierto a <span className="font-semibold">colaboraciones y auspicios</span>. 
        Si sos una marca de materiales como <span className="text-yellow-300">Durlock</span>,{" "}
        <span className="text-blue-200">Saint-Gobain</span>, <span className="text-green-300">Mapei</span>,{" "}
        <span className="text-gray-400">Loma Negra</span>, <span className="text-pink-300">Knauf</span>,{" "}
        <span className="text-red-400">Sinteplast</span>, <span className="text-orange-300">Tersuave</span>,{" "}
        <span className="text-indigo-300">Tarquini</span>, <span className="text-purple-300">Sika</span>,{" "}
        <span className="text-indigo-300">Yeso Tuyango</span>, <span className="text-purple-300">Yeso Alpress</span>,{" "}
        <span className="text-teal-300">Weber</span> o <span className="text-gray-500">Holcim</span>, ¡me encantaría que te sumes! 💪
      </p>
    </div>
  );
}

