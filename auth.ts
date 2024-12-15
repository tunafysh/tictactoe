import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { sql } from "@vercel/postgres"
import { drizzle } from "drizzle-orm/vercel-postgres"
import Github from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"
import WebAuthn from "next-auth/providers/webauthn"

const db = drizzle(sql);

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: DrizzleAdapter(db),
    pages: {
        signIn: "/login",
    },
    providers: [Github, Resend, WebAuthn],
    experimental: {
        enableWebAuthn: true
    }
})
