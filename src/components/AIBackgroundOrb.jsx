import React, { useRef, useEffect } from 'react';

const AIBackgroundOrb = ({ width = 800, height = 800, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;
    const CX = W / 2;
    const CY = H / 2;

    const DOT_COUNT = window.innerWidth < 768 ? 300 : 900;
    const RADIUS = window.innerWidth < 768 ? 180 : 220;

    let dots = [];
    let angle = 0;

    // Generate sphere points
    for (let i = 0; i < DOT_COUNT; i++) {
      let theta = Math.random() * Math.PI * 2;
      let phi = Math.acos((Math.random() * 2) - 1);

      dots.push({
        theta,
        phi,
        pulse: Math.random() * 100
      });
    }

    function project(x, y, z) {
      const scale = 600 / (600 + z);
      return {
        x: x * scale + CX,
        y: y * scale + CY,
        scale
      };
    }

    let animationFrameId;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      angle += 0.003;

      dots.forEach(dot => {
        // Rotate around Y axis
        let x = RADIUS * Math.sin(dot.phi) * Math.cos(dot.theta + angle);
        let y = RADIUS * Math.sin(dot.phi) * Math.sin(dot.theta);
        let z = RADIUS * Math.cos(dot.phi);

        // Rotate around X axis
        let cosA = Math.cos(angle * 0.7);
        let sinA = Math.sin(angle * 0.7);

        let y2 = y * cosA - z * sinA;
        let z2 = y * sinA + z * cosA;

        let p = project(x, y2, z2);

        // Pulse effect
        dot.pulse += 0.05;
        let pulseWave = Math.sin(dot.pulse + angle * 5);

        let brightness = (z2 + RADIUS) / (2 * RADIUS);
        let size = (1.5 + pulseWave * 1.2) * p.scale;

        // Color gradient (blue → cyan → white)
        let glow = Math.floor(200 + pulseWave * 55);
        ctx.fillStyle = `rgba(${100 + glow}, ${180 + glow/2}, 255, ${brightness})`;

        ctx.beginPath();
        ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
        ctx.fill();
      });

      // Soft center glow
      let grad = ctx.createRadialGradient(CX, CY, 0, CX, CY, 300);
      grad.addColorStop(0, "rgba(0,150,255,0.15)");
      grad.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(CX, CY, 300, 0, Math.PI * 2);
      ctx.fill();

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [width, height]);

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className={className}
      style={{ display: 'block' }}
    />
  );
};

export default AIBackgroundOrb;
