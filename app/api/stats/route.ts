import { db, profiles, users } from "@/schema"
import { NextRequest, NextResponse } from "next/server"
import { eq, sql } from "drizzle-orm"

export async function GET(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    if( id === null || action === null){
        return NextResponse.json({ error: "Invalid request." }, { status: 500 })
    }else {
        let uid = await crosscheckIdToUserId(id)
        let result = await db.select(action == "games" ? { games: profiles.games } : action == "wins" ? { wins: profiles.wins }: {admin: profiles.admin}).from(profiles).where(eq(profiles.userid, uid))
        return NextResponse.json(result[0].games ?? result[0].wins ?? result[0].admin)
    }
}

export async function POST(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    if( action === "admin"){
        return NextResponse.json({ error: "You cannot become an admin." }, { status: 500 })
    }
    if( id === null || action === null){
        return NextResponse.json({ error: "Invalid request." }, { status: 500 })
    }
    else{
        let uid = await crosscheckIdToUserId(id)
        let result = await db.update(profiles).set(action == "games" ? { games: sql`${profiles.games} + 1` } : { wins: sql`${profiles.wins} + 1` }).where(eq(profiles.userid, uid))
        return NextResponse.json(result)
    }
}

async function crosscheckIdToUserId(id: string){
    let uid = await db.select({ userid: users.userid }).from(users).where(eq(users.id, id))
    return uid[0].userid
}