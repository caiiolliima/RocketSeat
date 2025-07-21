import React from "react";
import { fetcher } from "../helpers/api";
import type { User } from "../models/user";

export default function useUser() {
  const [user, setUser] = React.useState<User | null>(null);
  const [requestStatus, setRequestStatus] = React.useState<
    "loading" | "saving" | "idle"
  >("idle");

  const getUser = React.useCallback(async (username: string) => {
    try {
      setRequestStatus("loading");

      const data = await fetcher(`/users/${username}`);

      setUser(data);
    } catch (error) {
      console.error(error);
      alert("Erro ao buscaro usuário");
    } finally {
      setRequestStatus("idle");
    }
  }, []);

  return { user, userRequestStatus: requestStatus, getUser };
}
