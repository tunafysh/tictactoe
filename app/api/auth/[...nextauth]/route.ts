import { NextResponse } from "next/server"


const handler = NextResponse.json({ message: "alpha feature. will be available soon" }, { status: 200 })

export { handler as GET, handler as POST }