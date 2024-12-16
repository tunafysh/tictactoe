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
import { Dispatch, SetStateAction } from "react";
import { logout } from "@/app/actions"

function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

export function Stats ({ setDel, playername }: { setDel: Dispatch<SetStateAction<boolean>>, playername: string }) {
  
    async function deletePlayer() {

        setDel(true)
    }

    return (
        <Drawer>
        <DrawerTrigger asChild>
          <Button className="absolute top-4 left-4">My stats</Button>
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
                    <span className="text-slate-300">0</span>
                </p>
                <p>
                    <span className="font-bold">Games won: </span>
                    <span className="text-slate-300">0</span>
                </p>
                <p>
                    <span className="font-bold">Games lost: </span>
                    <span className="text-slate-300">0</span>
                </p>
            </div>
            <DrawerFooter>
              <Button variant="destructive" onClick={() => logout()}>Log Out</Button>
              <DrawerClose asChild>
                <Button variant="outline">Okay</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
 }