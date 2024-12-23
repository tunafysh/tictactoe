// import { sql } from "@vercel/postgres"
import { Button } from "@/components/ui/button";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
  } from "@/components/ui/drawer"
import { logout } from "@/app/actions"
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";
import Router, { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function Stats ({ playername, image }: { playername: string, image: string | null | undefined }) {
  const { data: session, status } = useSession();
  const [gamesPlayed, setGamesPlayed] = useState(0);
  const [gamesWon, setGamesWon] = useState(0);
  const router = useRouter()

  useEffect(() => {
    if(session?.user?.id !== undefined){

      console.log(session?.user?.id);
      fetch("/api/stats?id=" + session?.user?.id + "&action=games", { method: "GET",}).then(res => res.json()).then(res => {
        console.log(res);
        setGamesPlayed(res);
      })
      fetch("/api/stats?id=" + session?.user?.id + "&action=wins", { method: "GET",}).then(res => res.json()).then(res => {
        console.log(res);
        setGamesWon(res);
      })
    }
  }, [session]);

    return (
        <Drawer>
        <DrawerTrigger asChild>
          {image !== null? (<Avatar className="absolute top-4 left-4">
      <AvatarImage src={session?.user?.image ?? ""} alt={`@${session?.user?.name}`} />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>):<Button className="absolute top-4 left-4">My stats</Button>}
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{capitalize(playername)}&apos;s stats</DrawerTitle>
              <DrawerDescription>A basic dashboard for your statistics.</DrawerDescription>
            </DrawerHeader>
            <div className="grid grid-rows-3 grid-flow-col border-zinc-500 rounded">
                <p>
                    <span className="font-bold">Games played: </span>
                    <span className="text-slate-300">{gamesPlayed}</span>
                </p>
                <p>
                    <span className="font-bold">Games won: </span>
                    <span className="text-slate-300">{gamesWon}</span>
                </p>
                <p>
                    <span className="font-bold">Games lost: </span>
                    {/* @ts-ignore */}
                    <span className="text-slate-300">{gamesPlayed - gamesWon}</span>
                </p>
            </div>
            <DrawerFooter>
              <Button variant="destructive" onClick={() => {
                logout();
                router.refresh();
              }}>Log Out</Button>
              <DrawerClose asChild>
                <Button variant="outline">Okay</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
 }