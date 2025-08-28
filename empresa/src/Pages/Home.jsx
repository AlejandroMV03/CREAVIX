// Pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ParticlesBackground from '../components/ParticlesBackground';

const Home = () => {
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
    <div className="relative z-10 min-h-screen">

      {/* Fondo partículas */}
      <ParticlesBackground />
      <canvas id="particles" className="fixed top-0 left-0 w-full h-full -z-10"></canvas>
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-[#1f1f2e] to-[#0d0d1a]"></div>

      {/* Hero */}
      <section className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-title drop-shadow-lg text-gradient animate-glow opacity-0 animate-fadeUp">
          Transformamos ideas en experiencias digitales
        </h1>
        <p className="text-xl md:text-2xl mt-6 mb-8 font-body text-gradient animate-glow opacity-0 animate-fadeUp delay-200">
          Diseño y desarrollo web que impulsa tu negocio al siguiente nivel
        </p>
        <Link
          to="/Contacto"
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
        >
          Contáctanos
        </Link>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 px-6 text-center bg-blue-950/30">
        <h2 className="text-4xl font-title mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Quiénes somos
        </h2>
        <p className="max-w-3xl mx-auto text-blue-200 text-lg leading-relaxed opacity-0 animate-fadeUp delay-200 font-body">
          En <strong>CREAVIX SFC</strong> somos un equipo creativo, especializado en desarrollo web, diseño UI/UX y soluciones digitales integrales. 
          Nos apasiona transformar ideas en experiencias interactivas y memorables que conecten con tus clientes y potencien tu negocio.
        </p>
      </section>

      {/* Servicios */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-title text-center mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Nuestros Servicios
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: '💻', title: 'Frontend Web', text: 'Diseño moderno y funcional usando tecnologías actuales.' },
            { icon: '🖥️', title: 'Backend', text: 'Sistemas robustos y bases de datos seguras y escalables.' },
            { icon: '🎨', title: 'UI/UX', text: 'Experiencias atractivas y fáciles de usar para tus usuarios.' }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-blue-900/40 rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-cyan-400/50 opacity-0 animate-fadeUp delay-${200 + i*100}`}
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-xl font-title mb-2 text-cyan-400">{item.title}</h3>
              <p className="text-blue-200 font-body">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Nuestro proceso */}
      <section className="py-20 px-6 text-center bg-blue-950/20">
        <h2 className="text-4xl font-title mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Nuestro proceso
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-3">
          {[
            { step: '1', title: 'Planificación', text: 'Definimos objetivos, requerimientos y alcance del proyecto.' },
            { step: '2', title: 'Diseño & Desarrollo', text: 'Creamos soluciones atractivas, funcionales y escalables.' },
            { step: '3', title: 'Entrega & Soporte', text: 'Implementamos y acompañamos al cliente en cada etapa.' }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-blue-900/40 rounded-2xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-cyan-400/50 opacity-0 animate-fadeUp delay-${200 + i*100}`}
            >
              <div className="text-3xl mb-4 font-title text-cyan-400">{item.step}</div>
              <h3 className="text-xl font-title mb-2 text-white">{item.title}</h3>
              <p className="text-blue-200 font-body">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA final */}
      <section className="py-20 text-center">
        <h2 className="text-4xl font-title mb-6 text-gradient animate-glow opacity-0 animate-fadeUp">
          ¿Listo para impulsar tu negocio?
        </h2>
        <Link
          to="/Contacto"
          className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition duration-500"
        >
          Contáctanos Ahora
        </Link>
      </section>

      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
        `}
      </style>
    </div>
  );
};

export default Home;
