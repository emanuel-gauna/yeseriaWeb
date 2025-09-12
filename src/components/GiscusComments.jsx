"use client";
import React, { useState } from "react";
import Giscus from "@giscus/react";

export default function GiscusComments() {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="mt-12 w-full max-w-6xl mx-auto relative z-20 p-6 bg-white/95 rounded-3xl shadow-2xl transition-all duration-300">
      <h2 className="text-2xl md:text-3xl font-extrabold text-gray-800 text-center mb-6">
        ¡Comparte tu experiencia con nuestros trabajos de yesería!
      </h2>

      {/* Vista previa del último comentario */}
      {!expanded && (
        <div className="relative h-40 overflow-hidden rounded-2xl shadow-inner bg-white/90 mb-4">
          {/* Aquí Giscus mostrará los últimos comentarios */}
          <Giscus
            id="preview-comments"
            repo="emanuel-gauna/yeseriaWeb"
            repoId="R_kgDOPgvA8w"
            category="Show and tell"
            categoryId="DIC_kwDOPgvA884CvVEQ"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="light"
            lang="es"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white/95 to-transparent pointer-events-none"></div>
        </div>
      )}

      {/* Botón para expandir/plegar */}
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          {expanded ? "Cerrar comentarios ✕" : "Agrega tu comentario"}
        </button>
      </div>

      {/* Sección expandida de Giscus */}
      {expanded && (
        <div className="h-[500px] overflow-y-auto p-4 bg-white/90 rounded-2xl shadow-inner transition-all duration-300">
          <Giscus
            id="full-comments"
            repo="emanuel-gauna/yeseriaWeb"
            repoId="R_kgDOPgvA8w"
            category="Show and tell"
            categoryId="DIC_kwDOPgvA884CvVEQ"
            mapping="pathname"
            strict="0"
            reactionsEnabled="1"
            emitMetadata="0"
            inputPosition="bottom"
            theme="light"
            lang="es"
            loading="lazy"
          />
        </div>
      )}
    </div>
  );
}
