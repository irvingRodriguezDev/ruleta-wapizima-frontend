import { Box, Button, Typography } from "@mui/material";
import LogoFiesta from "../assets/fiesta_mexicana_limpia.png";
import { motion } from "framer-motion";
const Portada = ({ siguienteLugar }) => {
  return (
    <motion.div
      key='inicio'
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -40 }}
      transition={{
        duration: 0.7,
        ease: "easeOut",
      }}
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
          maxWidth: 900,
          mx: "auto",
        }}
      >
        {/* Etiqueta */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            delay: 0.2,
            duration: 0.6,
          }}
        >
          <Typography
            sx={{
              color: "#E5127E",
              fontWeight: 700,
              letterSpacing: 3,
              fontSize: {
                xs: "0.75rem",
                sm: "0.9rem",
              },
              mb: 2,
              textTransform: "uppercase",
            }}
          >
            <img src={LogoFiesta} style={{ width: "220px", height: "150px" }} />
          </Typography>
        </motion.div>

        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.35,
            duration: 0.7,
          }}
        >
          <Typography
            component='h1'
            sx={{
              fontSize: {
                xs: "2.5rem",
                sm: "4rem",
                md: "5.5rem",
              },
              lineHeight: 0.95,
              fontWeight: 900,
              color: "#E5127E",
              mb: 3,
              letterSpacing: "-2px",
            }}
          >
            Conoce a las
            <br />
            <Box
              component='span'
              sx={{
                color: "#2E2E2E",
              }}
            >
              ganadoras
            </Box>
          </Typography>
        </motion.div>

        {/* Línea decorativa */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          animate={{
            width: 120,
            opacity: 1,
          }}
          transition={{
            delay: 0.7,
            duration: 0.6,
          }}
          style={{
            height: 4,
            background: "#E5127E",
            margin: "0 auto 30px",
            borderRadius: 10,
          }}
        />

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.8,
            duration: 0.7,
          }}
        >
          <Typography
            sx={{
              color: "#555",
              fontSize: {
                xs: "1rem",
                sm: "1.15rem",
                md: "1.3rem",
              },
              lineHeight: 1.8,
              maxWidth: 750,
              mx: "auto",
              mb: 2,
            }}
          >
            Gracias a todas las participantes que se tomaron el tiempo, la
            dedicación y el cariño para formar parte de esta dinámica.
          </Typography>

          <Typography
            sx={{
              color: "#777",
              fontSize: {
                xs: "0.95rem",
                sm: "1.05rem",
              },
              lineHeight: 1.7,
              maxWidth: 700,
              mx: "auto",
              mb: 5,
            }}
          >
            Cada diseño, cada detalle y cada esfuerzo son una muestra de que la
            capacitación constante nos permite seguir creciendo, aprendiendo y
            llevando nuestro talento cada vez más lejos.
          </Typography>
        </motion.div>

        {/* Botón */}
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
            delay: 1.1,
            duration: 0.6,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
        >
          <Button
            onClick={siguienteLugar}
            variant='contained'
            size='large'
            sx={{
              px: 6,
              py: 1.8,
              borderRadius: 50,
              background: "linear-gradient(135deg, #E5127E 0%, #C40067 100%)",
              fontSize: "1rem",
              fontWeight: 800,
              letterSpacing: 1,
              boxShadow: "0 10px 30px rgba(229,18,126,0.30)",
              "&:hover": {
                background: "linear-gradient(135deg, #C40067 0%, #E5127E 100%)",
              },
            }}
          >
            DESCUBRIR GANADORAS
          </Button>
        </motion.div>
      </Box>
    </motion.div>
  );
};

export default Portada;
