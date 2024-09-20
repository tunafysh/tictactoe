"use server"
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import Github from "next-auth/providers/github" 
import Google from "next-auth/providers/google"
import Instagram from "next-auth/providers/instagram"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Github({
    clientId: process.env.AUTH_GITHUB_ID ?? "",
    clientSecret: process.env.AUTH_GITHUB_SECRET ?? ""
  }), Google({
    clientId: process.env.AUTH_GOOGLE_ID ?? "",
    clientSecret: process.env.AUTH_GOOGLE_SECRET ?? ""
  }), Instagram({}),
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) return null; // If credentials are undefined, return null
    
        const response = await fetch('/your-api-endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        });
    
        if (!response.ok) return null;
    
        return (await response.json()) ?? null;
    },
    }),
  ],
  pages: {
    signIn: "/login"
  },
})