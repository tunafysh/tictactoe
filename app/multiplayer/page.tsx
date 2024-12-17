"use client";
import { useState, useEffect, Suspense } from "react";
import { Toaster } from "sonner";
import { ModeToggle } from "@/components/modetoggle";
import Multi from "@/components/engines/multiengine";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { db, profiles } from "@/schema";
import { eq, sql } from "drizzle-orm";

const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home() {
  const [isMobile] = useState(isPhone);
  const { data: session, status } = useSession();
  const router = useRouter()
  //TODO add the damn gamepad support
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));



  useEffect(() => {
    fetch("/api/stats?id=" + session?.user?.id + "&action=games", { method: "POST",}).then(res => res.json()).then(res => console.log(res));
  }, [session]);
  return (
    <>
      <main className="flex justify-center h-screen w-screen">
      <Suspense fallback={<p>Loading...</p>}>
      <Multi isMobile={isMobile} />
        <Toaster richColors position="top-center" />
        </Suspense>
      </main>
      <button onClick={ () => router.push("/")} className="absolute animate-face top-4 left-4 w-5 h-5"><ArrowLeftIcon width={"25px"} height={"25px"} /></button>
      <div id="modetoggle" className="absolute animate-fade top-4 right-4">
      <ModeToggle />
    </div>
    <p className="absolute animate-fade bottom-4 left-4 text-zinc-500">
      Made with ♥️ by Hanan
    </p>
    <p className="absolute animate-fade bottom-4 right-4 text-zinc-500">Ver: 0.5.2</p>
    </>          
  );
}
