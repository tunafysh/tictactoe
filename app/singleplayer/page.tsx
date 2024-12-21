"use client";
import { useState, useEffect, Suspense } from "react";
import { Toaster } from "sonner";
import { ModeToggle } from "@/components/modetoggle";
import Single from "@/components/engines/singleengine";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { SimpleCookieBanner } from "@/components/ui/cookie";

const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home() {
  const [isMobile] = useState(isPhone);
  const router = useRouter()
  //TODO add the damn gamepad support
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));


  useEffect(() => {
      fetch("/api/stats?action=games", { method: "POST",});
  }, []);

  return (
    <>
      <main className="flex justify-center h-screen w-screen">
        <SimpleCookieBanner className="fixed bottom-8 right-8">
          We use cookies just to store the games you played and your wins and nothing else, we don&apos;t track you, your data is useless to me.
        </SimpleCookieBanner>
      <Suspense fallback={<p>Loading...</p>}>
      <Single isMobile={isMobile} />
      <button onClick={ () => router.push("/")} className="absolute animate-face top-4 left-4 w-5 h-5"><ArrowLeftIcon width={"25px"} height={"25px"} /></button>
        <Toaster richColors position="top-center" />
        </Suspense>
      </main>
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
