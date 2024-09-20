"use client";
import { useState, useEffect, useContext, Suspense } from "react";
import LoginForm from "@/components/auth/authui";
import { Toaster, toast } from "sonner";
import { Stats } from "@/components/menus/stats";
import MainMenu from "@/components/menus/mainmenu";
import { ModeToggle } from "@/components/modetoggle";
import { useGamepads } from "react-ts-gamepads";
import Single from "@/components/engines/singleengine";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon } from "@radix-ui/react-icons";

const isPhone =
  typeof window !== "undefined"
    ? /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      )
    : false;

export default function Home() {
  const [isMobile] = useState(isPhone);
  const [username, setUsername] = useState("");
  const [matchpass, setMatchPass] = useState(Boolean);
  const [del, setDel] = useState(Boolean);
  const router = useRouter()
  //TODO add the damn gamepad support
  // const [gamepads, setGamepads] = useState<GamepadRef>({});
  // useGamepads(gamepads => setGamepads(gamepads));


  useEffect(() => {
    if (del) {
      fetch(window.location.href + "api/player", { method: "DELETE" })
        .then((res) => res.text())
        .then((text) => {
          window.location.reload();
        });
    }
  }, [del]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch(window.location.href + "api/player", { method: "GET" })
        .then((res) => res.text())
        .then((text) => {
          if (text != "") {
            console.log(text);
            setUsername(text);
          } else {
            console.log("not signed in.");
            console.log(text);
          }
        });
    }
  }, []);

  return (
    <>
      <main className="flex justify-center h-screen w-screen">
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
