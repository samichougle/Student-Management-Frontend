import { api } from "@/lib/axios";

export async function getCurrentUser() {
  try {
    const response = await api.get("/users/profile");

    return response.data.data;
  } catch {
    return null;
  }
}

export async function isAuthenticated() {
  const user = await getCurrentUser();

  return !!user;
}

export async function logout() {
  try {
    await api.post("/users/logout");
  } catch (error) {
    console.error("Logout failed:", error);
  }
}
