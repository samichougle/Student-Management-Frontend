import { api } from "@/lib/axios";

export async function login(email: string, password: string) {
  const response = await api.post(
    "/users/login",
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );

  return response.data;
}

export async function getProfile() {
  const response = await api.get("/users/profile", {
    withCredentials: true,
  });

  return response.data.data;
}

export async function logout() {
  const response = await api.post(
    "/users/logout",
    {},
    {
      withCredentials: true,
    },
  );

  return response.data;
}
