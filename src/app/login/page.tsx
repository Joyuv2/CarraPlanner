"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { Lilex } from "next/font/google";

const lilex = Lilex(
    {
        weight: "500",
        subsets: ["latin"]
    }
)

function Input({name, placeholder, type}: {name:string, placeholder:string, type:string}) {
    return (
        <input className="p-3 bg-gray-900 rounded-2xl border-2 w-full focus:outline-0 border-foreground-3 text-xl" name={name} type={type} placeholder={placeholder} required></input>
    )
}

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
        <div className={`${lilex.className} flex items-center justify-center`}>
            <form action={handleSubmit} className="flex flex-col m-10 gap-4 p-4 bg-background-3 rounded-xl justify-center items-center w-[80em]">
                <Input name="name" type="text" placeholder="Nome..."/>
                <Input name="password" type="password" placeholder="Senha..."/>
                <button type="submit" className="hover:cursor-pointer border-black border-b-2 border-r-2 rounded-2xl text-2xl bg-background-2 hover:border-0 min-w-[40em] hover:mb-[2px] hover:mr-[2px]">Entrar</button>
                {error && <p>{error}</p>}
            </form>
        </div>
    )
}