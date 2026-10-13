"use client";

import { useEffect, useRef } from "react";

export default function ObsidianFlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    if (!ctx) return;

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let time = 0;
    let scrollPosition = window.scrollY;
    let targetScroll = window.scrollY;
    let lastFrame = 0;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);

      width = rect.width;
      height = rect.height;

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const handleScroll = () => {
      targetScroll = window.scrollY;
    };

    const drawBackground = (timestamp: number) => {
      if (document.hidden) {
        animationFrame = 0;
        return;
      }

      if (timestamp - lastFrame < 30) {
        animationFrame = requestAnimationFrame(drawBackground);
        return;
      }

      const delta = lastFrame
        ? Math.min((timestamp - lastFrame) / 1000, 0.05)
        : 0.03;

      lastFrame = timestamp;

      if (!reduceMotion) {
        time += delta * 0.22;
      }

      scrollPosition += (targetScroll - scrollPosition) * 0.045;

      ctx.clearRect(0, 0, width, height);

      // Deep obsidian base
      const base = ctx.createLinearGradient(0, 0, width, height);

      base.addColorStop(0, "#050505");
      base.addColorStop(0.48, "#0b0b0b");
      base.addColorStop(1, "#030303");

      ctx.fillStyle = base;
      ctx.fillRect(0, 0, width, height);

      // Soft liquid-metal light fields
      const fields = [
        {
          x: 0.24,
          y: 0.35,
          radius: 0.52,
          speed: 0.19,
          phase: 0.3,
          alpha: 0.12,
        },
        {
          x: 0.76,
          y: 0.56,
          radius: 0.62,
          speed: -0.14,
          phase: 2.4,
          alpha: 0.13,
        },
        {
          x: 0.46,
          y: 0.9,
          radius: 0.48,
          speed: 0.11,
          phase: 4.1,
          alpha: 0.08,
        },
      ];

      fields.forEach((field, index) => {
        const movement = reduceMotion ? 0 : time * field.speed;

        const x =
          width *
          (field.x +
            Math.sin(movement + field.phase) * 0.12);

        const y =
          height *
          (field.y +
            Math.cos(movement * 0.8 + field.phase) * 0.09) -
          scrollPosition * (0.035 + index * 0.018);

        const radius = Math.max(width, height) * field.radius;

        const gradient = ctx.createRadialGradient(
          x,
          y,
          0,
          x,
          y,
          radius
        );

        gradient.addColorStop(
          0,
          `rgba(180, 180, 180, ${field.alpha})`
        );

        gradient.addColorStop(
          0.32,
          `rgba(100, 100, 100, ${field.alpha * 0.45})`
        );

        gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, width, height);
      });

      // Smooth sculptural wave contours
      const waveCount = 8;

      for (let i = 0; i < waveCount; i++) {
        const progress = i / waveCount;
        const centerY = height * (0.25 + progress * 0.72);

        const amplitude = height * (0.025 + progress * 0.035);

        const phase = reduceMotion ? 0 : time * (0.35 + progress * 0.12);

        ctx.beginPath();

        for (let x = -20; x <= width + 20; x += 8) {
          const normalizedX = x / Math.max(width, 1);

          const wave =
            Math.sin(normalizedX * Math.PI * 2.1 + phase + i * 0.45) *
              amplitude +
            Math.sin(normalizedX * Math.PI * 4.0 - phase * 0.6) *
              amplitude *
              0.22;

          const scrollWave =
            Math.sin(normalizedX * Math.PI * 2 + scrollPosition * 0.001) *
            height *
            0.012;

          const y = centerY + wave + scrollWave;

          if (x === -20) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        const opacity = 0.012 + progress * 0.012;

        ctx.strokeStyle = `rgba(220, 220, 220, ${opacity})`;
        ctx.lineWidth = 1 + progress * 0.6;

        ctx.stroke();
      }

      // Soft vignette for a cinematic luxury finish
      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.45,
        Math.min(width, height) * 0.12,
        width * 0.5,
        height * 0.45,
        Math.max(width, height) * 0.8
      );

      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.48)");

      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      animationFrame = requestAnimationFrame(drawBackground);
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    const handleVisibility = () => {
      if (!document.hidden && !animationFrame) {
        lastFrame = 0;
        animationFrame = requestAnimationFrame(drawBackground);
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);

    animationFrame = requestAnimationFrame(drawBackground);

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("scroll", handleScroll);

      document.removeEventListener(
        "visibilitychange",
        handleVisibility
      );
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}