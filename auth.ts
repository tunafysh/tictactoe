import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Github from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"
import WebAuthn from "next-auth/providers/webauthn"
import { db } from "@/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
    // @ts-ignore
    adapter: DrizzleAdapter(db),
    // pages: {
    //     signIn: "/login",
    // },
    providers: [Github, Resend, WebAuthn],
    experimental: {
        enableWebAuthn: true
    },
    session: {
        maxAge: 3600
    }
})
