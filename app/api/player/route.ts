import { NextRequest, NextResponse } from 'next/server';

// Handle GET requests
export async function GET(req: NextRequest) {
  // Retrieve the value of the "player" cookie
  const playerCookie = req.cookies.get('player')?.value;
  return new Response(playerCookie)
}

// Handle POST requests
export async function POST(request: NextRequest) {
  const player = await request.text(); // Get the value from the request body
  if (player != ""){
    const response = NextResponse.json({ message: 'Invalid name' }, { status: 200 });
    return response
  }

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

export function DELETE(request: NextRequest) {
  const response = NextResponse.json({ message: 'Cookie deleted successfully' }, { status: 200 });
  response.cookies.delete('player');
  return response;
}