import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import RuletaCanvas from "./components/RuletaCanvas";
import { Button, Grid, Typography } from "@mui/material";
import logopink from "./assets/LOGOTIPOS PINK POWER-01.png";
import AddPremio from "./components/AddPremio";
import AddParticipante from "./components/AddParticipante";
function App() {
  const [ganador, setGanador] = useState(null);
  const participantes = [
    { nombre: "Daniel" },
    { nombre: "berenice" },
    { nombre: "tomas" },
    { nombre: "jose" },
  ];
  const premios = [
    { cantidad: 1, nombre: "premio 1" },
    { cantidad: 1, nombre: "premio 2" },
  ];
  const onGanadorSeleccionado = () => {
    setGanador("el ganador");
  };

  const [openParticipante, setOpenParticipante] = useState(false);
  const [openPremio, setOpenPremio] = useState(false);

  return (
    <Grid container spacing={2}>
      <Grid size={12} sx={{ display: "flex", justifyContent: "end", mt: 2 }}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "end" }}
        >
          <Grid size={12}>
            <Button
              variant='contained'
              sx={{ bgcolor: "#fff", color: "#E5127E", fontWeight: "bold" }}
              onClick={() => setOpenParticipante(true)}
            >
              Crear participante
            </Button>
          </Grid>
          <Grid size={12}>
            <Button
              onClick={() => setOpenPremio(true)}
              variant='contained'
              sx={{ bgcolor: "#fff", color: "#E5127E", fontWeight: "bold" }}
            >
              Agregar Premio
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <Grid
          container
          spacing={2}
          sx={{ display: "flex", justifyContent: "center", bgcolor: "#E5127E" }}
        >
          <Grid size={12}>
            <Typography
              variant='h3'
              sx={{ fontWeight: "bold", textAlign: "center", color: "#fff" }}
            >
              Sorteo
            </Typography>
          </Grid>
          <Grid size={12}>
            <img src={logopink} style={{ width: "150px", height: "auto" }} />
          </Grid>
        </Grid>
      </Grid>
      <Grid size={12}>
        <RuletaCanvas
          premios={premios}
          participantes={participantes}
          onGanadorSeleccionado={onGanadorSeleccionado}
        />
      </Grid>
      <AddPremio open={openPremio} handleClose={() => setOpenPremio(false)} />
      <AddParticipante
        open={openParticipante}
        handleClose={() => setOpenParticipante(false)}
      />
    </Grid>
  );
}

export default App;
