"use server"
import NextAuthConfig, { CallbacksOptions } from 'next-auth';
import Google from "next-auth/providers/google"
import Github from "next-auth/providers/github"
import Instagran from "next-auth/providers/instagram"
import Credentials from "next-auth/providers/credentials"
import { z } from "zod"
import { sql } from '@vercel/postgres';
import type User from '@/lib/definitions/user';
const bcrypt = require('bcrypt');

type Awaitable<T> = T | Promise<T>;

type CustomCallbacksOptions = CallbacksOptions & {
    authorized: (params: { auth: any, request: { nextUrl: any } }) => boolean | Promise<boolean | Response>;
  };

async function getUser(email: string): Promise<User | undefined> {
    try {
      const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
      return user.rows[0];
    } catch (error) {
      console.error('Failed to fetch user:', error);
      throw new Error('Failed to fetch user.');
    }
  }

export const authConfig = NextAuthConfig({
  pages: {
    signIn: '/login',
  },
    callbacks: {
        authorized: ({ auth, request: { nextUrl } }) => {
        const isLoggedIn = !!auth?.user;
        const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
        if (isOnDashboard) {
            if (isLoggedIn) return true;
            return false; // Redirect unauthenticated users to login page
        } else if (isLoggedIn) {
            return Response.redirect(new URL('/dashboard', nextUrl));
        }
        return true;
        },
    } as CustomCallbacksOptions,
  providers: [
    Google({
        clientId: process.env.GOOGLE_CLIENT_ID || "",
        clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
    }),
    Github({
        clientId: process.env.GITHUB_CLIENT_ID || "",
        clientSecret: process.env.GiTHUB_CLIENT_SECRET || ""
    }),
    Instagran({
        clientId: process.env.INSTAGRAM_CLIENT_ID || "",
        clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || ""
      }),
    Credentials({
      credentials: {
        email: {
          label: 'Email',
          type: 'text',
          placeholder: 'Enter your email',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Enter your password',
        },
      },
      async authorize(credentials, req): Promise<User | null> {
        const parsedCredentials = z
            .object({ email: z.string().email(), password: z.string().min(6) })
            .safeParse(credentials);

        if (parsedCredentials.success) {
            const { email, password } = parsedCredentials.data;
            const user = await getUser(email);
            if (!user) return null;

            const passwordsMatch = bcrypt.compare(bcrypt.hashSync(password), user.password);
            if (passwordsMatch) return user;
        }

        console.log('Invalid credentials');
        return null;
    },
  },
),
  ],
});