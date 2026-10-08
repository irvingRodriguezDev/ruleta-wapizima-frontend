import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";
import CarouselGaleria from "./CarouselGaleria";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.4, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

const Portada = ({ siguienteLugar, imagenes }) => {
  return (
    <motion.div
      key='inicio'
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      exit='exit'
      style={{ width: "100%", position: "relative" }}
    >
      {/* Halo de luz decorativo de fondo */}
      <Box
        sx={{
          position: "absolute",
          top: "-10%",
          left: "50%",
          transform: "translateX(-50%)",
          width: { xs: "300px", sm: "500px", md: "700px" },
          height: { xs: "300px", sm: "500px", md: "700px" },
          background:
            "radial-gradient(circle, rgba(229,18,126,0.08) 0%, rgba(255,255,255,0) 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          textAlign: "center",
          mx: "auto",
          px: { xs: 2, sm: 4 },
          pt: { xs: 2, sm: 4 },
        }}
      >
        {/* Título Principal */}
        <motion.div variants={itemVariants}>
          <Typography
            component='h1'
            sx={{
              fontSize: { xs: "2.4rem", sm: "3.8rem", md: "4.5rem" },
              lineHeight: 1,
              fontWeight: 900,
              color: "#1A1A1A",
              mb: 2.5,
              mt: -10,
              letterSpacing: "-1.5px",
            }}
          >
            Conoce a las{" "}
            <Box
              component='span'
              sx={{
                background: "linear-gradient(135deg, #E5127E 0%, #B30A5F 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                display: "inline-block",
              }}
            >
              ganadoras
            </Box>
          </Typography>
        </motion.div>

        {/* Separador elegante con estilo Neón/Wapizima */}
        <motion.div variants={itemVariants}>
          <Box
            sx={{
              width: 80,
              height: 4,
              background: "linear-gradient(90deg, #E5127E 0%, #FF65B3 100%)",
              margin: "0 auto 32px",
              borderRadius: 10,
              boxShadow: "0 2px 10px rgba(229, 18, 126, 0.4)",
            }}
          />
        </motion.div>

        {/* Textos descriptivos */}
        <motion.div variants={itemVariants}>
          <Typography
            sx={{
              color: "#333333",
              fontSize: { xs: "1rem", sm: "1.18rem" },
              fontWeight: 500,
              lineHeight: 1.8,
              maxWidth: 720,
              mx: "auto",
              mb: 2,
            }}
          >
            Gracias a todas las participantes que entregaron su talento,
            dedicación y pasión en cada creación para formar parte de esta
            edición.
          </Typography>

          <Typography
            sx={{
              color: "#666666",
              fontSize: { xs: "0.92rem", sm: "1.05rem" },
              lineHeight: 1.7,
              maxWidth: 680,
              mx: "auto",
              mb: 4.5,
            }}
          >
            Cada diseño demuestra que la capacitación constante nos permite
            seguir rompiendo límites y llevando nuestro arte del mundo de las
            uñas cada vez más lejos.
          </Typography>
        </motion.div>

        {/* Botón Call To Action */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
        >
          <Button
            onClick={siguienteLugar}
            variant='contained'
            size='large'
            disableElevation
            sx={{
              px: { xs: 4.5, sm: 6 },
              py: { xs: 1.6, sm: 1.8 },
              borderRadius: "50px",
              background: "linear-gradient(135deg, #E5127E 0%, #B30A5F 100%)",
              fontSize: { xs: "0.95rem", sm: "1.05rem" },
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: "uppercase",
              boxShadow: "0 10px 28px rgba(229, 18, 126, 0.35)",
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
              "&:hover": {
                background: "linear-gradient(135deg, #FF1A8C 0%, #C40067 100%)",
                boxShadow: "0 14px 36px rgba(229, 18, 126, 0.5)",
              },
            }}
          >
            Descubrir Ganadoras
          </Button>
        </motion.div>
      </Box>

      {/* Carrusel de Galería en la parte inferior */}
      <Box sx={{ mt: { xs: 5, sm: 7 } }}>
        <CarouselGaleria imagenes={imagenes} />
      </Box>
    </motion.div>
  );
};

export default Portada;
