import api from "./axiosConfig";

export const getParticipantes = async () => {
  const response = await api.get("/participantes");
  return response.data;
};

export const createParticipante = async (data) => {
  const response = await api.post("/participantes", data);
  return response.data;
};

export const deleteParticipante = async (id) => {
  const response = await api.delete(`/participantes/${id}`);
  return response.data;
};
