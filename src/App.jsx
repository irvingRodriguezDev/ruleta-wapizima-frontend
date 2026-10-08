import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import {
  Button,
  Typography,
  Box,
  Paper,
  Container,
  Stack,
} from "@mui/material";

import LogoWapi from "./assets/Logo_Wapizima.webp";
import "./App.css";
import Header from "./components/Header";
import Portada from "./components/Portada";
import LugarCard from "./components/LugarCard";
import Final from "./components/Final";

function App() {
  const [etapa, setEtapa] = useState(0);

  const ganadoras = {
    tercerLugar: {
      nombre: "Jimena Sanchez Lopez",
      premio: "$800.00 MXN en productos de la marca",
      imagen: LogoWapi,
    },

    segundoLugar: {
      nombre: "Maria del Carmen Sanchez",
      premio: "$1,000.00 MXN en productos de la marca",
      imagen: LogoWapi,
    },

    primerLugar: {
      nombre: "Fernanda Sosa Aguilar",
      premio: "$1,500.00 MXN en productos de la marca",
      imagen: LogoWapi,
    },
  };

  const lanzarConfetti = (tipo = "normal") => {
    if (tipo === "primer") {
      const duration = 5 * 1000;
      const animationEnd = Date.now() + duration;

      const interval = setInterval(() => {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          clearInterval(interval);
          return;
        }

        const particleCount = 70 * (timeLeft / duration);

        confetti({
          particleCount,
          startVelocity: 35,
          spread: 360,
          ticks: 60,
          origin: {
            x: Math.random(),
            y: Math.random() * 0.5,
          },
        });
      }, 250);

      return;
    }

    confetti({
      particleCount: 160,
      spread: 100,
      startVelocity: 35,
      origin: {
        y: 0.65,
      },
    });
  };

  const mostrarLugar = (lugar) => {
    setEtapa(lugar);

    setTimeout(() => {
      lanzarConfetti(lugar === 3 ? "primer" : "normal");
    }, 500);
  };

  const siguienteLugar = () => {
    if (etapa === 0) {
      mostrarLugar(1);
    } else if (etapa === 1) {
      mostrarLugar(2);
    } else if (etapa === 2) {
      mostrarLugar(3);
    } else {
      setEtapa(4);
    }
  };

  const volverInicio = () => {
    setEtapa(0);
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        overflow: "hidden",
        position: "relative",
        background:
          "radial-gradient(circle at top, #fff5fa 0%, #fce3ed 40%, #f8c5d9 100%)",
      }}
    >
      {/* Decoración de fondo */}
      <Box
        sx={{
          position: "fixed",
          inset: 0,
          pointerEvents: "none",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "rgba(229, 18, 126, 0.08)",
            filter: "blur(80px)",
            top: -200,
            left: -200,
          }}
        />

        <Box
          sx={{
            position: "absolute",
            width: 450,
            height: 450,
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.7)",
            filter: "blur(80px)",
            bottom: -200,
            right: -150,
          }}
        />
      </Box>

      {/* Header */}
      <Header />
      {/* Contenido */}
      <Container
        maxWidth='lg'
        sx={{
          position: "relative",
          zIndex: 2,
          minHeight: "calc(100vh - 92px)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: {
            xs: 5,
            md: 7,
          },
        }}
      >
        <AnimatePresence mode='wait'>
          {/* ======================================= */}
          {/* PORTADA */}
          {/* ======================================= */}

          {etapa === 0 && <Portada siguienteLugar={siguienteLugar} />}

          {/* ======================================= */}
          {/* 3ER LUGAR */}
          {/* ======================================= */}

          {etapa === 1 && (
            <LugarCard
              key='tercer'
              lugar='3.º'
              titulo='Tercer Lugar'
              ganadora={ganadoras.tercerLugar}
              siguiente={siguienteLugar}
              color='#B87333'
              textoBoton='CONOCER 2.º LUGAR'
            />
          )}

          {/* ======================================= */}
          {/* 2DO LUGAR */}
          {/* ======================================= */}

          {etapa === 2 && (
            <LugarCard
              key='segundo'
              lugar='2.º'
              titulo='Segundo Lugar'
              ganadora={ganadoras.segundoLugar}
              siguiente={siguienteLugar}
              color='#8C8C8C'
              textoBoton='CONOCER 1.er LUGAR'
            />
          )}

          {/* ======================================= */}
          {/* 1ER LUGAR */}
          {/* ======================================= */}

          {etapa === 3 && (
            <motion.div
              key='primero'
              initial={{
                opacity: 0,
                scale: 0.75,
                y: 80,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              transition={{
                duration: 1,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                width: "100%",
              }}
            >
              <Box
                sx={{
                  maxWidth: 1000,
                  mx: "auto",
                  textAlign: "center",
                  position: "relative",
                }}
              >
                {/* Destellos */}
                {[...Array(8)].map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{
                      opacity: 0,
                      scale: 0,
                    }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1.3, 0],
                      x: Math.cos((index / 8) * Math.PI * 2) * 280,
                      y: Math.sin((index / 8) * Math.PI * 2) * 280,
                    }}
                    transition={{
                      duration: 2,
                      delay: index * 0.1,
                      repeat: Infinity,
                      repeatDelay: 1,
                    }}
                    style={{
                      position: "absolute",
                      left: "50%",
                      top: "45%",
                      fontSize: 30,
                      pointerEvents: "none",
                    }}
                  >
                    ✦
                  </motion.div>
                ))}

                <Typography
                  sx={{
                    color: "#E5127E",
                    fontWeight: 800,
                    letterSpacing: 4,
                    textTransform: "uppercase",
                    fontSize: {
                      xs: "0.8rem",
                      sm: "1rem",
                    },
                    mb: 1,
                  }}
                >
                  Y la gran ganadora es...
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "3.5rem",
                      sm: "5rem",
                      md: "6.5rem",
                    },
                    lineHeight: 0.95,
                    fontWeight: 900,
                    color: "#E5127E",
                    textShadow: "0 8px 30px rgba(229,18,126,0.25)",
                    mb: 2,
                  }}
                >
                  1.er
                </Typography>

                <Typography
                  sx={{
                    fontSize: {
                      xs: "2rem",
                      sm: "3rem",
                      md: "4rem",
                    },
                    fontWeight: 900,
                    color: "#2E2E2E",
                    mb: 4,
                  }}
                >
                  Lugar
                </Typography>

                {/* Imagen */}
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.6,
                    rotate: -5,
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    rotate: 0,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.9,
                    type: "spring",
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      maxWidth: 600,
                      mx: "auto",
                      p: 1,
                      borderRadius: 5,
                      background:
                        "linear-gradient(135deg, #E5127E, #FFD700, #E5127E)",
                      boxShadow: "0 20px 60px rgba(229,18,126,0.30)",
                    }}
                  >
                    <Box
                      sx={{
                        background: "#FFF",
                        borderRadius: 4,
                        overflow: "hidden",
                        p: {
                          xs: 2,
                          sm: 3,
                        },
                      }}
                    >
                      <Box
                        component='img'
                        src={ganadoras.primerLugar.imagen}
                        alt={ganadoras.primerLugar.nombre}
                        sx={{
                          width: "100%",
                          maxHeight: 420,
                          objectFit: "contain",
                          display: "block",
                        }}
                      />
                    </Box>
                  </Paper>
                </motion.div>

                {/* Nombre */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 0.9,
                    duration: 0.7,
                  }}
                >
                  <Typography
                    sx={{
                      mt: 4,
                      fontSize: {
                        xs: "1.7rem",
                        sm: "2.4rem",
                        md: "3rem",
                      },
                      fontWeight: 900,
                      color: "#2E2E2E",
                    }}
                  >
                    {ganadoras.primerLugar.nombre}
                  </Typography>

                  <Typography
                    sx={{
                      mt: 1,
                      fontSize: {
                        xs: "1rem",
                        sm: "1.2rem",
                      },
                      color: "#E5127E",
                      fontWeight: 700,
                    }}
                  >
                    {ganadoras.primerLugar.premio}
                  </Typography>
                </motion.div>

                {/* Botón */}
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  transition={{
                    delay: 1.3,
                  }}
                >
                  <Button
                    onClick={siguienteLugar}
                    variant='contained'
                    sx={{
                      mt: 4,
                      px: 5,
                      py: 1.5,
                      borderRadius: 50,
                      background: "#2E2E2E",
                      fontWeight: 700,
                      "&:hover": {
                        background: "#111",
                      },
                    }}
                  >
                    VER MENSAJE FINAL
                  </Button>
                </motion.div>
              </Box>
            </motion.div>
          )}

          {/* ======================================= */}
          {/* FINAL */}
          {/* ======================================= */}

          {etapa === 4 && (
            <Final volverInicio={volverInicio} ganadoras={ganadoras} />
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default App;
