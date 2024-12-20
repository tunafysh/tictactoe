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
        let result = await sql`SELECT "${action}" FROM "profile" WHERE userid="${uid}";`
        return NextResponse.json(result)
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
        let currentValue = await sql`SELECT "${action}" FROM "profile" WHERE userid="${uid}";`
        let result = await sql`UPDATE "profile" SET games=${currentValue} + 1 WHERE userid="${uid}";`
        return NextResponse.json(result)
    }
}

async function crosscheckIdToUserId(id: string){
    let uid = await sql`SELECT userid FROM "user" WHERE id="${id}";`
    return uid
}