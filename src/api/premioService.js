import api from "./axiosConfig";

export const getPremios = async () => {
  const response = await api.get("/premios");
  return response.data;
};

export const getPremiosDisponibles = async () => {
  const response = await api.get("/premios/disponibles");
  return response.data;
};

export const createPremio = async (data) => {
  const response = await api.post("/premios", data);
  return response.data;
};

export const deletePremio = async (id) => {
  const response = await api.delete(`/premios/${id}`);
  return response.data;
};
