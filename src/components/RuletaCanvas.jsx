import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Typography, Paper, Alert } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import confetti from "canvas-confetti";

export default function RuletaCanvas({
  premios,
  participantes,
  onGanadorSeleccionado,
}) {
  const canvasRef = useRef(null);
  const [girando, setGirando] = useState(false);

  // Filtrar solo premios con stock disponible (> 0)
  const premiosValidos = premios.filter((p) => p.cantidad > 0);

  useEffect(() => {
    dibujarRuleta(0);
  }, [premiosValidos]);

  const dibujarRuleta = (anguloActual) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const total = premiosValidos.length;
    if (total === 0) return;

    const centro = canvas.width / 2;
    const radio = centro - 10;
    const anguloPorSlice = (2 * Math.PI) / total;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    premiosValidos.forEach((premio, i) => {
      const inicio = anguloActual + i * anguloPorSlice;
      const fin = inicio + anguloPorSlice;

      // Slice de color
      ctx.beginPath();
      ctx.moveTo(centro, centro);
      ctx.arc(centro, centro, radio, inicio, fin);
      ctx.closePath();
      ctx.fillStyle = premio.color || `hsl(${(i * 360) / total}, 70%, 50%)`;
      ctx.fill();
      ctx.lineWidth = 2;
      ctx.strokeStyle = "#ffffff";
      ctx.stroke();

      // Texto del premio
      ctx.save();
      ctx.translate(centro, centro);
      ctx.rotate(inicio + anguloPorSlice / 2);
      ctx.textAlign = "right";
      ctx.fillStyle = "#ffffff";
      ctx.font = "bold 16px Roboto, sans-serif";
      ctx.fillText(premio.nombre, radio - 20, 5);
      ctx.restore();
    });

    // Puntero superior
    ctx.beginPath();
    ctx.moveTo(centro - 15, 10);
    ctx.lineTo(centro + 15, 10);
    ctx.lineTo(centro, 35);
    ctx.closePath();
    ctx.fillStyle = "#e74c3c";
    ctx.fill();
    ctx.strokeStyle = "#ffffff";
    ctx.stroke();
  };

  const girar = () => {
    if (girando || premiosValidos.length === 0 || participantes.length === 0)
      return;

    setGirando(true);
    let angulo = 0;
    const girosTotales = 5 * 360 + Math.floor(Math.random() * 360);
    const duracion = 4000; // 4 segundos
    const inicioTiempo = performance.now();

    const animar = (tiempoActual) => {
      const transcurrido = tiempoActual - inicioTiempo;
      const progreso = Math.min(transcurrido / duracion, 1);

      // Función de desaceleración (easeOutQuad)
      const easeOut = 1 - Math.pow(1 - progreso, 3);
      angulo = girosTotales * (Math.PI / 180) * easeOut;

      dibujarRuleta(angulo);

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        setGirando(false);

        // Calcular índice ganador basándose en el ángulo final
        const total = premiosValidos.length;
        const anguloPorSlice = (2 * Math.PI) / total;
        const anguloNormalizado =
          (2 * Math.PI - (angulo % (2 * Math.PI))) % (2 * Math.PI);
        const indiceGanador = Math.floor(anguloNormalizado / anguloPorSlice);

        const premioGanador = premiosValidos[indiceGanador];
        const participanteGanador =
          participantes[Math.floor(Math.random() * participantes.length)];

        // Confeti de celebración
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });

        // Notificar al componente padre
        onGanadorSeleccionado(participanteGanador, premioGanador);
      }
    };

    requestAnimationFrame(animar);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, textAlign: "center", borderRadius: 3 }}>
      <Typography variant='h5' fontWeight='bold' gutterBottom color='primary'>
        🎯 Ruleta del Sorteo
      </Typography>

      {participantes.length === 0 && (
        <Alert severity='warning' sx={{ mb: 2 }}>
          Debes registrar al menos 1 participante para girar la ruleta.
        </Alert>
      )}

      {premiosValidos.length === 0 && (
        <Alert severity='error' sx={{ mb: 2 }}>
          No hay premios disponibles con stock para sortear.
        </Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <canvas ref={canvasRef} width={420} height={420} />
      </Box>

      <Button
        variant='contained'
        color='secondary'
        size='large'
        startIcon={<PlayArrowIcon />}
        onClick={girar}
        disabled={
          girando || premiosValidos.length === 0 || participantes.length === 0
        }
        sx={{ px: 4, py: 1.5, fontSize: "1.1rem", borderRadius: 2 }}
      >
        {girando ? "¡Girando ruleta...!" : "¡Girar Ruleta!"}
      </Button>
    </Paper>
  );
}
