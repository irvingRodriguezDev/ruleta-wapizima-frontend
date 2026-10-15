import { useState, useEffect } from "react";
import "./App.css";
import RuletaCanvas from "./components/RuletaCanvas";
import ListaGanadores from "./components/ListaGanadores"; // Nuevo componente
import { Button, Grid, Typography, Box, Paper, Modal } from "@mui/material";
import logopink from "./assets/logo_pink_power_blanco.png";
import LogoWapi from "./assets/Logo_Wapizima.webp";
import pkg from "react-fast-marquee";

const PARTICIPANTES_INICIALES = [
  { id: 1, nombre: "Erika Elizabeth Cardozo" },
  { id: 2, nombre: "Roxana Sulem" },
  { id: 3, nombre: "Anel Sarahi" },
  { id: 4, nombre: "Yessica" },
  { id: 5, nombre: "Alma Delia" },
  { id: 6, nombre: "Diana Carolina" },
  { id: 7, nombre: "Brenda Alejandra Romero" },
  { id: 8, nombre: "Karina Adriana Guerrero" },
  { id: 9, nombre: "Miguel Angel Rodriguez" },
  { id: 10, nombre: "Jorge Borgues" },
  { id: 11, nombre: "Gerardo Garcia" },
  { id: 12, nombre: "Yhel Beuty" },
];

const PREMIOS_INICIALES = [
  { id: 1, cantidad: 1, nombre: "Exhibidor Pink Power" },
  { id: 2, cantidad: 1, nombre: "Exhibidor Pink Power" },
];

function App() {
  const Marquee = pkg.default || pkg;

  // 1. Cargar datos iniciales desde LocalStorage si existen
  const [participantes, setParticipantes] = useState(() => {
    const saved = localStorage.getItem("sorteo_participantes");
    return saved ? JSON.parse(saved) : PARTICIPANTES_INICIALES;
  });

  const [premios, setPremios] = useState(() => {
    const saved = localStorage.getItem("sorteo_premios");
    return saved ? JSON.parse(saved) : PREMIOS_INICIALES;
  });

  const [ganadores, setGanadores] = useState(() => {
    const saved = localStorage.getItem("sorteo_ganadores");
    return saved ? JSON.parse(saved) : [];
  });

  const [ganadorActual, setGanadorActual] = useState(null);
  const [modalGanadorOpen, setModalGanadorOpen] = useState(false);

  // 2. Guardar cambios en LocalStorage en tiempo real
  useEffect(() => {
    localStorage.setItem("sorteo_participantes", JSON.stringify(participantes));
  }, [participantes]);

  useEffect(() => {
    localStorage.setItem("sorteo_premios", JSON.stringify(premios));
  }, [premios]);

  useEffect(() => {
    localStorage.setItem("sorteo_ganadores", JSON.stringify(ganadores));
  }, [ganadores]);

  // Verificar si ya no quedan premios con stock disponible
  const premiosDisponibles = premios.filter((p) => p.cantidad > 0);
  const sorteoFinalizado = premiosDisponibles.length === 0;

  // 3. Registrar al ganador y actualizar inventario
  const handleGanadorSeleccionado = (participanteGanador, premioGanador) => {
    const nuevoRegistroGanador = {
      id: Date.now(),
      participante: participanteGanador,
      premio: premioGanador,
      fecha: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setGanadorActual(nuevoRegistroGanador);
    setModalGanadorOpen(true);

    // Agregar a la lista acumulada de ganadores
    setGanadores((prev) => [nuevoRegistroGanador, ...prev]);

    // Descontar stock del premio
    setPremios((prevPremios) =>
      prevPremios.map((p) =>
        p.nombre === premioGanador.nombre
          ? { ...p, cantidad: p.cantidad - 1 }
          : p,
      ),
    );

    // Remover al participante
    setParticipantes((prevParticipantes) =>
      prevParticipantes.filter((p) => p.nombre !== participanteGanador.nombre),
    );
  };

  // Función para reiniciar el sorteo completo
  const reiniciarSorteo = () => {
    if (window.confirm("¿Seguro que deseas reiniciar todo el sorteo?")) {
      localStorage.removeItem("sorteo_participantes");
      localStorage.removeItem("sorteo_premios");
      localStorage.removeItem("sorteo_ganadores");
      setParticipantes(PARTICIPANTES_INICIALES);
      setPremios(PREMIOS_INICIALES);
      setGanadores([]);
    }
  };

  return (
    <Box sx={{ bgcolor: "transparent", minHeight: "100vh", pb: 6 }}>
      <Grid container spacing={2}>
        {/* Banner Superior -logos- */}
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
              alt='Wapizima'
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
              style={{ width: "40%", maxWidth: "320px", height: "auto" }}
            />
          </Box>
        </Grid>

        {/* Sección Principal: Muestra la Ruleta O la Pantalla Final de Ganadores */}
        <Grid
          size={12}
          sx={{ display: "flex", justifyContent: "center", mt: -10 }}
        >
          {sorteoFinalizado ? (
            <ListaGanadores
              ganadores={ganadores}
              onReiniciar={reiniciarSorteo}
            />
          ) : (
            <RuletaCanvas
              premios={premios}
              participantes={participantes}
              onGanadorSeleccionado={handleGanadorSeleccionado}
            />
          )}
        </Grid>

        {/* Marquesina de Participantes restantes */}
        {!sorteoFinalizado && participantes.length > 0 && (
          <Grid size={12} sx={{ mt: -5 }}>
            <Marquee pauseOnHover speed={50}>
              {participantes.map((p) => (
                <Typography
                  component='span'
                  key={p.id}
                  sx={{
                    mx: 3,
                    fontWeight: "medium",
                    color: "#fff",
                    fontSize: "1.1rem",
                  }}
                >
                  {p.nombre.trim()}
                </Typography>
              ))}
            </Marquee>
          </Grid>
        )}
      </Grid>

      {/* Modal / Pop-up de Ganador individual */}
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
            boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
          }}
        >
          <Typography
            variant='h4'
            sx={{ color: "#E5127E", fontWeight: "bold", mb: 2 }}
          >
            ¡Felicidades! 🎉
          </Typography>
          <Typography
            variant='h5'
            sx={{ color: "#333", mb: 1, fontWeight: "bold" }}
          >
            {ganadorActual?.participante?.nombre.trim()}
          </Typography>
          <Typography variant='body1' sx={{ color: "#666", mb: 3 }}>
            Ha ganado:{" "}
            <b style={{ color: "#E5127E" }}>{ganadorActual?.premio?.nombre}</b>
          </Typography>
          <Button
            variant='contained'
            onClick={() => setModalGanadorOpen(false)}
            sx={{
              bgcolor: "#E5127E",
              fontWeight: "bold",
              px: 4,
              borderRadius: "20px",
              "&:hover": { bgcolor: "#c40e6b" },
            }}
          >
            Continuar
          </Button>
        </Paper>
      </Modal>
    </Box>
  );
}

export default App;
