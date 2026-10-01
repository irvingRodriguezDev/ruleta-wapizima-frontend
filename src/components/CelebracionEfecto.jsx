import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function CelebracionEfecto({ activo, onTerminar }) {
  useEffect(() => {
    if (!activo) return;

    // 1. Confeti ultra saturado en tonos Rosa Suave, Blanco y Fucsia Wapizima
    const coloresConfeti = [
      "#E5127E",
      "#FF2A93",
      "#FFB0CE",
      "#FFC1DA",
      "#FFFFFF",
      "#FFE5EE",
    ];

    // Explosión central masiva (Aumentado de 100 a 250 partículas)
    confetti({
      particleCount: 250,
      spread: 100,
      origin: { y: 0.6 },
      colors: coloresConfeti,
      scalar: 0.8, // Partículas un poco más pequeñas para mayor densidad
      drift: 0,
      zIndex: 10000,
    });

    // Ráfagas laterales suplementarias para llenar toda la pantalla
    confetti({
      particleCount: 150,
      angle: 60,
      spread: 70,
      origin: { x: 0, y: 0.65 },
      colors: coloresConfeti,
      scalar: 0.8,
      zIndex: 10000,
    });

    confetti({
      particleCount: 150,
      angle: 120,
      spread: 70,
      origin: { x: 1, y: 0.65 },
      colors: coloresConfeti,
      scalar: 0.8,
      zIndex: 10000,
    });

    // 2. Fuegos Artificiales Tradicionales (Más frecuentes y con más chispas)
    const coloresFuegos = [
      "#FF1744", // Rojo deslumbrante
      "#FFD700", // Dorado radiante
      "#00E676", // Verde esmeralda
      "#29B6F6", // Azul eléctrico
      "#E040FB", // Violeta brillante
      "#FFFFFF", // Destello blanco
    ];

    const duracionFuegos = 4000; // 3 segundos de espectáculo
    const inicioTiempo = Date.now();

    const intervaloFuegos = setInterval(() => {
      const transcurrido = Date.now() - inicioTiempo;

      if (transcurrido >= duracionFuegos) {
        clearInterval(intervaloFuegos);
        if (onTerminar) onTerminar();
        return;
      }

      // Disparar 2 explosiones pirotécnicas simultáneas por intervalo en coordenadas aleatorias
      for (let i = 0; i < 2; i++) {
        confetti({
          particleCount: 80, // Subió de ~30 a 80 partículas por fuego artificial
          startVelocity: 35,
          spread: 360,
          ticks: 80,
          origin: {
            x: Math.random() * 0.8 + 0.1,
            y: Math.random() * 0.4 + 0.1,
          },
          colors: coloresFuegos,
          shapes: ["circle"],
          scalar: 0.6, // Chispas finas pero muy abundantes
          gravity: 0.5,
          disableForReducedMotion: true,
          zIndex: 10000,
        });
      }
    }, 200); // Dispara cada 200ms (antes era 300ms)

    return () => clearInterval(intervaloFuegos);
  }, [activo]);

  return null;
}
