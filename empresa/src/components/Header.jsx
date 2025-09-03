import { NavLink, useLocation } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  // Detecta scroll para cambiar color del header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  // Scroll al inicio cada vez que cambie la ruta
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location]);

  return (
    <>
      <header className="relative z-50">
        {/* ---------------- Navbar Desktop ---------------- */}
        <nav
          className={`hidden md:flex justify-between items-center px-8 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled
              ? "bg-[#0f0f1f]/80 backdrop-blur-md shadow-lg"
              : "bg-[#0f0f1f]"
          } text-white`}
        >
          <div className="flex items-center space-x-2">
            <img
              src="/creavixgif.gif"
              alt="Logo Creavix"
              className="h-10 w-auto md:h-12"
            />
            <span className="text-2xl md:text-2xl font-bold gradient-text">
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
        <nav
          className={`md:hidden flex justify-between items-center px-4 py-3 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
            scrolled
              ? "bg-[#0f0f1f]/80 backdrop-blur-md shadow-lg"
              : "bg-[#0f0f1f]"
          } text-white`}
        >
          <button
            id="menu-button"
            className="text-white focus:outline-none z-50"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          <div className="text-xl font-bold absolute left-1/2 transform -translate-x-1/2 z-50 gradient-text">
            CREAVIX
          </div>
        </nav>

        {/* Overlay */}
        {menuOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
        )}

        {/* Menú lateral móvil */}
        <div
          ref={menuRef}
          className={`fixed top-0 left-0 h-full w-64 bg-[#0f0f1f] shadow-lg transform ${
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

      {/* Espaciador para que el contenido no se esconda debajo del header */}
      <div className="h-16 md:h-20" />
    </>
  );
}
