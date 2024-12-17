import { db, profiles } from "@/schema"
import { NextRequest, NextResponse } from "next/server"
import { eq, sql } from "drizzle-orm"

export async function GET(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    let result = await db.select(action == "games" ? { games: profiles.games } : action == "wins" ? { wins: profiles.wins }: {admin: profiles.admin}).from(profiles).where(eq(profiles.userId, id??"null"))
    return NextResponse.json(result[0].games ?? result[0].wins ?? result[0].admin)
}

export async function POST(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    if( action === "admin"){
        return NextResponse.json({ error: "You cannot become an admin." }, { status: 500 })
    }
    let result = await db.update(profiles).set(action == "games" ? { games: sql`${profiles.games} + 1` } : { wins: sql`${profiles.wins} + 1` }).where(eq(profiles.userId, id??"null"))
    return NextResponse.json(result)
}