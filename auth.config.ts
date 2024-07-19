// "use server"
// import NextAuthConfig from 'next-auth';
// import Google from "next-auth/providers/google"
// import Github from "next-auth/providers/github"
// import Instagran from "next-auth/providers/instagram"
// import Credentials from "next-auth/providers/credentials"
// import { z } from "zod"
// import { sql } from '@vercel/postgres';
// import type User from '@/components/definitions/user';
// import bcrypt from 'bcrypt';

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//       const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//       return user.rows[0];
//     } catch (error) {
//       console.error('Failed to fetch user:', error);
//       throw new Error('Failed to fetch user.');
//     }
//   }

// export const authConfig = NextAuthConfig({
//   pages: {
//     signIn: '/login',
//   },
//   providers: [
//     Google({
//         clientId: process.env.GOOGLE_CLIENT_ID || "",
//         clientSecret: process.env.GOOGLE_CLIENT_SECRET || ""
//     }),
//     Github({
//         clientId: process.env.GITHUB_CLIENT_ID || "",
//         clientSecret: process.env.GiTHUB_CLIENT_SECRET || ""
//     }),
//     Instagran({
//         clientId: process.env.INSTAGRAM_CLIENT_ID || "",
//         clientSecret: process.env.INSTAGRAM_CLIENT_SECRET || ""
//       }),
//     Credentials({
//         async authorize(credentials) {
//             const parsedCredentials = z
//               .object({ email: z.string().email(), password: z.string().min(6) })
//               .safeParse(credentials);

//               if (parsedCredentials.success) {
//                 const { email, password } = parsedCredentials.data;
//                 const user = await getUser(email);
//                 if (!user) return null;

//                 const passwordsMatch = await bcrypt.compare(password, user.password); 
//                 if (passwordsMatch) return user;
      
//             }

//             console.log('Invalid credentials');
//             return null;
//           },
//         })]
// });