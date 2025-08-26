// src/components/Navbar.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const toggleSubmenu = (section) =>
    setOpenSubmenu(openSubmenu === section ? null : section);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  const menuItems = [
    {
      label: "Yesería",
      path: null,
      sub: [
        { label: "Cielorrasos", path: "/cielorrasos" },
        { label: "Paredes", path: "/paredes" },
        { label: "Molduras", path: "/molduras" },
      ],
    },
    {
      label: "Albañilería",
      path: null,
      sub: [
        { label: "Mampostería", path: "/mamposteria" },
        { label: "Microcemento", path: "/microcemento" },
        { label: "Revestimientos", path: "/revestimientos" },
      ],
    },
    {
      label: "Pintura",
      path: null,
      sub: [
        { label: "Interior", path: "/pintura-interior" },
        { label: "Exterior", path: "/pintura-exterior" },
        { label: "Refacciones", path: "/pintura-refacciones" },
      ],
    },
    { label: "Acerca de Nosotros", path: "/acerca-de-nosotros", sub: [] },
    { label: "Contacto", path: null, action: scrollToContact, sub: [] },
  ];

  return (
    <nav className="bg-blue-100 p-4 sticky top-0 z-50 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Inicio */}
        <div className="text-xl font-bold text-blue-700">
          <Link to="/">Inicio</Link>
        </div>

        {/* Botón móvil */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            aria-label="Abrir menú"
            className="text-blue-700 focus:outline-none text-2xl"
          >
            ☰
          </button>
        </div>

        {/* Menu */}
        <ul
          className={`md:flex md:items-center md:gap-4 absolute md:static bg-blue-100 w-full md:w-auto left-0 md:left-auto transition-all duration-300 ${
            isOpen ? "top-16" : "top-[-500px]"
          }`}
        >
          {menuItems.map((item, idx) => {
            const isActive = item.path && location.pathname === item.path;
            return (
              <li
                key={idx}
                className="relative md:mx-2 border-b md:border-none group"
              >
                {item.sub.length > 0 ? (
                  <>
                    <button
                      className="w-full text-left cursor-pointer px-4 py-2 hover:bg-blue-200 rounded flex justify-between items-center"
                      onClick={() => toggleSubmenu(item.label)}
                      aria-expanded={openSubmenu === item.label}
                    >
                      {item.label} ▾
                    </button>
                    <ul className="hidden md:absolute md:top-full md:left-0 md:bg-blue-100 md:shadow-md md:rounded md:group-hover:block">
                      {item.sub.map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className="block px-4 py-2 hover:bg-blue-200 rounded"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    {openSubmenu === item.label && (
                      <ul className="md:hidden bg-blue-100 w-full shadow-md rounded">
                        {item.sub.map((sub, i) => (
                          <li key={i}>
                            <Link
                              to={sub.path}
                              className="block px-6 py-2 hover:bg-blue-200 rounded"
                              onClick={() => setIsOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : item.action ? (
                  <button
                    onClick={item.action}
                    className="block w-full text-left px-4 py-2 hover:bg-blue-300 rounded md:rounded"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 hover:bg-blue-200 rounded md:rounded ${
                      isActive ? "text-blue-900 font-semibold" : ""
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
