import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  TextField,
} from "@mui/material";
import React from "react";

const AddParticipante = ({ open, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      role='alertdialog'
    >
      <DialogTitle id='alert-dialog-title' sx={{ color: "#E5127E" }}>
        Registrar participante
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid size={12} sx={{ padding: "4px" }}>
            <TextField
              type='text'
              variant='outlined'
              label='Premio'
              autoComplete='off'
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          autoFocus
          variant='contained'
          color='error'
        >
          Cerrar
        </Button>
        <Button
          variant='contained'
          sx={{ bgcolor: "#E5127E" }}
          onClick={handleClose}
        >
          Guardar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddParticipante;
