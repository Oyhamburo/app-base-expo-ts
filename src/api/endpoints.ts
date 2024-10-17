// src/api/endpoints.ts
import { API_BASE_URL } from "./constants";

export const REGISTER_ENDPOINT = `${API_BASE_URL}/users/register`;
export const LOGIN_ENDPOINT = `${API_BASE_URL}/users/login`;
export const USER_PROFILE_ENDPOINT = `${API_BASE_URL}/users/profile`;
export const AUTH_VALIDATE_TOKEN = `${API_BASE_URL}/users/validate-token`;
