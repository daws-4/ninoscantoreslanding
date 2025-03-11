"use server";

import { cookies } from "next/headers";

export async function Verificacion(password: number) {

    const algo = Number(process.env.CLAVE_SECRETA);

    if (password !== algo) {
        throw new Error("La contraseña es incorrecta");
    }

    const coocqui = await cookies()
    coocqui.set("Autorizado", password.toString(), {
        maxAge: 60 * 60 * 24 * 15
    });
}