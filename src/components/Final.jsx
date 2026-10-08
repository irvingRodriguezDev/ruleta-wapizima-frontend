import React from "react";
import { Box, Button, Stack, Typography, Paper } from "@mui/material";
import MiniGanadora from "./MiniGanadora";
import { motion } from "framer-motion";
import ReplayIcon from "@mui/icons-material/Replay";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      when: "beforeChildren",
      staggerChildren: 0.18,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 25 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

const Final = ({ ganadoras, volverInicio }) => {
  return (
    <motion.div
      key='final'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      style={{ width: "100%", position: "relative" }}
    >
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          maxWidth: 920,
          px: { xs: 2, sm: 3 },
          py: { xs: 2, sm: 4 },
        }}
      >
        {/* Título de Cierre */}
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              display: "inline-flex",
              alignItems: "center",
              gap: 1,
              mb: 1.5,
              px: 2.5,
              py: 0.8,
              borderRadius: "50px",
              backgroundColor: "rgba(229, 18, 126, 0.08)",
              border: "1px solid rgba(229, 18, 126, 0.2)",
            }}
          >
            <EmojiEventsIcon sx={{ color: "#E5127E", fontSize: "1.2rem" }} />
            <Typography
              sx={{
                color: "#E5127E",
                fontWeight: 800,
                fontSize: "0.88rem",
                letterSpacing: 1.5,
                textTransform: "uppercase",
              }}
            >
              Podio Honorífico
            </Typography>
          </Box>

          <Typography
            sx={{
              fontSize: { xs: "2.8rem", sm: "4.2rem", md: "5rem" },
              fontWeight: 900,
              lineHeight: 0.95,
              background: "linear-gradient(135deg, #E5127E 0%, #B30A5F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2.5,
              letterSpacing: "-1.5px",
            }}
          >
            ¡Felicidades a todas!
          </Typography>
        </motion.div>

        {/* Mensaje Agradecimiento */}
        <motion.div variants={itemVariants}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 3, sm: 4 },
              borderRadius: "24px",
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              backdropFilter: "blur(15px)",
              border: "1px solid rgba(229, 18, 126, 0.15)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.03)",
              mb: 5,
              maxWidth: 780,
              mx: "auto",
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "1rem", sm: "1.2rem" },
                color: "#333",
                fontWeight: 500,
                lineHeight: 1.8,
                mb: 1.5,
              }}
            >
              Felicitamos de corazón a nuestras tres gran ganadoras y
              agradecemos a cada una de las participantes por compartir su
              creatividad, talento y pasión en esta dinámica.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "0.92rem", sm: "1.05rem" },
                color: "#666",
                lineHeight: 1.7,
              }}
            >
              Cada diseño nos recuerda que cuando seguimos aprendiendo,
              capacitándonos y creyendo en nuestro arte del mundo de las uñas,
              ¡podemos llegar tan lejos como nos lo propongamos!
            </Typography>
          </Paper>
        </motion.div>

        {/* Podio Ordenado Visualmente (Desktop: 2.º | 1.º Centro Destacado | 3.º) */}
        <motion.div variants={itemVariants}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2.5, sm: 2, md: 3 }}
            justifyContent='center'
            alignItems={{ xs: "stretch", sm: "flex-end" }}
            sx={{ mb: 6 }}
          >
            {/* 2.º Lugar (Lado Izquierdo) */}
            <Box
              sx={{
                order: { xs: 2, sm: 1 },
                flex: 1,
                maxWidth: { sm: 280 },
              }}
            >
              <MiniGanadora
                posicion='2.º'
                ganadora={ganadoras?.segundoLugar}
                color='#A8A8A8'
              />
            </Box>

            {/* 1.er Lugar (Centro Elevado) */}
            <Box
              sx={{
                order: { xs: 1, sm: 2 },
                flex: 1,
                maxWidth: { sm: 310 },
                transform: { sm: "translateY(-18px)" },
                zIndex: 2,
              }}
            >
              <MiniGanadora
                posicion='1.º'
                ganadora={ganadoras?.primerLugar}
                color='#FFD700'
                esPrimero
              />
            </Box>

            {/* 3.er Lugar (Lado Derecho) */}
            <Box
              sx={{
                order: { xs: 3, sm: 3 },
                flex: 1,
                maxWidth: { sm: 280 },
              }}
            >
              <MiniGanadora
                posicion='3.º'
                ganadora={ganadoras?.tercerLugar}
                color='#CD7F32'
              />
            </Box>
          </Stack>
        </motion.div>

        {/* Botón Volver a Iniciar */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.96 }}
        >
          <Button
            onClick={volverInicio}
            variant='outlined'
            size='large'
            startIcon={<ReplayIcon />}
            sx={{
              borderColor: "#E5127E",
              color: "#E5127E",
              borderWidth: "2px",
              borderRadius: "50px",
              px: { xs: 4, sm: 5 },
              py: 1.5,
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 800,
              letterSpacing: 1,
              transition: "all 0.3s ease",
              "&:hover": {
                borderWidth: "2px",
                borderColor: "#B30A5F",
                color: "#B30A5F",
                background: "rgba(229, 18, 126, 0.08)",
                boxShadow: "0 8px 25px rgba(229, 18, 126, 0.2)",
              },
            }}
          >
            Volver a Ver
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Final;
