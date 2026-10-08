import React from "react";
import { Box, Button, Paper, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

const FirstPlace = ({ siguienteLugar, ganadoras }) => {
  const primerLugar = ganadoras?.primerLugar || {};

  return (
    <motion.div
      key='primero'
      initial={{ opacity: 0, scale: 0.8, y: 60 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.9, y: -40 }}
      transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: "100%", position: "relative" }}
    >
      <Box
        sx={{
          mx: "auto",
          textAlign: "center",
          position: "relative",
          maxWidth: 820,
          px: { xs: 2, sm: 3 },
          py: 2,
        }}
      >
        {/* Destellos / Partículas Radiantes de Fondo */}
        {[...Array(10)].map((_, index) => {
          const angle = (index / 10) * Math.PI * 2;
          const radius = 260;
          const xPos = Math.cos(angle) * radius;
          const yPos = Math.sin(angle) * radius;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.2, 1.4, 0.2],
                x: [0, xPos],
                y: [0, yPos],
              }}
              transition={{
                duration: 2.2,
                delay: index * 0.12,
                repeat: Infinity,
                repeatDelay: 0.8,
                ease: "easeOut",
              }}
              style={{
                position: "absolute",
                left: "50%",
                top: "40%",
                fontSize: index % 2 === 0 ? 28 : 22,
                color: index % 2 === 0 ? "#FFD700" : "#E5127E",
                pointerEvents: "none",
                zIndex: 0,
                textShadow: "0 0 10px rgba(255,215,0,0.8)",
              }}
            >
              ✦
            </motion.div>
          );
        })}

        {/* Subtítulo de Presentación */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            sx={{
              color: "#E5127E",
              fontWeight: 800,
              letterSpacing: { xs: 3, sm: 5 },
              textTransform: "uppercase",
              fontSize: { xs: "0.82rem", sm: "1.05rem" },
              mb: 1,
            }}
          >
            👑 Y la gran ganadora es...
          </Typography>
        </motion.div>

        {/* Gran Título Primer Lugar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <Typography
            sx={{
              fontSize: { xs: "4rem", sm: "6rem", md: "7.2rem" },
              lineHeight: 0.88,
              fontWeight: 900,
              background:
                "linear-gradient(135deg, #E5127E 0%, #FFD700 50%, #B30A5F 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              filter: "drop-shadow(0 10px 25px rgba(229,18,126,0.35))",
              letterSpacing: "-2px",
              mb: 0.5,
            }}
          >
            1.er
          </Typography>

          <Typography
            sx={{
              fontSize: { xs: "2.2rem", sm: "3.2rem", md: "4rem" },
              fontWeight: 900,
              color: "#1A1A1A",
              letterSpacing: "-1px",
              mb: 3.5,
            }}
          >
            Lugar
          </Typography>
        </motion.div>

        {/* Tarjeta de la Imagen con Marco Dorado Elegante */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7, rotate: -3 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.8,
            type: "spring",
            stiffness: 110,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              position: "relative",
              maxWidth: 640,
              mx: "auto",
              p: "3px",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, #FFD700 0%, #E5127E 50%, #FFD700 100%)",
              boxShadow:
                "0 25px 60px -10px rgba(229, 18, 126, 0.4), 0 0 30px rgba(255, 215, 0, 0.3)",
              zIndex: 1,
            }}
          >
            {/* Crown Badge */}
            <Box
              sx={{
                position: "absolute",
                top: -16,
                right: 20,
                zIndex: 3,
              }}
            >
              <Chip
                icon={<WorkspacePremiumIcon style={{ color: "#FFD700" }} />}
                label='CAMPEONA'
                sx={{
                  backgroundColor: "#1A1A1A",
                  color: "#FFFFFF",
                  fontWeight: 900,
                  fontSize: "0.85rem",
                  letterSpacing: 1,
                  px: 1,
                  py: 2.2,
                  borderRadius: "50px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255,215,0,0.5)",
                }}
              />
            </Box>

            <Box
              sx={{
                background: "linear-gradient(180deg, #FFFFFF 0%, #FAF6F8 100%)",
                borderRadius: "27px",
                overflow: "hidden",
                p: { xs: 2, sm: 3 },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                minHeight: { xs: 250, sm: 350 },
                maxHeight: 440,
              }}
            >
              <Box
                component='img'
                src={primerLugar.imagen}
                alt={primerLugar.nombre}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  borderRadius: "18px",
                  filter: "drop-shadow(0 12px 24px rgba(0,0,0,0.15))",
                  transition: "transform 0.4s ease",
                  "&:hover": {
                    transform: "scale(1.03)",
                  },
                }}
              />
            </Box>
          </Paper>
        </motion.div>

        {/* Nombre de la Ganadora y Premio */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          <Typography
            sx={{
              mt: 4,
              fontSize: { xs: "2rem", sm: "2.8rem", md: "3.4rem" },
              fontWeight: 900,
              color: "#1A1A1A",
              letterSpacing: "-0.5px",
              lineHeight: 1.1,
            }}
          >
            {primerLugar.nombre}
          </Typography>

          {primerLugar.premio && (
            <Box
              sx={{
                mt: 2,
                display: "inline-block",
                px: 3.5,
                py: 1.2,
                borderRadius: "50px",
                background:
                  "linear-gradient(135deg, rgba(229,18,126,0.1) 0%, rgba(255,215,0,0.15) 100%)",
                border: "1px solid rgba(229, 18, 126, 0.25)",
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "1.05rem", sm: "1.25rem" },
                  color: "#E5127E",
                  fontWeight: 800,
                  letterSpacing: 0.3,
                }}
              >
                🏆 {primerLugar.premio}
              </Typography>
            </Box>
          )}
        </motion.div>

        {/* Botón Final */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={siguienteLugar}
            variant='contained'
            disableElevation
            sx={{
              mt: 4.5,
              px: { xs: 4.5, sm: 6 },
              py: { xs: 1.6, sm: 1.8 },
              borderRadius: "50px",
              background: "#1A1A1A",
              color: "#FFFFFF",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "#000000",
                boxShadow: "0 14px 38px rgba(0, 0, 0, 0.45)",
              },
            }}
          >
            Ver Mensaje Final
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default FirstPlace;
