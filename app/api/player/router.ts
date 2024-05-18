import { NextApiRequest, NextApiResponse } from "next";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method == "POST") {
    cookies().set("player", req.body.name);
    return NextResponse.json({ player: cookies().get("player")?.value });
  }
  return NextResponse.json({ player: cookies().get("player")?.value });
}