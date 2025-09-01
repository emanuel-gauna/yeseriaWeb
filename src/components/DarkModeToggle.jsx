import React, { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="flex items-center gap-2 px-4 py-2 rounded-xl border border-gray-300 dark:border-gray-600 
                 bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 
                 shadow-md hover:scale-105 transition"
    >
      {darkMode ? <Sun size={20} /> : <Moon size={20} />}
      <span>{darkMode ? "Claro" : "Oscuro"}</span>
      <div
        className={`w-10 h-5 flex items-center rounded-full p-1 transition ${
          darkMode ? "bg-yellow-400" : "bg-gray-400"
        }`}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform transition ${
            darkMode ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </div>
    </button>
  );
}
