import React from "react";
import {
  Paper,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Button,
  Divider,
} from "@mui/material";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

export default function ListaGanadores({ ganadores, onReiniciar }) {
  return (
    <Paper
      elevation={6}
      sx={{
        p: 4,
        borderRadius: 4,
        maxWidth: 550,
        width: "90%",
        bgcolor: "#FFFFFF",
        textAlign: "center",
        border: "3px solid #E5127E",
        mt: 8,
      }}
    >
      <EmojiEventsIcon sx={{ fontSize: 60, color: "#FFD700", mb: 1 }} />

      <Typography
        variant='h4'
        sx={{ color: "#E5127E", fontWeight: "bold", mb: 1 }}
      >
        ¡Sorteo Concluido!
      </Typography>

      <Typography variant='body1' sx={{ color: "#666", mb: 3 }}>
        Lista oficial de ganadores de muebles <b>Wapizima & PinkPower</b>:
      </Typography>

      <Divider sx={{ mb: 2 }} />

      <List sx={{ maxHeight: 320, overflowY: "auto", pr: 1 }}>
        {ganadores.map((item, index) => (
          <React.Fragment key={item.id || index}>
            <ListItem sx={{ py: 1 }}>
              <ListItemIcon sx={{ minWidth: 36 }}>
                <EmojiEventsIcon sx={{ color: "#E5127E" }} />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography
                    variant='subtitle1'
                    sx={{ fontWeight: "bold", color: "#333" }}
                  >
                    {item.participante.nombre.trim()}
                  </Typography>
                }
                secondary={
                  <Typography
                    variant='body2'
                    sx={{ color: "#E5127E", fontWeight: "medium" }}
                  >
                    Premio: {item.premio.nombre}
                  </Typography>
                }
              />
              <Typography variant='caption' sx={{ color: "#aaa" }}>
                {item.fecha}
              </Typography>
            </ListItem>
            {index < ganadores.length - 1 && <Divider component='li' />}
          </React.Fragment>
        ))}
      </List>

      <Box sx={{ mt: 4 }}>
        <Button
          variant='outlined'
          startIcon={<RestartAltIcon />}
          onClick={onReiniciar}
          sx={{
            color: "#E5127E",
            borderColor: "#E5127E",
            fontWeight: "bold",
            borderRadius: "20px",
            px: 3,
            "&:hover": {
              borderColor: "#c40e6b",
              bgcolor: "rgba(229, 18, 126, 0.04)",
            },
          }}
        >
          Reiniciar Nuevo Sorteo
        </Button>
      </Box>
    </Paper>
  );
}
