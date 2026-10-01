import React, { useRef, useEffect, useState } from "react";
import { Box, Button, Paper, Alert, Typography } from "@mui/material";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import confetti from "canvas-confetti";
import CelebracionEfecto from "./CelebracionEfecto";
import IconPower from "../assets/icon_pink_rosa.png";
import HastagW from "../assets/soy_wapizima.png";
export default function RuletaCanvas({
  premios,
  participantes,
  onGanadorSeleccionado,
}) {
  const canvasRef = useRef(null);
  const [girando, setGirando] = useState(false);
  const [lanzarCelebracion, setLanzarCelebracion] = useState(false);
  const premiosDisponibles = premios.filter((p) => p.cantidad > 0);

  useEffect(() => {
    dibujarFlor(0);
  }, [premios]);

  // Dibujar un pétalo estilizado tipo Gerbera (curva alargada y punta suave)
  const dibujarPetaloGerbera = (ctx, radio, anchoBase, factorPunta = 1) => {
    ctx.beginPath();
    ctx.moveTo(-anchoBase / 2, 0);

    // Lado izquierdo con curva elegante hacia afuera
    ctx.bezierCurveTo(
      -anchoBase * 1.8,
      -radio * 0.4,
      -anchoBase * 1.2,
      -radio * 0.85,
      0,
      -radio * factorPunta,
    );

    // Lado derecho reflejado
    ctx.bezierCurveTo(
      anchoBase * 1.2,
      -radio * 0.85,
      anchoBase * 1.8,
      -radio * 0.4,
      anchoBase / 2,
      0,
    );

    ctx.closePath();
  };

  const dibujarFlor = (anguloActual) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const total = premios.length;
    if (total === 0) return;

    const centro = canvas.width / 2;
    const radioPetalo = centro - 45;
    const anguloPorPetalo = (2 * Math.PI) / total;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.save();
    ctx.translate(centro, centro);
    ctx.rotate(anguloActual);

    // ==========================================
    // CAPA 1: Pétalos Traseros (Profundidad y Volumen)
    // ==========================================
    premios.forEach((premio, i) => {
      ctx.save();
      // Intercalados exactos a la mitad entre cada premio
      ctx.rotate(i * anguloPorPetalo + anguloPorPetalo / 2);

      const agotado = premio.cantidad <= 0;

      // Sombra ambiental sutil tras los pétalos
      ctx.shadowColor = "rgba(160, 40, 90, 0.25)";
      ctx.shadowBlur = 12;
      ctx.shadowOffsetY = 6;

      dibujarPetaloGerbera(ctx, radioPetalo, 28, 1.05);

      if (agotado) {
        ctx.fillStyle = "#D6D6D6";
      } else {
        const gradienteFondo = ctx.createLinearGradient(0, 0, 0, -radioPetalo);
        gradienteFondo.addColorStop(0, "#E5127E");
        gradienteFondo.addColorStop(0.7, "#FF69B4");
        gradienteFondo.addColorStop(1, "#FFA0C5");
        ctx.fillStyle = gradienteFondo;
      }

      ctx.fill();
      ctx.restore();
    });

    // ==========================================
    // CAPA 2: Pétalos Principales (Premios y Nombres)
    // ==========================================
    premios.forEach((premio, i) => {
      ctx.save();
      ctx.rotate(i * anguloPorPetalo);

      const agotado = premio.cantidad <= 0;

      // Sombras de superposición entre pétalos superiores e inferiores
      ctx.shadowColor = "rgba(120, 20, 60, 0.2)";
      ctx.shadowBlur = 8;
      ctx.shadowOffsetY = 4;

      dibujarPetaloGerbera(ctx, radioPetalo * 0.92, 32, 1);

      if (agotado) {
        ctx.fillStyle = "#ECECEC";
      } else {
        const gradienteFrontal = ctx.createLinearGradient(
          0,
          0,
          0,
          -radioPetalo,
        );
        gradienteFrontal.addColorStop(0, premio.color || "#FFF0F5");
        gradienteFrontal.addColorStop(0.45, "#FFC0CB");
        gradienteFrontal.addColorStop(1, "#FF8DA1");
        ctx.fillStyle = gradienteFrontal;
      }

      ctx.fill();

      // Borde brillante fino estilo seda
      ctx.lineWidth = 1.8;
      ctx.strokeStyle = agotado ? "#BDBDBD" : "rgba(255, 255, 255, 0.9)";
      ctx.stroke();

      // Línea decorativa central de la textura del pétalo (Nervadura)
      ctx.beginPath();
      ctx.moveTo(0, -25);
      ctx.lineTo(0, -radioPetalo * 0.4);
      ctx.strokeStyle = agotado
        ? "rgba(0,0,0,0.05)"
        : "rgba(255, 255, 255, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.stroke();

      // Tipografía y Nombre del Premio
      ctx.save();
      ctx.rotate(-Math.PI / 2);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = agotado ? "#888888" : "#800A44";
      ctx.font =
        "bold 13px 'Montserrat', 'Playfair Display', Roboto, sans-serif";

      const textoMostrar = agotado
        ? `${premio.nombre} (Agotado)`
        : premio.nombre;
      ctx.fillText(textoMostrar, radioPetalo * 0.58, 0);
      ctx.restore();

      ctx.restore();
    });

    // ==========================================
    // CAPA 3: Centro de la Gerbera (Pistilo Texturizado)
    // ==========================================
    const radioCentro = 36;

    // Sombra proyectada del botón central
    ctx.beginPath();
    ctx.arc(0, 0, radioCentro + 2, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(0,0,0,0.08)";
    ctx.fill();

    // Degradado multicapa dorado / ámbar
    const gradienteCentro = ctx.createRadialGradient(
      -6,
      -6,
      2,
      0,
      0,
      radioCentro,
    );
    gradienteCentro.addColorStop(0, "#FFFFE0");
    gradienteCentro.addColorStop(0.25, "#FFD700");
    gradienteCentro.addColorStop(0.7, "#FF8C00");
    gradienteCentro.addColorStop(1, "#B85B00");

    ctx.beginPath();
    ctx.arc(0, 0, radioCentro, 0, 2 * Math.PI);
    ctx.fillStyle = gradienteCentro;
    ctx.fill();

    // Textura de corona de semillas/polen en el centro (Anillo de puntos)
    const puntosPolen = 16;
    const radioAnilloPolen = radioCentro * 0.65;
    for (let p = 0; p < puntosPolen; p++) {
      const anguloPunto = (p * 2 * Math.PI) / puntosPolen;
      const px = Math.cos(anguloPunto) * radioAnilloPolen;
      const py = Math.sin(anguloPunto) * radioAnilloPolen;

      ctx.beginPath();
      ctx.arc(px, py, 2.2, 0, 2 * Math.PI);
      ctx.fillStyle = "rgba(255, 245, 200, 0.85)";
      ctx.fill();
    }

    // Reflejo de brillo orgánico
    ctx.beginPath();
    ctx.arc(-10, -10, 10, 0, 2 * Math.PI);
    ctx.fillStyle = "rgba(255, 255, 255, 0.45)";
    ctx.fill();

    ctx.restore(); // Restaura la matriz de rotación principal

    // ==========================================
    // CAPA 4: Puntero Indicador Superior
    // ==========================================
    ctx.save();
    ctx.translate(centro, 22);
    ctx.beginPath();
    ctx.moveTo(0, 26);
    ctx.bezierCurveTo(-14, 6, -12, -6, 0, -6);
    ctx.bezierCurveTo(12, -6, 14, 6, 0, 26);
    ctx.closePath();
    ctx.fillStyle = "#E5127E";
    ctx.shadowColor = "rgba(229, 18, 126, 0.5)";
    ctx.shadowBlur = 10;
    ctx.fill();
    ctx.lineWidth = 2.5;
    ctx.strokeStyle = "#FFFFFF";
    ctx.stroke();
    ctx.restore();
  };

  const girar = () => {
    if (
      girando ||
      premiosDisponibles.length === 0 ||
      participantes.length === 0
    )
      return;

    setGirando(true);
    setLanzarCelebracion(false);

    const total = premios.length;
    const anguloPorPetalo = (2 * Math.PI) / total;

    const premioGanador =
      premiosDisponibles[Math.floor(Math.random() * premiosDisponibles.length)];
    const indiceGanador = premios.findIndex((p) => p === premioGanador);

    const anguloObjetivoPetalo = (total - indiceGanador) % total;
    const anguloObjetivo = anguloObjetivoPetalo * anguloPorPetalo - Math.PI / 2;

    const girosCompletos = 6 * 2 * Math.PI;
    const anguloFinalTotal = girosCompletos + anguloObjetivo;

    const duracion = 5000;
    const inicioTiempo = performance.now();

    const animar = (tiempoActual) => {
      const transcurrido = tiempoActual - inicioTiempo;
      const progreso = Math.min(transcurrido / duracion, 1);

      const easeOut = 1 - Math.pow(1 - progreso, 3);
      const anguloActual = anguloFinalTotal * easeOut;

      dibujarFlor(anguloActual);

      if (progreso < 1) {
        requestAnimationFrame(animar);
      } else {
        setGirando(false);

        // Activar la celebración (Confeti rosa + Fuegos artificiales multicolores)
        setLanzarCelebracion(true);

        const participanteGanador =
          participantes[Math.floor(Math.random() * participantes.length)];

        onGanadorSeleccionado(participanteGanador, premioGanador);
      }
    };

    requestAnimationFrame(animar);
  };

  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        textAlign: "center",
        borderRadius: 3,
        bgcolor: "transparent",
      }}
    >
      {/* Componente de animación separado */}
      <CelebracionEfecto
        activo={lanzarCelebracion}
        onTerminar={() => setLanzarCelebracion(false)}
      />

      {participantes.length === 0 && (
        <Alert severity='warning' sx={{ mb: 2 }}>
          Debes registrar al menos 1 participante para girar la flor.
        </Alert>
      )}

      {premiosDisponibles.length === 0 && (
        <Alert severity='error' sx={{ mb: 2 }}>
          No hay premios disponibles con stock para sortear.
        </Alert>
      )}

      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <canvas ref={canvasRef} width={550} height={550} />
      </Box>

      <Button
        variant='contained'
        size='large'
        onClick={girar}
        disabled={
          girando ||
          premiosDisponibles.length === 0 ||
          participantes.length === 0
        }
        sx={{
          px: 5,
          py: 1.6,
          fontSize: "1.05rem",
          borderRadius: "30px",
          bgcolor: "#fff",
          color: "#E5127E",
          fontWeight: "bold",
          letterSpacing: "0.5px",
          boxShadow: "0 6px 20px rgba(229, 18, 126, 0.4)",
          "&:hover": {
            bgcolor: "#fff",
            boxShadow: "0 8px 25px rgba(229, 18, 126, 0.6)",
          },
        }}
      >
        <img src={IconPower} style={{ width: "auto", height: "20px" }} />{" "}
        {girando ? "¡Girando ruleta...!" : "¡Girar Ruleta!"}
      </Button>
      <br />
      <Typography
        variant='h3'
        sx={{
          fontWeight: "bold",
          color: "#fff",
          mb: 1,
          display: "inline-block", // Asegura buen ajuste del contenedor
        }}
      >
        <img
          src={HastagW}
          alt='Hashtag Wapizima'
          style={{
            width: "300px",
            height: "auto",
            // Aplica sombra exactamente al contorno del texto/trazo
            filter:
              "drop-shadow(1px 1px 0px #fff) drop-shadow(-1px -1px 0px #fff) drop-shadow(1px -1px 0px #fff) drop-shadow(-1px 1px 0px #fff)",
          }}
        />
      </Typography>
    </Paper>
  );
}
