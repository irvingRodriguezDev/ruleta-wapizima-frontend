import { Box, Button, Stack, Typography } from "@mui/material";
import MiniGanadora from "./MiniGanadora";
import { motion, AnimatePresence } from "framer-motion";
const Final = ({ ganadoras, volverInicio }) => {
  return (
    <motion.div
      key='final'
      initial={{
        opacity: 0,
        y: 40,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
      style={{
        width: "100%",
      }}
    >
      <Box
        sx={{
          maxWidth: 900,
          mx: "auto",
          textAlign: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "2.5rem",
              sm: "4rem",
            },
            fontWeight: 900,
            color: "#E5127E",
            mb: 2,
          }}
        >
          ¡Felicidades!
        </Typography>

        <Typography
          sx={{
            fontSize: {
              xs: "1.1rem",
              sm: "1.4rem",
            },
            color: "#555",
            lineHeight: 1.8,
            maxWidth: 750,
            mx: "auto",
            mb: 5,
          }}
        >
          Felicitamos de corazón a nuestras tres ganadoras y agradecemos a todas
          las participantes por compartir su creatividad, talento y pasión.
          <br />
          <br />
          Cada diseño nos recuerda que cuando seguimos aprendiendo,
          capacitándonos y creyendo en nuestro talento, podemos llegar cada vez
          más lejos.
        </Typography>

        {/* Podio */}
        <Stack
          direction={{
            xs: "column",
            sm: "row",
          }}
          spacing={2}
          justifyContent='center'
          alignItems='stretch'
          sx={{
            mb: 5,
          }}
        >
          <MiniGanadora posicion='3.º' ganadora={ganadoras.tercerLugar} />

          <MiniGanadora posicion='2.º' ganadora={ganadoras.segundoLugar} />

          <MiniGanadora posicion='1.º' ganadora={ganadoras.primerLugar} />
        </Stack>

        <Button
          onClick={volverInicio}
          variant='outlined'
          sx={{
            borderColor: "#E5127E",
            color: "#E5127E",
            borderRadius: 50,
            px: 5,
            fontWeight: 700,
            "&:hover": {
              borderColor: "#C40067",
              background: "rgba(229,18,126,0.05)",
            },
          }}
        >
          VOLVER A VER
        </Button>
      </Box>
    </motion.div>
  );
};

export default Final;
