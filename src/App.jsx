import { useState } from "react";
import "./App.css";
import RuletaCanvas from "./components/RuletaCanvas";
import { Button, Grid, Typography, Box, Paper, Modal } from "@mui/material";
import logopink from "./assets/logo_pink_power_blanco.png";
import LogoWapi from "./assets/Logo_Wapizima.webp";
function App() {
  // Lista inicial de 20 participantes
  const [participantes, setParticipantes] = useState([
    { id: 1, nombre: "Daniel" },
    { id: 2, nombre: "Berenice" },
    { id: 3, nombre: "Tomás" },
    { id: 4, nombre: "José" },
    { id: 5, nombre: "María" },
    { id: 6, nombre: "Carlos" },
    { id: 7, nombre: "Ana" },
    { id: 8, nombre: "Luis" },
    { id: 9, nombre: "Sofia" },
    { id: 10, nombre: "Miguel" },
    { id: 11, nombre: "Laura" },
    { id: 12, nombre: "Javier" },
    { id: 13, nombre: "Carmen" },
    { id: 14, nombre: "Diego" },
    { id: 15, nombre: "Elena" },
    { id: 16, nombre: "Fernando" },
    { id: 17, nombre: "Patricia" },
    { id: 18, nombre: "Roberto" },
    { id: 19, nombre: "Gloria" },
    { id: 20, nombre: "Alejandro" },
  ]);

  // Lista inicial de 5 premios
  const [premios, setPremios] = useState([
    { id: 1, cantidad: 1, nombre: "Kit Acrílico" },
    { id: 2, cantidad: 1, nombre: "Gama de Gel" },
    { id: 3, cantidad: 1, nombre: "Lámpara UV" },
    { id: 4, cantidad: 1, nombre: "Pincel Kolinsky" },
    { id: 5, cantidad: 1, nombre: "Suscripción FP" },
  ]);

  const [ganadorActual, setGanadorActual] = useState(null);
  const [modalGanadorOpen, setModalGanadorOpen] = useState(false);

  const [openParticipante, setOpenParticipante] = useState(false);
  const [openPremio, setOpenPremio] = useState(false);

  // Recibe la selección generada al terminar de girar la flor
  const handleGanadorSeleccionado = (participanteGanador, premioGanador) => {
    setGanadorActual({
      participante: participanteGanador,
      premio: premioGanador,
    });
    setModalGanadorOpen(true);

    // 1. Descontar 1 al stock del premio entregado
    setPremios((prevPremios) =>
      prevPremios.map((p) =>
        p.nombre === premioGanador.nombre
          ? { ...p, cantidad: p.cantidad - 1 }
          : p,
      ),
    );

    // 2. Remover al participante para que no vuelva a ganar en la siguiente tirada
    setParticipantes((prevParticipantes) =>
      prevParticipantes.filter((p) => p.nombre !== participanteGanador.nombre),
    );
  };

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh" }}>
      <Grid container spacing={2}>
        {/* Banner Sorteo */}
        <Grid size={12}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#E5127E",
              py: 2,
            }}
          >
            <img
              src={LogoWapi}
              alt='Pink Power'
              style={{ width: "auto", height: "80px" }}
            />
          </Box>
        </Grid>
        <Grid size={12} sx={{ mt: -4 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              bgcolor: "#E5127E",
              py: 2,
            }}
          >
            <img
              src={logopink}
              alt='Pink Power'
              style={{ width: "20%", height: "50px" }}
            />
          </Box>
        </Grid>

        {/* Ruleta / Flor Canvas */}
        <Grid
          size={12}
          sx={{ display: "flex", justifyContent: "center", mt: -10 }}
        >
          <RuletaCanvas
            premios={premios}
            participantes={participantes}
            onGanadorSeleccionado={handleGanadorSeleccionado}
          />
        </Grid>
      </Grid>

      {/* Modal / Pop-up de Ganador */}
      <Modal open={modalGanadorOpen} onClose={() => setModalGanadorOpen(false)}>
        <Paper
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            p: 4,
            borderRadius: 3,
            textAlign: "center",
            maxWidth: 400,
            width: "90%",
            bgcolor: "#FFF",
            border: "3px solid #E5127E",
          }}
        >
          <Typography
            variant='h4'
            sx={{ color: "#E5127E", fontWeight: "bold", mb: 2 }}
          >
            ¡Felicidades! 🎉
          </Typography>
          <Typography variant='h6' sx={{ color: "#333", mb: 1 }}>
            <b>{ganadorActual?.participante?.nombre}</b>
          </Typography>
          <Typography variant='body1' sx={{ color: "#666", mb: 3 }}>
            Ha ganado: <b>{ganadorActual?.premio?.nombre}</b>
          </Typography>
          <Button
            variant='contained'
            onClick={() => setModalGanadorOpen(false)}
            sx={{ bgcolor: "#E5127E", fontWeight: "bold" }}
          >
            Continuar
          </Button>
        </Paper>
      </Modal>
    </Box>
  );
}

export default App;
