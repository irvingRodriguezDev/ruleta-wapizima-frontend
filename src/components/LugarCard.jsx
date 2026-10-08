import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const LugarCard = ({
  lugar,
  titulo,
  ganadora,
  siguiente,
  color,
  textoBoton,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        y: 60,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.9,
        y: -40,
      }}
      transition={{
        duration: 0.8,
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
        }}
      >
        {/* Posición */}
        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
        >
          <Typography
            sx={{
              color,
              fontSize: {
                xs: "4rem",
                sm: "6rem",
                md: "7rem",
              },
              fontWeight: 900,
              lineHeight: 1,
              textShadow: `0 10px 30px ${color}33`,
            }}
          >
            {lugar}
          </Typography>

          <Typography
            sx={{
              color: "#2E2E2E",
              fontSize: {
                xs: "1.8rem",
                sm: "2.5rem",
              },
              fontWeight: 800,
              mb: 4,
            }}
          >
            {titulo}
          </Typography>
        </motion.div>

        {/* Contenedor principal */}
        <Paper
          elevation={0}
          sx={{
            maxWidth: 700,
            mx: "auto",
            borderRadius: 5,
            p: {
              xs: 2,
              sm: 3,
            },
            background: "rgba(255,255,255,0.82)",
            backdropFilter: "blur(15px)",
            border: `2px solid ${color}44`,
            boxShadow: `0 20px 60px ${color}22`,
          }}
        >
          {/* Imagen */}
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.7,
            }}
          >
            <Box
              sx={{
                borderRadius: 4,
                overflow: "hidden",
                background: "#FFF",
                minHeight: {
                  xs: 220,
                  sm: 320,
                },
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                component='img'
                src={ganadora.imagen}
                alt={ganadora.nombre}
                sx={{
                  width: "100%",
                  maxHeight: 400,
                  objectFit: "contain",
                  display: "block",
                }}
              />
            </Box>
          </motion.div>

          {/* Nombre */}
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
              delay: 0.6,
            }}
          >
            <Typography
              sx={{
                mt: 4,
                color: "#2E2E2E",
                fontWeight: 900,
                fontSize: {
                  xs: "1.6rem",
                  sm: "2.2rem",
                },
              }}
            >
              {ganadora.nombre}
            </Typography>

            <Typography
              sx={{
                mt: 1,
                color: "#E5127E",
                fontWeight: 700,
                fontSize: {
                  xs: "0.95rem",
                  sm: "1.1rem",
                },
              }}
            >
              {ganadora.premio}
            </Typography>
          </motion.div>
        </Paper>

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
            delay: 0.9,
          }}
          whileHover={{
            scale: 1.04,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Button
            onClick={siguiente}
            variant='contained'
            sx={{
              mt: 4,
              px: {
                xs: 4,
                sm: 6,
              },
              py: 1.6,
              borderRadius: 50,
              background: "linear-gradient(135deg, #E5127E 0%, #C40067 100%)",
              fontWeight: 800,
              letterSpacing: 0.5,
              boxShadow: "0 10px 30px rgba(229,18,126,0.25)",
              "&:hover": {
                background: "linear-gradient(135deg, #C40067 0%, #E5127E 100%)",
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
