import NextAuth from "next-auth"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import Github from "next-auth/providers/github"
import Resend from "next-auth/providers/resend"
import WebAuthn from "next-auth/providers/webauthn"
import { db } from "@/schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
    // @ts-ignore
    adapter: DrizzleAdapter(db),
    //* will have to use the default next auth page for now
    // pages: {
    //     signIn: "/login",
    // },
    providers: [Github, Resend, WebAuthn],
    experimental: {
        enableWebAuthn: true
    },
    callbacks: {
        session: async ({ session, user }) => {
            session.user.id = user.id
            return session
        },
        redirect: async ({ url, baseUrl }) => {
            return baseUrl
        }
    }
})
