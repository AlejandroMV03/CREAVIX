// src/components/ParticlesBackground.jsx
import React, { useEffect, useRef } from 'react';

const ParticlesBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5,
      d: Math.random() * 0.5 + 0.05,
    }));

    let angle = 0;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'white';
      stars.forEach((star) => {
        ctx.globalAlpha = star.d;
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2);
        ctx.fill();
      });
      angle += 0.01;
      stars.forEach((star) => {
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
    <canvas
      ref={canvasRef}
      id="particles-somos"
      className="fixed top-0 left-0 w-full h-full -z-10"
    ></canvas>
  );
};

export default ParticlesBackground;
