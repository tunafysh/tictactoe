import { db, profiles } from "@/schema"
import { NextRequest, NextResponse } from "next/server"
import { eq, sql } from "drizzle-orm"

export async function profileHandler(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    if (id === "null" || action === null) {
        return NextResponse.json({ error: "Malformed URL" }, { status: 500 })
    }else{        
        if(req.method === "GET") {
            let result = await db.select(action == "games" ? { games: profiles.games } : action == "wins" ? { wins: profiles.wins }: {admin: profiles.admin}).from(profiles).where(eq(profiles.userId, id??"null"))
            return NextResponse.json(result[0].games ?? result[0].wins ?? result[0].admin)
        } 
        else if(req.method === "POST") {
            if( action === "admin"){
                return NextResponse.json({ error: "You cannot become an admin." }, { status: 500 })
            }
            let result = await db.update(profiles).set(action == "games" ? { games: sql`${profiles.games} + 1` } : { wins: sql`${profiles.wins} + 1` }).where(eq(profiles.userId, id??"null"))
            return NextResponse.json(result)
        }
    }
}

export {profileHandler as GET}
export {profileHandler as POST}