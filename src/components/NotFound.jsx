// src/pages/NotFound.jsx
import React from "react";
import { Helmet } from "react-helmet";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
      <Helmet>
        <title>404 - Página no encontrada</title>
      </Helmet>
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg">Lo sentimos, la página que buscas no existe.</p>
    </div>
  );
}
