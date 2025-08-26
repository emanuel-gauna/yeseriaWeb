import React from "react";

export default function FondoLogo({ opacity = 10, size = "180px" }) {
  return (
    <div
    
      className="fixed inset-0 pointer-events-none"
      style={{
        backgroundImage: "url('/logo.png')",
        backgroundRepeat: "repeat",
        backgroundSize: size,
        opacity: opacity / 100,
        zIndex: 0, // queda un poco por encima del fondo, pero detrás de las imágenes
      }}
    />
  );
}
