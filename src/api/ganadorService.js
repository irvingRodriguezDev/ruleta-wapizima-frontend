import api from "./axiosConfig";

export const registrarGanador = async (participanteId, premioId) => {
  const response = await api.post("/ganadores", { participanteId, premioId });
  return response.data;
};

export const getHistorialGanadores = async () => {
  const response = await api.get("/ganadores");
  return response.data;
};
