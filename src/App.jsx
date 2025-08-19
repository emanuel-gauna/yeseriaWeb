import React from "react";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Home />
      <Gallery />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
