import { Button } from "./ui/button";
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

export function Stats ({ playername }: {playername: string}) {
    return (
        <Drawer>
        <DrawerTrigger asChild>
          <Button className="absolute animate-fade top-4 left-4">My stats</Button>
        </DrawerTrigger>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>{playername}&apos;s stats</DrawerTitle>
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
              <Button>Submit</Button>
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </div>
        </DrawerContent>
      </Drawer>
    )
 }