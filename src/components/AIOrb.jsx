import React, { useRef, useEffect } from 'react';

const AIOrb = ({ width = 56, height = 56, className = '' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const W = canvas.width;
    const H = canvas.height;
    const CX = W / 2;
    const CY = H / 2;

    // Use actual dimensions to calculate scale relative to original 800x800
    const minDim = Math.min(W, H);
    const scaleFactor = minDim / 800;

    const RADIUS = 220 * scaleFactor;
    // For smaller sizes, keep a minimum number of points so it still looks like an orb
    const POINTS = Math.max(80, Math.floor(900 * scaleFactor * 2));

    let angleX = 0;
    let angleY = 0;

    // Generate sphere points
    const dots = [];
    for (let i = 0; i < POINTS; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = RADIUS * Math.cos(phi);

      dots.push({ x, y, z });
    }

    // Pulses
    let pulses = [];

    function createPulse() {
      pulses.push({
        radius: 0,
        speed: (2 + Math.random() * 2) * scaleFactor * 3, // adjust speed for scale
        thickness: (10 + Math.random() * 10) * scaleFactor * 2
      });
    }

    const intervalId = setInterval(createPulse, 1200);

    // Rotation
    function rotate(point, ax, ay) {
      let { x, y, z } = point;

      // Rotate X
      let cosX = Math.cos(ax);
      let sinX = Math.sin(ax);
      let y1 = y * cosX - z * sinX;
      let z1 = y * sinX + z * cosX;

      // Rotate Y
      let cosY = Math.cos(ay);
      let sinY = Math.sin(ay);
      let x2 = x * cosY + z1 * sinY;
      let z2 = -x * sinY + z1 * cosY;

      return { x: x2, y: y1, z: z2 };
    }

    // Projection
    function project(p) {
      const projScale = 600 * scaleFactor;
      const scale = projScale / (projScale + p.z);
      return {
        x: CX + p.x * scale,
        y: CY + p.y * scale,
        scale
      };
    }

    let animationFrameId;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      // Glow background
      const glow = ctx.createRadialGradient(CX, CY, 100 * scaleFactor, CX, CY, 400 * scaleFactor);
      glow.addColorStop(0, "rgba(0,150,255,0.08)");
      glow.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = glow;
      ctx.fillRect(0, 0, W, H);

      // Draw dots
      dots.forEach(d => {
        const r = rotate(d, angleX, angleY);
        const p = project(r);

        const brightness = (r.z + RADIUS) / (2 * RADIUS);

        ctx.beginPath();
        // Keep dot visible at small scales
        const baseDotSize = 2 * p.scale * scaleFactor;
        const finalDotSize = Math.max(0.6, baseDotSize * 4); // Min size of 0.6
        
        ctx.arc(p.x, p.y, finalDotSize, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, ${180 + brightness * 75}, 255, ${0.4 + brightness * 0.6})`;
        ctx.fill();
      });

      // Draw pulses
      pulses.forEach((pulse, i) => {
        pulse.radius += pulse.speed;

        const alpha = 1 - pulse.radius / (RADIUS * 2);
        if (alpha <= 0) {
          pulses.splice(i, 1);
          return;
        }

        ctx.beginPath();
        ctx.arc(CX, CY, pulse.radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0, 200, 255, ${alpha})`;
        ctx.lineWidth = pulse.thickness * alpha;
        ctx.stroke();
      });

      angleX += 0.0025;
      angleY += 0.0035;

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
    };
  }, [width, height]);

  return (
    <canvas 
      ref={canvasRef} 
      width={width} 
      height={height} 
      className={className}
      style={{
        borderRadius: '50%',
        boxShadow: '0 0 15px rgba(0, 180, 255, 0.4)',
        background: 'radial-gradient(circle at center, #0a0f1f, #05070d)',
        display: 'block'
      }}
    />
  );
};

export default AIOrb;
