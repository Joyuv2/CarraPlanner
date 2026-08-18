"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";

export default function LoginPage() {
    const [error, setError] = useState("")

    async function handleSubmit(formData: FormData) {
        const res = await signIn("credentials", {
            name: formData.get("name"),
            password: formData.get("password"),
            redirect: false,
        })

        if (res?.error) {
            setError("Nome e ou senha inválidos")
        } else {
            window.location.href = "/"
        }
    }
    return (
        <form action={handleSubmit}>
            <input name="name" type="text" placeholder="Nome..." required />
            <input name="password" type="password" placeholder="Senha..." required />
            <button type="submit">Entrar</button>
            {error && <p>{error}</p>}
        </form>
    )
}