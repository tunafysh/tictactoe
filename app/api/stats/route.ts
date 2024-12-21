import { cookies } from "next/headers"
import { NextRequest, NextResponse } from "next/server"

export async function GET(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const action = searchparams.get('action')
    if (action == "wins") {
        const wins = await req.cookies.get('wins')
        return NextResponse.json({ wins: wins || 0 })
    }
    else if (action == "games") {
        const games = await req.cookies.get('games')
        return NextResponse.json({ games: games || 0 })
    }
    else {
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }    
}

export async function POST(req: NextRequest) {
    const searchparams = req.nextUrl.searchParams
    const action = searchparams.get('action')
    if (action == "wins") {
        const wins = (await req.cookies.get('wins'))?.value || '0'
        await req.cookies.set('wins', (parseInt(wins) + 1).toString())
        return NextResponse.json({ success: true })
    }
    else if (action == "games") {
        const games = (await req.cookies.get('games'))?.value || '0'
        await req.cookies.set('games', (parseInt(games) + 1).toString())
        return NextResponse.json({ success: true })
    }
    else {
        return NextResponse.json({ error: "Invalid action" }, { status: 400 })
    }
}