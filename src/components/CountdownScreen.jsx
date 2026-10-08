import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const CountdownScreen = ({ lugarDestino, onFinish }) => {
  const [count, setCount] = useState(3);

  // Textos y colores adaptados según el lugar a revelar
  const configLugar = {
    1: { titulo: "REVELANDO 3.ER LUGAR", color: "#B87333" },
    2: { titulo: "REVELANDO 2.º LUGAR", color: "#8C8C8C" },
    3: { titulo: "👑 REVELANDO A LA GRAN GANADORA", color: "#E5127E" },
  }[lugarDestino] || { titulo: "REVELANDO GANADORA", color: "#E5127E" };

  useEffect(() => {
    if (count > 0) {
      const timer = setTimeout(() => setCount((prev) => prev - 1), 900);
      return () => clearTimeout(timer);
    } else {
      onFinish();
    }
  }, [count, onFinish]);

  return (
    <motion.div
      key='countdown-screen'
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.4 }}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box sx={{ textAlign: "center", position: "relative" }}>
        {/* Título de la etapa actual */}
        <Typography
          sx={{
            color: configLugar.color,
            fontWeight: 800,
            letterSpacing: { xs: 3, sm: 5 },
            fontSize: { xs: "0.9rem", sm: "1.2rem" },
            textTransform: "uppercase",
            mb: 3,
            textShadow: `0 4px 15px ${configLugar.color}40`,
          }}
        >
          {configLugar.titulo}
        </Typography>

        {/* Número animado (3... 2... 1...) */}
        <Box
          sx={{
            height: { xs: 180, sm: 260 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <AnimatePresence mode='wait'>
            <motion.div
              key={count}
              initial={{ opacity: 0, scale: 0.3, rotate: -10 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              exit={{ opacity: 0, scale: 2, filter: "blur(10px)" }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "7rem", sm: "11rem", md: "13rem" },
                  fontWeight: 900,
                  lineHeight: 1,
                  background:
                    lugarDestino === 3
                      ? "linear-gradient(135deg, #E5127E 0%, #FFD700 50%, #E5127E 100%)"
                      : `linear-gradient(135deg, #E5127E 0%, ${configLugar.color} 100%)`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  filter: `drop-shadow(0 15px 35px ${configLugar.color}50)`,
                }}
              >
                {count > 0 ? count : "¡YA!"}
              </Typography>
            </motion.div>
          </AnimatePresence>
        </Box>

        {/* Indicador de carga sutil */}
        <Typography
          sx={{
            mt: 4,
            color: "#666",
            fontSize: { xs: "0.85rem", sm: "1rem" },
            fontWeight: 600,
            letterSpacing: 2,
            textTransform: "uppercase",
          }}
        >
          ¡Preparando el momento!
        </Typography>
      </Box>
    </motion.div>
  );
};

export default CountdownScreen;
