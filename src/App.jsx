import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Box, Container } from "@mui/material";
import LogoWapi from "./assets/Logo_Wapizima.webp";
import "./App.css";
import Header from "./components/Header";
import Portada from "./components/Portada";
import LugarCard from "./components/LugarCard";
import Final from "./components/Final";
import FirstPlace from "./components/FirstPlace";

import foto1 from "./assets/sorteo/1.jpeg";
import foto2 from "./assets/sorteo/2.jpeg";
import foto3 from "./assets/sorteo/3.jpeg";
import foto4 from "./assets/sorteo/4.jpeg";
import foto5 from "./assets/sorteo/5.jpeg";
import foto6 from "./assets/sorteo/6.jpeg";
import foto7 from "./assets/sorteo/7.jpeg";
import foto8 from "./assets/sorteo/8.jpeg";
import foto9 from "./assets/sorteo/9.jpeg";
import foto10 from "./assets/sorteo/10.jpeg";
import foto11 from "./assets/sorteo/11.jpeg";
import foto12 from "./assets/sorteo/12.jpeg";
import foto13 from "./assets/sorteo/13.jpeg";
import foto14 from "./assets/sorteo/14.jpeg";
import foto15 from "./assets/sorteo/15.jpeg";
import foto16 from "./assets/sorteo/16.jpeg";
import foto17 from "./assets/sorteo/17.jpeg";
import foto18 from "./assets/sorteo/18.jpeg";
import foto19 from "./assets/sorteo/19.jpeg";
import foto20 from "./assets/sorteo/20.jpeg";
import foto21 from "./assets/sorteo/21.jpeg";
import foto22 from "./assets/sorteo/22.jpeg";
import foto23 from "./assets/sorteo/23.jpeg";
import foto24 from "./assets/sorteo/24.jpeg";
import foto25 from "./assets/sorteo/25.jpeg";
import foto26 from "./assets/sorteo/26.jpeg";
import foto27 from "./assets/sorteo/27.jpeg";
import foto28 from "./assets/sorteo/28.jpeg";
import foto29 from "./assets/sorteo/29.jpeg";
import foto30 from "./assets/sorteo/30.jpeg";
import foto31 from "./assets/sorteo/31.jpeg";
import foto32 from "./assets/sorteo/32.jpeg";
import foto33 from "./assets/sorteo/33.jpeg";
import foto34 from "./assets/sorteo/34.jpeg";
import foto35 from "./assets/sorteo/35.jpeg";
import foto36 from "./assets/sorteo/36.jpeg";
import foto37 from "./assets/sorteo/37.jpeg";
import foto38 from "./assets/sorteo/38.jpeg";
import foto39 from "./assets/sorteo/39.jpeg";
import foto40 from "./assets/sorteo/40.jpeg";
import foto41 from "./assets/sorteo/41.jpeg";
import foto42 from "./assets/sorteo/42.jpeg";
import foto43 from "./assets/sorteo/43.jpeg";
import foto44 from "./assets/sorteo/44.jpeg";
import foto45 from "./assets/sorteo/45.jpeg";
import foto46 from "./assets/sorteo/46.jpeg";
import CountdownScreen from "./components/CountdownScreen";
import { lanzarConfetti } from "./utils/LanzarConfetti";
import primerLugar from "./assets/primer_lugar_final.jpeg";
import segundoLugar from "./assets/lugar_2_final.jpeg";
import tercerLugar from "./assets/3er_lugar.webp";
function App() {
  const [etapa, setEtapa] = useState(0);
  const [enConteo, setEnConteo] = useState(false);
  const [siguienteEtapaDestino, setSiguienteEtapaDestino] = useState(null);

  const ganadoras = {
    tercerLugar: {
      nombre: "A. Michel P. Malpica ",
      premio: "$700.00 MXN en productos de la marca",
      imagen: tercerLugar,
    },

    segundoLugar: {
      nombre: "Maricarmen Chan - Amahirany Nathaly Garcia Gloria",
      premio: "$1,000.00 MXN en productos de la marca",
      imagen: segundoLugar,
    },

    primerLugar: {
      nombre: "Monserrat Flores Ramirez - Mila correa",
      premio: "$1,500.00 MXN en productos de la marca",
      imagen: primerLugar,
    },
  };
  const iniciarTransicionConteo = (destino) => {
    setSiguienteEtapaDestino(destino);
    setEnConteo(true);
  };

  const finalizarConteo = () => {
    const destino = siguienteEtapaDestino;
    setEnConteo(false);
    setEtapa(destino);

    // Disparar confetti justo al terminar el contador
    setTimeout(() => {
      lanzarConfetti(destino === 3 ? "primer" : "normal");
    }, 200);
  };
  const mostrarLugar = (lugar) => {
    setEtapa(lugar);

    setTimeout(() => {
      lanzarConfetti(lugar === 3 ? "primer" : "normal");
    }, 500);
  };

  const siguienteLugar = () => {
    if (etapa === 0) {
      iniciarTransicionConteo(1);
    } else if (etapa === 1) {
      iniciarTransicionConteo(2);
    } else if (etapa === 2) {
      iniciarTransicionConteo(3);
    } else {
      setEtapa(4); // El final pasa directo sin conteo
    }
  };

  const volverInicio = () => {
    setEnConteo(false);
    setEtapa(0);
  };

  const imagenesSorteo = [
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
    foto13,
    foto14,
    foto15,
    foto16,
    foto17,
    foto18,
    foto19,
    foto20,
    foto21,
    foto22,
    foto23,
    foto24,
    foto25,
    foto26,
    foto27,
    foto28,
    foto29,
    foto30,
    foto31,
    foto32,
    foto33,
    foto34,
    foto35,
    foto36,
    foto37,
    foto38,
    foto39,
    foto40,
    foto41,
    foto42,
    foto43,
    foto44,
    foto45,
    foto46,
  ];

  return (
    <Box
      sx={{
        width: "100%",
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
        maxWidth='xl'
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
          {enConteo ? (
            <CountdownScreen
              key='countdown'
              lugarDestino={siguienteEtapaDestino}
              onFinish={finalizarConteo}
            />
          ) : (
            <>
              {/* PORTADA */}
              {etapa === 0 && (
                <Portada
                  siguienteLugar={siguienteLugar}
                  imagenes={imagenesSorteo}
                />
              )}

              {/* 3ER LUGAR */}
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

              {/* 2DO LUGAR */}
              {etapa === 2 && (
                <LugarCard
                  key='segundo'
                  lugar='2.º'
                  titulo='Segundo Lugar'
                  ganadora={ganadoras.segundoLugar}
                  siguiente={siguienteLugar}
                  color='#8C8C8C'
                  textoBoton='CONOCER 1.ER LUGAR'
                />
              )}

              {/* 1ER LUGAR */}
              {etapa === 3 && (
                <FirstPlace
                  ganadoras={ganadoras}
                  siguienteLugar={siguienteLugar}
                />
              )}

              {/* FINAL */}
              {etapa === 4 && (
                <Final volverInicio={volverInicio} ganadoras={ganadoras} />
              )}
            </>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
}

export default App;
