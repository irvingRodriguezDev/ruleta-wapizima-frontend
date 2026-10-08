import { Box, Paper, Typography } from "@mui/material";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
const MiniGanadora = ({ posicion, ganadora }) => {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
        p: 2,
        borderRadius: 4,
        background: "rgba(255,255,255,0.75)",
        border: "1px solid rgba(229,18,126,0.15)",
      }}
    >
      <Typography
        sx={{
          color: "#E5127E",
          fontSize: "1.8rem",
          fontWeight: 900,
        }}
      >
        {posicion}
      </Typography>

      <Box
        component='img'
        src={ganadora.imagen}
        alt={ganadora.nombre}
        sx={{
          width: "100%",
          height: 150,
          objectFit: "contain",
          my: 1,
          borderRadius: 2,
        }}
      />

      <Typography
        sx={{
          fontWeight: 800,
          color: "#333",
          fontSize: "0.95rem",
        }}
      >
        {ganadora.nombre}
      </Typography>
    </Paper>
  );
};

export default MiniGanadora;
