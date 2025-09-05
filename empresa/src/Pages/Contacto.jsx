// Pages/Contacto.jsx
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ParticlesBackground from "../components/ParticlesBackground";
import { Mail, User, MessageCircle } from "lucide-react";

const Contacto = () => {
  const form = useRef();
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState({ show: false, message: "", type: "" });

  const sendEmail = (e) => {
    e.preventDefault();
    setSending(true);

    emailjs
      .sendForm(
        "service_o757zoa",
        "template_wkf8hqj",
        form.current,
        "qSjsqZ-HovDwDgigz"
      )
      .then(
        () => {
          setToast({ show: true, message: "✅ Mensaje enviado con éxito", type: "success" });
          form.current.reset(); // ❌ Esto limpia todos los campos
          setSending(false);
          setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
        },
        (error) => {
          setToast({ show: true, message: "❌ Error al enviar: " + error.text, type: "error" });
          setSending(false);
          setTimeout(() => setToast({ show: false, message: "", type: "" }), 4000);
        }
      );
  };

  return (
    <div className="relative z-10 min-h-screen">
      {/* Fondo partículas */}
      <ParticlesBackground />
      <div className="fixed inset-0 -z-20 bg-gradient-radial from-[#1f1f2e] to-[#0d0d1a]"></div>

      {/* Hero */}
      <section className="text-center py-32 px-4">
        <h1 className="text-5xl md:text-6xl font-title drop-shadow-lg text-gradient animate-glow opacity-0 animate-fadeUp">
          Contáctanos
        </h1>
        <p className="text-xl md:text-2xl mt-6 mb-8 font-body text-gradient animate-glow opacity-0 animate-fadeUp delay-200">
          Estamos aquí para ayudarte a transformar tus ideas en realidad
        </p>
      </section>

      {/* Información de contacto */}
      <section className="py-20 bg-blue-950/30 text-center px-6">
        <h2 className="text-4xl font-title mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Información de Contacto
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-6 text-lg text-blue-200 font-body">
            <p className="flex items-center gap-2">
              📧 <strong>Email del Asesor principal:</strong>{" "}
              <a
                href="mailto:asesorprincipal@creavixsfc.com"
                className="text-cyan-400 hover:underline"
              >
                asesorprincipal@creavixsfc.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              🔗 <strong>LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/creavix-sfc-346447381"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:underline"
              >
                www.linkedin.com/in/creavix-sfc-346447381
              </a>
            </p>
          </div>
          <div className="text-blue-200">
            <p className="font-body text-lg">
              Envía tu mensaje a través del formulario y nos pondremos en contacto contigo lo antes posible.
            </p>
          </div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-20 px-6">
        <h2 className="text-4xl font-title text-center mb-12 text-gradient animate-glow opacity-0 animate-fadeUp">
          Envíanos un mensaje
        </h2>
        <form
          ref={form}
          onSubmit={sendEmail}
          className="max-w-2xl mx-auto space-y-6 bg-blue-900/40 p-8 rounded-2xl shadow-lg backdrop-blur-md"
        >
          {/* Nombre */}
          <div className="relative">
            <User className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="text"
              name="user_name"
              placeholder="Nombre"
              required
              className="w-full pl-12 p-3 rounded-lg bg-blue-950/50 border border-cyan-400 text-white placeholder:text-blue-400 focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <Mail className="absolute left-3 top-3 text-cyan-400" />
            <input
              type="email"
              name="user_email"
              placeholder="Correo electrónico"
              required
              className="w-full pl-12 p-3 rounded-lg bg-blue-950/50 border border-cyan-400 text-white placeholder:text-blue-400 focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Mensaje */}
          <div className="relative">
            <MessageCircle className="absolute left-3 top-3 text-cyan-400" />
            <textarea
              name="message"
              placeholder="Escribe tu mensaje..."
              rows="5"
              required
              className="w-full pl-12 p-3 rounded-lg bg-blue-950/50 border border-cyan-400 text-white placeholder:text-blue-400 focus:ring-2 focus:ring-cyan-400 resize-none"
            ></textarea>
          </div>

          {/* Botón */}
          <button
            type="submit"
            disabled={sending}
            className={`w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-lg shadow-lg transform hover:scale-105 transition ${
              sending ? "opacity-70 cursor-not-allowed" : ""
            }`}
          >
            {sending ? "Enviando..." : "Enviar"}
          </button>
        </form>
      </section>

      {/* Toast */}
      {toast.show && (
        <div
          className={`fixed bottom-8 right-8 px-6 py-3 rounded-lg shadow-lg font-body ${
            toast.type === "success"
              ? "bg-green-500 text-white"
              : "bg-red-500 text-white"
          } animate-fadeUp`}
        >
          {toast.message}
        </div>
      )}

      {/* Animaciones */}
      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeUp { animation: fadeUp 0.8s ease forwards; }
          .delay-200 { animation-delay: 0.2s; }
        `}
      </style>
    </div>
  );
};

export default Contacto;
