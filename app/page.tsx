"use client";
import { useState, useEffect } from "react";
import { Toaster } from "sonner";
import MainMenu from "@/components/menus/mainmenu";
import { ModeToggle } from "@/components/modetoggle";
import { useTheme } from "next-themes";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Stats } from "@/components/menus/stats";
import { useRouter } from "next/navigation";
import { Avatar, AvatarImage, AvatarFallback } from "@radix-ui/react-avatar";

const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home() {
  const month = new Date().toLocaleString("en-US", { month: "long" });
  const day = new Date().toLocaleString("en-US", { day: "numeric" });
  const [isMobile] = useState(isPhone);
  const { theme, setTheme } = useTheme();
  const { data: session, status } = useSession();
  const router = useRouter();
  //TODO add the damn gamepad support
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));

  useEffect(() => {
    if ( day == "26" && month == "November") setTheme("albania")
  }, [day, month, setTheme])

  useEffect(() => {
  }, []);

  return (
    <>
      <main className={`flex justify-center h-screen w-screen`}>
        <MainMenu isMobile={isMobile} />
        <Toaster richColors position="top-center" />
      </main>
        {status === "authenticated"? session?.user?.image != null? 
        (<Avatar>
      <AvatarImage src={session?.user?.image} alt={`@${session?.user?.name}`} />
      <AvatarFallback>User</AvatarFallback>
    </Avatar>)
     : <Stats playername={session.user?.name ?? ""} />: <Button className="absolute top-4 left-4" onClick={() => {router.push("/login")}}>Sign in</Button>}
      <div id="modetoggle" className="absolute top-4 right-4">
      {day != "28" && month != "November"? <ModeToggle />: <></>}
    </div>
    <p className="absolute bottom-4 left-4 text-zinc-500">
      Made with ♥️ by Hanan {session?.user?.id}
    </p>
    <p className="absolute bottom-4 right-4 text-zinc-500">Ver: 0.9.4</p>
    </>          
  );
}
