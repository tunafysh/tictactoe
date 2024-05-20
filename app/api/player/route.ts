import { NextRequest, NextResponse } from "next/server";
import * as firebase from "firebase/app"

//TODO Add firebase integration

// Handle GET requests
export async function GET(req: NextRequest) {
  // Retrieve the value of the "player" cookie
  const playerCookie = req.cookies.get('player');
  return NextResponse.json({ player: playerCookie });
}

// Handle POST requests
export async function POST(request: NextRequest) {
  const { player } = await request.json(); // Get the value from the request body

  // Set the "player" cookie
  const response = NextResponse.json({ message: 'Cookie '+ player+ ' set successfully' }, { status: 200 });
  response.cookies.set({
      name: 'player',
      value: player,
      httpOnly: true,
      secure: false // Set to true in production
  });

  return response;
}
