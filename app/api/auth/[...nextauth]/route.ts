import { NextResponse } from "next/server"


export default function POST() {
    return NextResponse.json({ message: "alpha feature. will be available soon" }, { status: 200 })
} 