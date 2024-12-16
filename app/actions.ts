"use server"
import { signIn, signOut } from "@/auth"

interface Passkey {
    action: 'register'
}

export async function login(provider: string, data?: FormData | Passkey) {
    if (provider === "credentials"){
        return await signIn("credentials",data, { callbackUrl: "/" })
    }
    else{
        return await signIn(provider, { callbackUrl: "/" })
    }
}

export async function signup() {
    
}

export async function logout() {
    await signOut()
}