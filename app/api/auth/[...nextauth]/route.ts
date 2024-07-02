import NextAuth from "next-auth"
import "next-auth/providers"

const handler = NextAuth({
    // Configure one or more authentication providers
    providers: [

    ],
})

export { handler as GET, handler as POST }