import * as auth from "firebase/auth"
import * as firestore from "firebase/firestore"
import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  // Retrieve the value of the "player" cookie
  const cookievalue = req.cookies.get('player')?.value;
  if(cookievalue !== null || undefined){
    return new Response(cookievalue)
  }
}
// Handle POST requests
export async function POST(request: NextRequest) {
  const player = await request.text() // Get the value from the request body

  // Set the "player" cookie
  const response = NextResponse.json({ message: 'Cookie set successfully' }, { status: 200 });
  response.cookies.set({
      name: 'player',
      value: player,
      httpOnly: true,
      secure: false, // Set to true in production
  });

  return response;
}
