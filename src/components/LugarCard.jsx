import React from "react";
import { Box, Button, Paper, Typography, Chip } from "@mui/material";
import { motion } from "framer-motion";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const LugarCard = ({
  lugar,
  titulo,
  ganadora,
  siguiente,
  color = "#E5127E",
  textoBoton,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.88, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.92, y: -30 }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      style={{ width: "100%" }}
    >
      <Box sx={{ mx: "auto", textAlign: "center", maxWidth: 780, px: 2 }}>
        {/* Número de Lugar y Título */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            sx={{
              color: color,
              fontSize: { xs: "4.5rem", sm: "6.5rem", md: "7.5rem" },
              fontWeight: 900,
              lineHeight: 0.9,
              letterSpacing: "-2px",
              textShadow: `0 12px 35px ${color}40`,
              mb: 0.5,
            }}
          >
            {lugar}
          </Typography>

          <Typography
            sx={{
              color: "#1A1A1A",
              fontSize: { xs: "1.6rem", sm: "2.3rem" },
              fontWeight: 800,
              letterSpacing: "-0.5px",
              mb: 3.5,
            }}
          >
            {titulo}
          </Typography>
        </motion.div>

        {/* Tarjeta Principal de la Ganadora */}
        <Paper
          elevation={0}
          sx={{
            position: "relative",
            maxWidth: 680,
            mx: "auto",
            borderRadius: "28px",
            p: { xs: 2.5, sm: 4 },
            background: "rgba(255, 255, 255, 0.88)",
            backdropFilter: "blur(20px)",
            border: `1.5px solid ${color}35`,
            boxShadow: `0 20px 50px -10px ${color}25, 0 10px 20px rgba(0,0,0,0.04)`,
            overflow: "hidden",
          }}
        >
          {/* Badge Distintivo Top */}
          <Box sx={{ position: "absolute", top: 18, right: 18, zIndex: 2 }}>
            <Chip
              icon={<EmojiEventsIcon style={{ color: color }} />}
              label={`Lugar ${lugar}`}
              sx={{
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                borderColor: `${color}40`,
                borderWidth: "1px",
                borderStyle: "solid",
                fontWeight: 800,
                color: "#2E2E2E",
                fontSize: "0.82rem",
                boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
              }}
            />
          </Box>

          {/* Imagen de la Ganadora / Diseño */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.65 }}
          >
            <Box
              sx={{
                borderRadius: "20px",
                overflow: "hidden",
                background: "linear-gradient(180deg, #FFFFFF 0%, #F9F9F9 100%)",
                minHeight: { xs: 240, sm: 340 },
                maxHeight: 420,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: `inset 0 0 0 1px ${color}20`,
                position: "relative",
                p: 1.5,
              }}
            >
              <Box
                component='img'
                src={ganadora.imagen}
                alt={ganadora.nombre}
                sx={{
                  width: "100%",
                  height: "100%",
                  maxHeight: 380,
                  objectFit: "contain",
                  borderRadius: "14px",
                  filter: `drop-shadow(0 10px 20px ${color}20)`,
                  transition: "transform 0.4s cubic-bezier(0.22, 1, 0.36, 1)",
                  "&:hover": {
                    transform: "scale(1.025)",
                  },
                }}
              />
            </Box>
          </motion.div>

          {/* Datos de la Ganadora y Premio */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <Typography
              sx={{
                mt: 3,
                color: "#1A1A1A",
                fontWeight: 900,
                fontSize: { xs: "1.75rem", sm: "2.2rem" },
                letterSpacing: "-0.5px",
                lineHeight: 1.2,
              }}
            >
              {ganadora.nombre}
            </Typography>

            {/* Banner de Premio */}
            {ganadora.premio && (
              <Box
                sx={{
                  mt: 2,
                  mx: "auto",
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "50px",
                  backgroundColor: "rgba(229, 18, 126, 0.06)",
                  border: "1px solid rgba(229, 18, 126, 0.15)",
                }}
              >
                <Typography
                  sx={{
                    color: "#E5127E",
                    fontWeight: 800,
                    fontSize: { xs: "0.95rem", sm: "1.1rem" },
                    letterSpacing: 0.2,
                  }}
                >
                  {ganadora.premio}
                </Typography>
              </Box>
            )}
          </motion.div>
        </Paper>

        {/* Botón Call To Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={siguiente}
            variant='contained'
            disableElevation
            sx={{
              mt: 4,
              px: { xs: 4.5, sm: 6 },
              py: { xs: 1.5, sm: 1.8 },
              borderRadius: "50px",
              background: "linear-gradient(135deg, #E5127E 0%, #B30A5F 100%)",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 800,
              letterSpacing: 1,
              textTransform: "uppercase",
              boxShadow: "0 10px 28px rgba(229, 18, 126, 0.35)",
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              "&:hover": {
                background: "linear-gradient(135deg, #FF1A8C 0%, #C40067 100%)",
                boxShadow: "0 14px 36px rgba(229, 18, 126, 0.5)",
              },
            }}
          >
            {textoBoton}
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default LugarCard;
