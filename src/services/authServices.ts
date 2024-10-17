import AsyncStorage from "@react-native-async-storage/async-storage";
import apiClient from "../api/apiClient";
import { LOGIN_ENDPOINT, REGISTER_ENDPOINT } from "../api/endpoints";
import { JWT_TOKEN_KEY } from "../constants/storagesKeys";

export const authService = {
  login: async (email: string, password: string) => {
    try {
      const response = await apiClient.post(LOGIN_ENDPOINT, {
        email,
        password,
      });
      const token = response.data.token;
      await AsyncStorage.setItem(JWT_TOKEN_KEY, token);
      return token;
    } catch (error) {
      throw new Error("Error en el login");
    }
  },

  register: async (name: string, email: string, password: string) => {
    try {
      const response = await apiClient.post(REGISTER_ENDPOINT, {
        name,
        email,
        password,
      });
      const token = response.data.token;
      await AsyncStorage.setItem(JWT_TOKEN_KEY, token);
      return token;
    } catch (error) {
      throw new Error("Error en el registro");
    }
  },

  logout: async () => {
    try {
      await AsyncStorage.removeItem(JWT_TOKEN_KEY);
    } catch (error) {
      throw new Error("Error al cerrar sesión");
    }
  },
};
