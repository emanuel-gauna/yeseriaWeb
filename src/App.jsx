import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import StickyButtons from "./components/StickyButtons";

// Importamos los componentes de yesería (revisar mayúsculas)
import Cielorrasos from "./components/Yeseria/Cielorrasos";
import Paredes from "./components/Yeseria/Paredes";
import Molduras from "./components/Yeseria/Molduras";
//importamos componentes de albañileria
import Microcemento from "./components/albañileria/Microcemento";
import Mamposteria from "./components/albañileria/Mamposteria";
import Revestimientos from "./components/albañileria/Revestimientos";
// Pintura
import Interior from "./components/pintura/Interior";
import Exterior from "./components/pintura/Exterior";
import Refacciones from "./components/pintura/Refacciones";


function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <Gallery />
              <ContactSection />
              <Footer />
              <StickyButtons />
            </>
          }
        />
        {/* Rutas Yesería */}
        <Route path="/cielorrasos" element={<Cielorrasos />} />
        <Route path="/paredes" element={<Paredes />} />
        <Route path="/molduras" element={<Molduras />} />

        {/* Rutas Albañilería */}
        <Route path="/mamposteria" element={<Mamposteria />} />
        <Route path="/microcemento" element={<Microcemento />} />
        <Route path="/revestimientos" element={<Revestimientos />} />

        {/* Rutas Pintura */}
        <Route path="/pintura-interior" element={<Interior />} />
        <Route path="/pintura-exterior" element={<Exterior />} />
        <Route path="/pintura-refacciones" element={<Refacciones />} />

      </Routes>
    </Router>
  );
}

export default App;
