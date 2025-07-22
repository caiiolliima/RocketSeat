import React from "react";
import useUser from "../hooks/use-user";
import type { User } from "../models/user";

export default function UserNewForm() {
  const formRef = React.useRef<HTMLFormElement>(null);
  const { createUser, userRequestStatus } = useUser();

  async function handleSubmit(event: React.FormEvent) {
    if (!formRef.current) {
      return;
    }

    event.preventDefault();

    const data = new FormData(formRef.current);

    const payload = {
      id: data.get("id"),
      name: data.get("name"),
    };

    await createUser(payload as User);
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <div>
        <input placeholder="Username" name="id" required></input>
      </div>
      <div>
        <input placeholder="Nome" name="name" required></input>
      </div>
      <div>
        <button type="submit">
          {userRequestStatus === "saving" ? "Criando..." : "Criar usuário"}
        </button>
      </div>
    </form>
  );
}
