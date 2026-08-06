import { is } from "zod/v4/locales";

export function getAccessToken() {
  if (typeof window === "undefined") return null;
  return localStorage.getItem("accessToken");
}

export function isAuthenticated() {
  return !!getAccessToken();
}

export function logout() {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("user");
}
