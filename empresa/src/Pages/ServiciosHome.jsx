// components/ServiciosHome.jsx
import React from "react";
import { Link } from "react-router-dom";

const serviciosHome = [
  { icon: "💻", title: "Creación de Páginas Web" },
  { icon: "🛒", title: "Tiendas Online" },
  { icon: "📝", title: "Menús Digitales" },
  { icon: "🎨", title: "Diseño UI/UX" },
];

const ServiciosHome = () => {
  return (
    <section className="py-20 px-6 text-center relative">
      <h2 className="text-4xl font-title mb-12 text-gradient animate-glow">
        Nuestros Servicios
      </h2>

      <div className="grid gap-8 max-w-4xl mx-auto grid-cols-2 sm:grid-cols-4">
        {serviciosHome.map((item, i) => (
          <div
            key={i}
            className="bg-blue-900/40 rounded-xl p-6 shadow-lg
                       transform transition duration-500 hover:scale-105 cursor-pointer"
          >
            <div className="text-4xl mb-2">{item.icon}</div>
            <h3 className="text-lg font-title text-cyan-400">{item.title}</h3>
          </div>
        ))}
      </div>

      <p className="mt-8 text-blue-200 font-body text-lg">
        Conoce todos nuestros servicios de <strong>CREAVIX SFC</strong> en nuestro{" "}
        <Link to="/Servicios" className="text-cyan-400 underline hover:text-cyan-300">
          apartado de servicios
        </Link>.
      </p>
    </section>
  );
};

export default ServiciosHome;
