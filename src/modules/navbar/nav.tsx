import { useState } from "react";

import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpeg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white text-blue-600 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold flex items-center space-x-2"
          >
            <img
              src={logo}
              alt="Suramérica Cargo"
              className="h-[10vh] w-auto"
            />
          </a>
          <nav className="hidden md:flex space-x-8">
            {[
              "Quiénes Somos",
              "Servicios",
              "Calculadora",
              "Seguimiento",
              "Oficinas",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                {item}
              </a>
            ))}
          </nav>
          <button className="hidden md:block bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
            Contacto
          </button>
          <button
            className="md:hidden text-blue-500"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col items-center py-4">
            {[
              "Quiénes Somos",
              "Servicios",
              "Calculadora",
              "Seguimiento",
              "Oficinas",
            ].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="py-2 text-blue-600 hover:text-blue-800 transition-colors"
                onClick={toggleMenu}
              >
                {item}
              </a>
            ))}
            <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors">
              Contacto
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
