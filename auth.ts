"use server"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github" 
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"
import Resend from "next-auth/providers/resend"
import { DrizzleAdapter } from "@auth/drizzle-adapter"
import { db } from "./schema"

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db),
  providers: [Github({
    clientId: process.env.AUTH_GITHUB_ID ?? "",
    clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
  }), 
  Resend,
  Google({
    clientId: process.env.AUTH_GOOGLE_ID ?? "",
    clientSecret: process.env.AUTH_GOOGLE_SECRET ?? ""
  }), Instagram({}),
    // Credentials({
    //   credentials: {
    //     username: { label: "Username" },
    //     password: { label: "Password", type: "password" },
    //   },
    // }),
  ],
  pages: {
    signIn: "/login"
  },
})