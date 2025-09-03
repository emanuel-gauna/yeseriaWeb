import React from "react";

export default function FondoLogo() {
  const logoStyle = {
    backgroundImage: "url('/logo.png')",
    backgroundRepeat: "repeat",
    backgroundSize: "180px",
    backgroundColor: "transparent",
    opacity: 0.15,
    zIndex: 0,
  };

  return (
    <div
      className="fixed inset-0 pointer-events-none transition-colors duration-500"
      style={logoStyle}
    />
  );
}