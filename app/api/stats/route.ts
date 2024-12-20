import { db, profiles, users } from "@/schema"
import { NextRequest, NextResponse } from "next/server"
import { eq, sql } from "drizzle-orm"

export async function GET(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    console.log(id)
    console.log(action)
    if( id === null || action === null){
        return NextResponse.json({ error: "Invalid request." }, { status: 500 })
    }else {
        let uid = await crosscheckIdToUserId(id)
        let query = await db.select(action == "games" ? { games: profiles.games } : action == "wins" ? { wins: profiles.wins }: {admin: profiles.admin}).from(profiles).where(eq(profiles.userid, uid))
        console.log(query)
        if(query.length === 0){
            await db.insert(profiles).values({userid: uid, games: 0, wins: 0, admin: false})
        }
        let result = action == "games"? query[0].games: action == "wins"? query[0].wins: query[0].admin
        return NextResponse.json(query.length != 0? result: "User created")
    }
}

export async function POST(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const id = searchparams.get("id")
    const action = searchparams.get("action")
    console.log(id)
    console.log(action)
    if( action === "admin"){
        return NextResponse.json({ error: "You cannot become an admin." }, { status: 500 })
    }
    if( id === null || action === null){
        return NextResponse.json({ error: "Invalid request." }, { status: 500 })
    }
    else{
        let uid = await crosscheckIdToUserId(id)
        let currValue = sql<number>`${action == "games"? "games": "wins"} + 1`
        let query = await db.update(profiles).set(action == "games" ? { games: currValue } : { wins: currValue }).where(eq(profiles.userid, uid))
        return NextResponse.json(query)
    }
}

async function crosscheckIdToUserId(id: string){
    let result = await db.select({ userid: users.userid }).from(users).where(eq(users.id, id))
    let uid = result[0].userid
    console.log(uid)
    return uid
}