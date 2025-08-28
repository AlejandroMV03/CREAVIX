// Pages/Somos.jsx
import React from 'react';
import ParticlesBackground from '../components/ParticlesBackground';

const Somos = () => {
  return (
    <div className="relative z-10">
      {/* Fondo partículas */}
      <ParticlesBackground />
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-[#1f1f2e] to-[#0d0d1a]"></div>

      {/* Hero */}
      <section className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-title drop-shadow-lg text-gradient animate-glow opacity-0 animate-fadeUp">
          CREAVIX SFC
        </h1>
        <p className="text-xl md:text-2xl mt-6 mb-8 font-body text-gradient animate-glow opacity-0 animate-fadeUp delay-200">
          Transformamos ideas en experiencias sdigitales que inspiran y conectan con el mundo
        </p>
      </section>

      {/* Quiénes somos */}
      <section className="py-20 bg-blue-950/30">
        <h2 className="text-4xl font-title text-center mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          ¿Quiénes somos?
        </h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
          <div className="space-y-6 text-lg leading-relaxed text-blue-200 transform transition-all duration-700 opacity-0 animate-fadeUp font-body">
            <p className="text-gradient font-title">
              En <span className="text-gradient font-title">CreavixSFC</span> somos un equipo creativo,
              especializado en <strong>desarrollo web</strong> y <strong>diseño digital</strong>.
            </p>
            <p className="text-gradient font-title">
              Nos apasiona transformar ideas en experiencias digitales que conecten y generen resultados. 
              Ofrecemos soluciones modernas, seguras y efectivas para tu negocio.
            </p>
            <p className="text-gradient font-text">
              Nuestros servicios incluyen: <br />
              • Páginas web <br />
              • Tarjetas digitales <br />
              • Menús digitales <br />
              • Branding y diseño visual
            </p>
          </div>
          <div className="flex justify-center opacity-0 animate-fadeUp delay-200">
            <img
              src="/CREAVIXX.png"
              alt="CreavixSFC equipo"
              className="rounded-2xl shadow-lg max-h-96 object-cover transform transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-20 px-4 text-center">
        <h2 className="text-4xl font-title mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Nuestros Valores
        </h2>
        <div className="grid gap-8 max-w-6xl mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 ">
          {[
            { title: "💡 Innovación", text : "Buscamos nuevas formas de crear experiencias digitales únicas." },
            { title: "🤝 Compromiso", text: "Nos enfocamos en resultados reales y en el éxito de cada cliente." },
            { title: "🛡️ Calidad y confianza", text: "Cumplimos con altos estándares de diseño, seguridad y usabilidad." }
          ].map((item, i) => (
            <div
              key={i}
              className={`bg-blue-900/50 rounded-xl p-6 shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-cyan-400/50 opacity-0 animate-fadeUp delay-${200 + i*100}`}
            >
              <h3 className="text-xl font-title mb-2 text-cyan-400">{item.title}</h3>
              <p className="text-blue-200 font-body">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Visión */}
      <section className="py-20 bg-blue-950/30 text-center px-6">
        <h2 className="text-4xl font-title mb-8 text-gradient animate-glow opacity-0 animate-fadeUp">
          Nuestra Visión
        </h2>
        <p className="max-w-3xl mx-auto text-blue-200 text-lg opacity-0 animate-fadeUp delay-200 font-body">
          Ser la agencia creativa digital de referencia en Campeche y más allá, 
          ofreciendo soluciones innovadoras que inspiren, conecten y transformen negocios en experiencias memorables.
        </p>
        
      </section>
<br4></br4>
<br></br>
<br></br>
<br></br>
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
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }
        `}
      </style>
    </div>
  );
};

export default Somos;
