import confetti from "canvas-confetti";

export const lanzarConfetti = (tipo = "normal") => {
  // Paleta de colores oficial Wapizima + Gold Gala
  const coloresWapizima = [
    "#E5127E",
    "#DA327C",
    "#FFD700",
    "#FFFFFF",
    "#FF65B3",
  ];

  // 1. CELEBRACIÓN MAYOR / FUEGOS ARTIFICIALES (1er Lugar / Gran Ganadora)
  if (tipo === "primer" || tipo === "fuegos") {
    const duration = 6.5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 40,
      spread: 360,
      ticks: 80,
      zIndex: 1500,
      shapes: ["square", "circle"],
      colors: coloresWapizima,
      disableForReducedMotion: true,
    };

    const randomInRange = (min, max) => Math.random() * (max - min) + min;

    // Disparos desde las esquinas inferiores estilo cañones de gala
    const interval = setInterval(() => {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // Explosión lado izquierdo
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        scalar: randomInRange(0.8, 1.3),
      });

      // Explosión lado derecho
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        scalar: randomInRange(0.8, 1.3),
      });
    }, 220);

    // Ráfaga extra de estrellas doradas/rosa en el centro para iniciar
    confetti({
      particleCount: 180,
      spread: 120,
      startVelocity: 45,
      origin: { y: 0.5 },
      shapes: ["star"],
      colors: ["#FFD700", "#E5127E", "#FFFFFF"],
      scalar: 1.2,
      zIndex: 1501,
    });

    return;
  }

  // 2. DISPARO ESTÁNDAR / SEGUNDO Y TERCER LUGAR (Cañón doble desde abajo)
  const count = 200;
  const defaults = {
    origin: { y: 0.7 },
    colors: coloresWapizima,
    zIndex: 1500,
  };

  const fire = (particleRatio, opts) => {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio),
    });
  };

  // Mezcla de velocidad y propagación para efecto envolvente
  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8,
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2,
    shapes: ["star"],
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
};
