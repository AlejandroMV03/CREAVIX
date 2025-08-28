// Header.jsx
import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !event.target.closest("#menu-button")
      ) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <>
      <header className="relative z-50">
        {/* ---------------- Navbar Desktop ---------------- */}
        <nav className="hidden md:flex justify-between items-center px-8 py-4 bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
          {/* CREAVIX con animación y gradiente premium */}
          <div className="flex items-center space-x-2">
  <img
    src="/creavixxx.png"
    alt="Logo Creavix"
    className="h-10 w-auto md:h-12" // tamaño responsivo
  />
  <span className="text-2xl font-bold gradient-text text-shadow animate-fade-up shine-effect">
    CREAVIX 
  </span>
</div>
          <ul className="flex space-x-8 text-lg">
            <li>
              <NavLink
                to="/Inicio"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Somos"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                ¿Quiénes somos?
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/Contacto"
                className={({ isActive }) =>
                  isActive ? "text-yellow-300" : "hover:text-yellow-300"
                }
              >
                Contacto
              </NavLink>
            </li>
            
          </ul>
        </nav>

        {/* ---------------- Navbar Móvil ---------------- */}
        <nav className="md:hidden flex justify-between items-center px-4 py-3 bg-gray-900 text-white shadow-md fixed top-0 left-0 w-full z-50">
          <button
            id="menu-button"
            className="text-white focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Logo centrado con animación */}
          <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2 z-50 gradient-text text-shadow animate-fade-up shine-effect">
            CREAVIX
          </div>
        </nav>

        {/* ---------------- Overlay ---------------- */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* ---------------- Menú lateral móvil ---------------- */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-gray-900 shadow-lg transform ${
            menuOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300 ease-in-out md:hidden z-50`}
        >
          <div className="flex flex-col p-6 space-y-6 mt-16">
            <NavLink
              to="/Inicio"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-300 text-xl"
                  : "block text-white text-xl hover:text-yellow-300"
              }
            >
              Inicio
            </NavLink>
            <NavLink
              to="/Somos"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-300 text-xl"
                  : "block text-white text-xl hover:text-yellow-300"
              }
            >
              ¿Quiénes somos?
            </NavLink>
            <NavLink
              to="/Contacto"
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-yellow-300 text-xl"
                  : "block text-white text-xl hover:text-yellow-300"
              }
            >
              Contacto
            </NavLink>
            
          </div>
        </div>
      </header>

      {/* ---------------- Espacio para que el contenido no quede debajo del navbar ---------------- */}
      <div className="h-16 md:h-20" />

      {/* ---------------- Estilos de animación ---------------- */}
      <style>{`
        /* Gradiente animado premium */
        @keyframes gradient-move {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .gradient-text {
          background: linear-gradient(90deg, #00aaff, #ffffff, #ffd700, #ff7f50);
          background-size: 300% 300%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradient-move 6s ease infinite;
        }

        /* Sombra ligera para más profundidad */
        .text-shadow {
          text-shadow: 0 2px 8px rgba(0,0,0,0.35);
        }

        /* Fade-in con desplazamiento */
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(15px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        /* Shine / parpadeo sutil */
        @keyframes shine {
          0% { background-position: -100% 0; }
          50% { background-position: 200% 0; }
          100% { background-position: -100% 0; }
        }
        .shine-effect {
          background: linear-gradient(120deg, rgba(0, 255, 213, 0.77) 0%, rgba(0, 225, 255, 1) 50%, rgba(0, 153, 255, 1) 100%);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
