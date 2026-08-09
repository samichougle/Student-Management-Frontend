"use client";

import { useEffect, useState } from "react";
import { getProfile } from "@/services/auth.service";

export type CurrentUser = {
  id: number;
  name: string;
  email: string;
  role: string;
};

export function useCurrentUser() {
  const [user, setUser] = useState<CurrentUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function loadUser() {
      try {
        const profile = await getProfile();
        setUser(profile);
      } catch (error) {
        console.error("Failed to load current user:", error);
      } finally {
        setIsLoading(false);
      }
    }

    loadUser();
  }, []);

  return {
    user,
    isLoading,
  };
}
