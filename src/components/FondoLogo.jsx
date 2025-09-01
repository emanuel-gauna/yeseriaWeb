// src/components/FondoLogo.jsx
import React from "react";

export default function FondoLogo({ opacity = 15, size = "180px", darkMode }) {
  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-500"
      style={{
        backgroundImage: darkMode
          ? "linear-gradient(135deg, #0a1e3a 0%, #1b3b70 50%, #0a1e3a 100%)"
          : "url('/logo.png')",
        backgroundRepeat: darkMode ? "repeat" : "repeat",
        backgroundSize: size,
        backgroundColor: darkMode ? "#0a1e3a" : "transparent",
        opacity: opacity / 50,
        zIndex: 0,
      }}
    />
  );
}
