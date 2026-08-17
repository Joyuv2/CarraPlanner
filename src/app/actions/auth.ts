"use server"

import { hashPassword } from "@/lib/encrypt";
import { db, memberAdd } from "@/lib/db";

export async function signUpUser(formData: FormData) {
    const name = formData.get('name') as string;
    const password = formData.get('password') as string;

    if (!name || !password || password.length < 8) {
        return {error: "Campo(s) inválido(s)"}
    }

    const hashedPassword = await hashPassword(password);

    try {
        await memberAdd(name, hashedPassword)
        return {success: true}
    } catch(error) {
        return {message: "Registro de membro falhou", error: error }
    }
}