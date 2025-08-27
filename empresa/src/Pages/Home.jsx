import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  // Partículas simples con canvas
  useEffect(() => {
    const canvas = document.getElementById('particles');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5,
        d: Math.random() * 0.5 + 0.05
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      stars.forEach(star => {
        ctx.globalAlpha = star.d;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      update();
    };

    let angle = 0;
    const update = () => {
      angle += 0.01;
      stars.forEach(star => {
        star.y += Math.sin(angle) * 0.2;
        star.x += Math.cos(angle) * 0.2;
        if (star.y > canvas.height) star.y = 0;
        if (star.x > canvas.width) star.x = 0;
      });
      requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="relative z-10">

      {/* ---------------- Fondo partículas ---------------- */}
      <canvas id="particles" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-[#1f1f2e] to-[#0d0d1a]"></div>

      {/* ---------------- Hero / Encabezado ---------------- */}
      <section className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text animate-gradient">
          Transformamos ideas en experiencias digitales
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mt-6 mb-8 hover:text-white transition-colors duration-500">
          Diseño y desarrollo web que impulsa tu negocio al siguiente nivel
        </p>
        <Link
          to="/Contacto"
          className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-110 transition-all duration-500 shadow-lg hover:shadow-2xl"
        >
          Contáctanos
        </Link>
      </section>

      {/* ---------------- Servicios ---------------- */}
      <section className="py-20 bg-gray-900/30">
        <h2 className="text-4xl font-bold text-center text-white mb-12">Nuestros Servicios</h2>
        <div className="grid gap-8 px-8 justify-items-center
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="w-full max-w-sm bg-gray-800/70 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <div className="text-yellow-400 text-5xl mb-4 animate-bounce">💻</div>
            <h3 className="text-xl font-semibold text-white mb-2 hover:text-yellow-300 transition-colors">Desarrollo Web Frontend</h3>
            <p className="text-gray-300">Diseño moderno y funcional usando tecnologías actuales.</p>
          </div>

          <div className="w-full max-w-sm bg-gray-800/70 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <div className="text-yellow-400 text-5xl mb-4 animate-bounce">🖥️</div>
            <h3 className="text-xl font-semibold text-white mb-2 hover:text-yellow-300 transition-colors">Desarrollo Backend</h3>
            <p className="text-gray-300">Sistemas robustos y bases de datos seguras y escalables.</p>
          </div>

          <div className="w-full max-w-sm bg-gray-800/70 rounded-xl p-6 text-center shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <div className="text-yellow-400 text-5xl mb-4 animate-bounce">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2 hover:text-yellow-300 transition-colors">Diseño UI/UX</h3>
            <p className="text-gray-300">Experiencias de usuario atractivas y fáciles de usar.</p>
          </div>
        </div>
      </section>

      {/* ---------------- Beneficios ---------------- */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">Por qué elegir CREAVIX</h2>
        <div className="grid gap-8 max-w-6xl mx-auto
                        grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">🚀 Entregas rápidas</h3>
            <p className="text-gray-300">Cumplimos con los plazos acordados sin sacrificar calidad.</p>
          </div>
          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">💡 Soluciones innovadoras</h3>
            <p className="text-gray-300">Siempre buscamos mejorar y optimizar tus procesos digitales.</p>
          </div>
          <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg hover:shadow-2xl transform hover:scale-105 transition duration-500">
            <h3 className="text-xl font-semibold text-yellow-400 mb-2 hover:text-yellow-300 transition-colors">🛡️ Seguridad garantizada</h3>
            <p className="text-gray-300">Tus sistemas y datos estarán protegidos con las mejores prácticas.</p>
          </div>
        </div>
      </section>

      {/* ---------------- CTA final ---------------- */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-bold text-white mb-6 hover:text-yellow-400 transition-colors">¿Listo para impulsar tu negocio?</h2>
        <Link
          to="/Contacto"
          className="px-8 py-4 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-110 transition duration-500 shadow-lg hover:shadow-2xl"
        >
          Contáctanos Ahora
        </Link>
      </section>

    </div>
  );
};

export default Home;
