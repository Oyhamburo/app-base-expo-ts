import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import apiClient from "../api/apiClient";
import { AUTH_VALIDATE_TOKEN } from "../api/endpoints";
import { authService } from "../services/authServices"; // Importar el service
import { JWT_TOKEN_KEY } from "../constants/storagesKeys";

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        // Obtener el token desde AsyncStorage
        const token = await AsyncStorage.getItem(JWT_TOKEN_KEY);

        if (token) {
          // Enviar petición al servidor para validar el token
          const response = await apiClient.get(AUTH_VALIDATE_TOKEN, {
            headers: {
              Authorization: `Bearer ${token}`, // Incluir el token en el header
            },
          });

          if (response.status === 200) {
            // Token válido
            setIsAuthenticated(true);
          } else {
            // Token inválido o expirado
            setIsAuthenticated(false);
          }
        } else {
          // No hay token
          setIsAuthenticated(false);
        }
      } catch (error) {
        console.error("Error validando el token", error);
        setIsAuthenticated(false);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Método para el login
  const login = async (email: string, password: string) => {
    setLoading(true);
    try {
      await authService.login(email, password); // Llamada al service
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error en el login", error);
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Método para el registro
  const register = async (name: string, email: string, password: string) => {
    setLoading(true);
    try {
      await authService.register(name, email, password); // Llamada al service
      setIsAuthenticated(true);
    } catch (error) {
      console.error("Error en el registro", error);
      setIsAuthenticated(false);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  // Método para el logout
  const logout = async () => {
    setLoading(true);
    try {
      await authService.logout(); // Llamada al service para eliminar el token
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Error al cerrar sesión", error);
    } finally {
      setLoading(false);
    }
  };

  return { isAuthenticated, loading, login, register, logout };
};
