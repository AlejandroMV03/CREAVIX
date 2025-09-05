// Pages/Servicios.jsx
import React from "react";
import { motion } from "framer-motion";

const servicios = [
  { icon: "💻", title: "Creación de Páginas Web", text: "Diseño moderno y funcional usando tecnologías actuales, sitios responsivos para todo tipo de dispositivos." },
  { icon: "🛒", title: "Tiendas Online (E-commerce)", text: "Tiendas en línea con carrito de compras, gestión de productos, pagos seguros y diseño atractivo." },
  { icon: "📝", title: "Menús Digitales o Catálogos", text: "Sitios para mostrar menús de restaurantes o productos, con experiencia amigable y visualmente atractiva." },
  { icon: "🎨", title: "Diseño UI/UX", text: "Experiencias interactivas y atractivas para tus usuarios, mejora de navegación y prototipos profesionales." },
  { icon: "🖥️", title: "Backend y Sistemas", text: "Bases de datos seguras y escalables, integración de sistemas, APIs y conexión entre aplicaciones web." },
  { icon: "🔍", title: "SEO y Optimización", text: "Posicionamiento en Google, optimización de velocidad y rendimiento, estrategias para aparecer en búsquedas relevantes." },
  { icon: "⚙️", title: "Mantenimiento y Actualizaciones", text: "Corrección de errores, mejoras continuas, actualización de contenido, productos y soporte permanente." },
  { icon: "💡", title: "Consultoría y Soporte", text: "Asesoría sobre cómo mejorar tu presencia digital, recomendaciones de diseño y funcionalidad, capacitación básica para manejar tu web." },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" } }),
};

const Servicios = () => {
  return (
    <section className="py-20 px-6 relative">
      <h2 className="text-4xl font-title text-center mb-12 text-gradient animate-glow">
        Todos nuestros servicios
      </h2>

      <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {servicios.map((item, i) => (
          <motion.div
            key={i}
            className="bg-blue-900/40 rounded-2xl p-6 shadow-lg backdrop-blur-sm
                       hover:shadow-cyan-400/70 cursor-pointer group
                       transition-all duration-500"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            custom={i}
            whileHover={{ scale: 1.07, rotateX: 6, rotateY: -6, boxShadow: "0px 15px 30px rgba(0, 255, 255, 0.35)" }}
          >
            <motion.div
              className="text-5xl mb-4 inline-block group-hover:drop-shadow-[0_0_10px_#22d3ee]"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {item.icon}
            </motion.div>
            <h3 className="text-xl font-title mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">
              {item.title}
            </h3>
            <p className="text-blue-200 font-body leading-relaxed group-hover:text-blue-100 transition-colors">
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;
