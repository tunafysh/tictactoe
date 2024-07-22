import NextAuthConfig from "next-auth"
 
export const authConfig = NextAuthConfig({
  pages: {
    signIn: '/login',
  },
  providers: [], // Add providers with an empty array for now
})