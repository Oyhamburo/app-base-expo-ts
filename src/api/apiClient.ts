// src/api/apiClient.ts
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { API_BASE_URL } from "./constants";

// Crear una instancia de axios
const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Agregar un interceptor para incluir el JWT en los encabezados
apiClient.interceptors.request.use(
  async (config) => {
    // Obtener el token del AsyncStorage
    const token = await AsyncStorage.getItem("jwt_token");

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;
