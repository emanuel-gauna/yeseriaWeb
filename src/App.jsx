// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";

// Yesería
import Cielorrasos from "./components/Yeseria/Cielorrasos";
import Paredes from "./components/Yeseria/Paredes";
import Molduras from "./components/Yeseria/Molduras";

// Albañilería
import Microcemento from "./components/albañileria/Microcemento";
import Mamposteria from "./components/albañileria/Mamposteria";
import Revestimientos from "./components/albañileria/Revestimientos";

// Pintura
import Interior from "./components/pintura/Interior";
import Exterior from "./components/pintura/Exterior";
import Refacciones from "./components/pintura/Refacciones";

// Fondo con logo
import FondoLogo from "./components/FondoLogo";

function App() {
  return (
    <Router>
      <Routes>
        {/* Página principal */}
        <Route
          path="/"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" /> {/* Fondo detrás del body */}
              <Home />
              <Gallery />
              <ContactSection /> {/* z-20 por dentro */}
              <Footer />
              <StickyButtons />
            </div>
          }
        />

        {/* Yesería */}
        <Route
          path="/cielorrasos"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Cielorrasos />
            </div>
          }
        />
        <Route
          path="/paredes"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Paredes />
            </div>
          }
        />
        <Route
          path="/molduras"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Molduras />
            </div>
          }
        />

        {/* Albañilería */}
        <Route
          path="/mamposteria"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Mamposteria />
            </div>
          }
        />
        <Route
          path="/microcemento"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Microcemento />
            </div>
          }
        />
        <Route
          path="/revestimientos"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Revestimientos />
            </div>
          }
        />

        {/* Pintura */}
        <Route
          path="/pintura-interior"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Interior />
            </div>
          }
        />
        <Route
          path="/pintura-exterior"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Exterior />
            </div>
          }
        />
        <Route
          path="/pintura-refacciones"
          element={
            <div className="relative">
              <FondoLogo opacity={10} size="180px" />
              <Refacciones />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
